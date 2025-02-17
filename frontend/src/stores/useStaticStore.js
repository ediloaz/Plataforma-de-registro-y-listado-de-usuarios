import { create } from 'zustand';
import { mapCoins } from '@utils/mappers'
import { persist } from 'zustand/middleware';
import { getRoles } from '@services/role.service';
import { getCoins, getExchangeRate } from '@services/coins.service';
import { getAccessList } from '@services/access.service';
import { getAreaCodes, getProducts } from "@services/type.services";
import { getUser } from '@services/user.service';
import { getHolidays } from '@services/holidays.services';

export const useStaticStore = create(
  persist(
    (set, get) => ({
      currencies: null,
      localCurrency: null,
      internationalCurrency: null,
      roles: null,
      areaCodes: null,
      products: null,
      access: null,
      exchangeRate: null,
      holidays: null,
      userLogged: null,
      setStaticData: (currencies, areaCodes, roles, products) => set({ currencies, areaCodes, roles, products }),
      removeStaticData: () => set({ currencies: null, areaCodes: null, roles: null, products: null, access: null, exchangeRate: null, holidays: null, userLogged: null }),
      checkAccess: (accessId) => !!accessId && get().access?.[accessId]?.active,
      fetchAccess: async () => {
        const userId = get().userLogged?.id;
        if (!userId) return;
        getAccessList(userId).then((accessFetched) => {
          const access = formatAccess(accessFetched);
          set({ access });
        });
      },
      fetchStaticData: async (userId) => {
        Promise.allSettled([
          getCoins(),
          getAreaCodes(),
          getRoles(),
          getProducts(),
          getAccessList(userId),
          getExchangeRate(),
          getUser(userId),
          getHolidays(),
        ]).then((results) => {
          const data = results.reduce((acc, result, index) => {
            acc[FETCHED_KEYS[index]] = result.status === 'fulfilled' ? result.value : null;
            return acc;
          }, {});

          const {
            currenciesFetched,
            countriesFetched,
            rolesFetched,
            productsFetched,
            accessFetched,
            exchangeRateFetched,
            userFetched,
            holidaysFetched,
          } = data;

          const currencies = currenciesFetched ? mapCoins(currenciesFetched) : [];
          const areaCodes = countriesFetched || [];
          const roles = rolesFetched || [];
          const products = productsFetched || [];
          const access = accessFetched ? formatAccess(accessFetched) : [];
          const exchangeRate = exchangeRateFetched;
          const userLogged = userFetched;
          const holidays = holidaysFetched?.fechas;
          const localCurrency = currencies.find(currency => currency.isLocal);
          const internationalCurrency = currencies.find(currency => currency.isInternational);

          set({
            currencies,
            areaCodes,
            roles,
            products,
            access,
            exchangeRate,
            userLogged,
            holidays,
            localCurrency,
            internationalCurrency,
          });
        });
      },
    }),
    {
      name: 'staticData',
    }
  )
);

const formatAccess = (access) => access.reduce((acc, item) => {
  if (item.tipo === 'permission') {
    acc[item.id] = {
      active: item?.activo,
      name: item?.nombre,
      group: item?.grupo,
      id: item?.id,
      originalId: item?.originalId
    };
  }
  return acc;
}, {});

const FETCHED_KEYS = [
  'currenciesFetched',
  'countriesFetched',
  'rolesFetched',
  'productsFetched',
  'accessFetched',
  'exchangeRateFetched',
  'userFetched',
  'holidaysFetched',
];
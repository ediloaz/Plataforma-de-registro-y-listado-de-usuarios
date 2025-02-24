import locations from "@data/locations.json";

export const getProvinceName = (id) => {
    return locations.provincias[id].nombre;
}

export const getCantonName = (provinceId, cantonId) => {
    return locations.provincias[provinceId]?.cantones[cantonId]?.nombre;
}

export const getDistrictName = (provinceId, cantonId, districtId) => {
    return locations.provincias[provinceId]?.cantones[cantonId]?.distritos[districtId];
}
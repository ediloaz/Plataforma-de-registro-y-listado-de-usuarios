import { useEffect } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const usePageStore = create(persist(
    (set, get) => ({
        title: '',
        leftMenu: true,
        setTitle: (title) =>
            useEffect(() => {
                set({ title });
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, [])
        ,
        removeTitle: () => set({ title: '' }),
        toogleLeftMenu: () => set({ leftMenu: !get().leftMenu }),
        hideLeftMenu: () => set({ leftMenu: false }),
    }),
    { name: 'page' }
));
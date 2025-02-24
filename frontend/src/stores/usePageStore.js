import { useEffect } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Archivos de ejemplo de cómo se utilizaría el store con la librería zustand, lo tenía en otro proyecto y lo copié aquí.
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
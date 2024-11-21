import { createContext, PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";

type Category = {
    id: number;
    name: string;
};

type DataState = {
    categories: Category[];
};

const initialState: DataState = {
    categories: [],
};

export const DataContext = createContext<DataState>(initialState);

export function DataProvider({ children }: PropsWithChildren): ReactNode {
    const [categories, setCategories] = useState<Category[]>([]);

    async function loadCategories() {
        const result = await invoke<Category[]>("get_categories");
        setCategories(result);
    }

    useEffect(() => {
        loadCategories();
    }, []);

    return (
        <DataContext.Provider
            value={{
                categories,
            }}
        >
            {children}
        </DataContext.Provider>
    );
}

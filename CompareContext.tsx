import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '@/data/productsData';

interface CompareContextType {
  compareProducts: Product[];
  addToCompare: (product: Product) => void;
  removeFromCompare: (productId: number) => void;
  clearCompare: () => void;
  isInCompare: (productId: number) => boolean;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider = ({ children }: { children: ReactNode }) => {
  const [compareProducts, setCompareProducts] = useState<Product[]>([]);

  const addToCompare = (product: Product) => {
    setCompareProducts((prev) => {
      if (prev.length >= 2) {
        return prev;
      }
      if (prev.find((p) => p.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromCompare = (productId: number) => {
    setCompareProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const clearCompare = () => {
    setCompareProducts([]);
  };

  const isInCompare = (productId: number) => {
    return compareProducts.some((p) => p.id === productId);
  };

  return (
    <CompareContext.Provider
      value={{
        compareProducts,
        addToCompare,
        removeFromCompare,
        clearCompare,
        isInCompare,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (!context) {
    throw new Error('useCompare must be used within CompareProvider');
  }
  return context;
};

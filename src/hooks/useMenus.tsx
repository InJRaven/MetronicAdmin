import { useContext } from 'react';
import { MenuContext } from '@provider';

export const useMenus = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error('useMenus must be used within a MenusProvider');
  }

  return context;
};
import clsx from 'clsx';

import { IMenuHeadingProps } from './';

const MenuHeading = ({ className, children }: IMenuHeadingProps) => {
  return <span className={clsx('menu-heading', className && className)}>{children}</span>;
};

export { MenuHeading };

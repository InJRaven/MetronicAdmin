import {
  ColumnFiltersState,
  RowSelectionState,
  SortingState,
  Table,
  TableOptions,
} from "@tanstack/react-table";
import { ReactNode } from "react";

export type TDataTableLayoutCellSpacing = "xs" | "md" | "sm" | "lg";
export type TDataTableSelectedRowIds = Set<string>;

export type TDataTableRequestParams = {
  pageIndex: number;
  pageSize: number;
  sorting?: SortingState;
  columnFilters?: ColumnFiltersState;
};

export interface TDataTableProps<TData extends object> {
  columns: any[];
  data?: TData[];
  rowSelection?: boolean;
  getRowId?: TableOptions<TData>["getRowId"];
  onRowSelectionChange?: (
    state: RowSelectionState,
    table?: Table<TData>
  ) => void;
  messages?: {
    loading?: ReactNode | string;
    empty?: ReactNode | string;
  };
  layout?: {
    cellSpacing?: TDataTableLayoutCellSpacing;
    cellBorder?: boolean;
    card?: boolean;
    classes?: {
      table?: "";
      container?: "";
      root?: "";
    };
  };
  pagination?: {
    page?: number;
    size?: number;
    sizes?: number[];
    sizesInfo?: string;
    sizesLabel?: string;
    sizesDescription?: string;
    more?: boolean;
    moreLimit?: number;
    info?: string;
  };
  sorting?: { id: string; desc?: boolean }[];
  toolbar?: ReactNode;
  filters?: { id: string; value: unknown }[];
  serverSide?: boolean;
  onFetchData?: (params: TDataTableRequestParams) => Promise<any>;
  children?: ReactNode;
}

export interface IDataTableContextProps<TData extends object> {
  props: TDataTableProps<TData>;
  table: Table<TData>;
  totalRows: number;
  loading: boolean;
  setLoading: (state: boolean) => void;
  reload: () => void;
}

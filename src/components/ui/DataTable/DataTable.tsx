import {
  DataTableInner,
  DataTableProvider,
  TDataTableProps,
} from "./";


const DataTable = <TData extends object>(props: TDataTableProps<TData>) => {
  

  return (
    <DataTableProvider
      {...props}
    >
      <DataTableInner />
    </DataTableProvider>
  );
};

export { DataTable };

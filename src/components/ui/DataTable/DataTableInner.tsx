import { cn } from "@/lib/utils";
import { DataTableContent, DataTableLoader, useDataTable } from ".";

const DataTableInner = () => {
  const { props, table, loading } = useDataTable();

  return (
    <div
      className={cn(
        "data-table",
        props.layout?.card &&
          "card [&>[data-container]]:border-x-0 [&>[data-container]]:rounded-none [&>[data-container]>[data-table]>thead>tr>th:first-child]:px-5 [&>[data-container]>[data-table]>tbody>tr>td:first-child]:px-5 [&>[data-toolbar]]:p-5 [&>[data-pagination]]:px-5 [&>[data-pagination]]:py-3",
        props.layout?.classes?.root
      )}
    >
      <div>
        toolbar
      </div>
      {props.toolbar && props.toolbar}

      <div
        className={cn(
          "data-table-wrapper h-full scrollable-x-auto",
          props.layout?.classes?.container
        )}
        data-container
      >
        <DataTableContent />
        {loading && <DataTableLoader />}

        {/* {table.getRowModel().rows.length > 0 && <DataGridPagination />} */}
        {table.getRowModel().rows.length > 0 && <div>Pagination</div>}
      </div>
    </div>
  );
};

export { DataTableInner };

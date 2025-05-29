import { flexRender, HeaderGroup, Row, Cell } from "@tanstack/react-table";
import { DataTableEmpty, TDataTableLayoutCellSpacing, useDataTable } from ".";

import { cn } from "@/lib/utils";
const DataTableContent = <TData,>() => {
  const { table, props } = useDataTable();
  const headCellSpacingOptions: Record<TDataTableLayoutCellSpacing, string> = {
    xs: "px-2.5",
    sm: "px-3",
    md: "px-4",
    lg: "px-6",
  };
  const bodyCellSpacingOptions: Record<TDataTableLayoutCellSpacing, string> = {
    xs: "p-2.5",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };
  const headCellSpacing = props.layout?.cellSpacing
    ? headCellSpacingOptions[props.layout?.cellSpacing]
    : headCellSpacingOptions["md"];
  const bodyCellSpacing = props.layout?.cellSpacing
    ? bodyCellSpacingOptions[props.layout?.cellSpacing]
    : bodyCellSpacingOptions["md"];
  const cellBorder = props.layout?.cellBorder ?? false;

  return (
    <table
      className={cn("rtl:text-right", props.layout?.classes?.table)}
      data-table
    >
      {/* Thead */}
      <thead className="[&_tr]:border-b">
        {table.getHeaderGroups().map((headerGroup: HeaderGroup<TData>) => (
          <tr
            key={headerGroup.id}
            className={cn(
              "data-[state=selected]:bg-muted",
              cellBorder && "[&_>:last-child]:border-e-0"
            )}
          >
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                colSpan={header.colSpan}
                className={cn(
                  headCellSpacing,
                  cellBorder && "border-e",
                  "rtl:text-right [&:has([role=checkbox])]:pe-0",
                  (
                    header.column.columnDef.meta as
                      | { headerClassName?: string }
                      | undefined
                  )?.headerClassName ?? ""
                )}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      {/* Tbody */}
      <tbody className="[&_tr:last-child]:border-0">
        {table.getRowModel().rows.length ? (
          table.getRowModel().rows.map((row: Row<TData>) => (
            <tr
              key={row.id}
              data-state={row.getIsSelected() ? "selected" : undefined}
              className={cn(
                "data-[state=selected]:bg-muted/50",
                cellBorder && "[&_>:last-child]:border-e-0"
              )}
            >
              {row.getVisibleCells().map((cell: Cell<TData, unknown>) => (
                <td
                  key={cell.id}
                  className={cn(
                    bodyCellSpacing,
                    cellBorder && "border-e",
                    "align-middle [&:has([role=checkbox])]:pe-0",
                    (
                      cell.column.columnDef.meta as
                        | { cellClassName?: string }
                        | undefined
                    )?.cellClassName ?? ""
                  )}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <DataTableEmpty />
        )}
      </tbody>
    </table>
  );
};
export { DataTableContent };

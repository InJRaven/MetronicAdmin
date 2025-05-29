import axios from "axios";
import {
  DataTableInner,
  DataTableProvider,
  TDataTableProps,
  TDataTableRequestParams,
} from "./";
import { ColumnDef } from "@tanstack/react-table";

const DataTable = <TData extends object>(props: TDataTableProps<TData>) => {
  const handleFetchData = async (params: TDataTableRequestParams) => {
    try {
      const res = await axios.get(
        "https://6817c7535a4b07b9d1cd3afa.mockapi.io/api/v1/Song"
      );
      return {
        data: res.data, // Dữ liệu bài hát
        totalCount: res.data.length, // Tổng số bản ghi (10)
      };
    } catch (error) {
      console.error("Failed to fetch songs:", error);
      throw error;
    }
  };
  const columns: ColumnDef<any>[] = [
    { accessorKey: "title", header: "Song Title" },
    { accessorKey: "artist", header: "Artist" },
    { accessorKey: "duration", header: "Duration" },
    { accessorKey: "genre", header: "Genre" },
    { accessorKey: "releaseYear", header: "Release Year" },
  ];
  return (
    <DataTableProvider
      {...props}
      serverSide={true}
      onFetchData={handleFetchData}
      columns={columns}
    >
      <DataTableInner />
    </DataTableProvider>
  );
};

export { DataTable };

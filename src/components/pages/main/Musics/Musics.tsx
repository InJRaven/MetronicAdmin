import { ColumnDef } from "@tanstack/react-table";
import axios from "axios";
import { Container, DataTable, TDataTableRequestParams } from "@/components/ui";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const Musics = () => {
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

  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "id",
        accessorFn: (row) => row.id,
        // header: () => {},
        // cell:({row}) => {}
        enableSorting: false,
        enableHiding: false,
        meta: {
          headerClassName: "w-0",
        },
      },
      {
        accessorFn: (row) => row.name,
        id: 'name',
        // header: ({ column }) => (
        //   <DataGridColumnHeader
        //     title="Team"
        //     filter={<ColumnFilter column={column} />}
        //     column={column}
        //   />
        // ),
        enableSorting: true,
        cell: (info) => (
          <div className="flex flex-col gap-2">
            <Link
              className="leading-none font-medium text-sm text-gray-900 hover:text-primary"
              to="#"
            >
              {info.row.original.name}
            </Link>
            <span className="text-2sm text-gray-700 font-normal leading-3">
              {info.row.original.description}
            </span>
          </div>
        ),
        meta: {
          headerClassName: 'min-w-[280px]'
        }
      },
    ],
    []
  );
  return (
    <Container.Fixed>
      <DataTable
        serverSide={true}
        layout={{ card: true }}
        onFetchData={handleFetchData}
        columns={columns}
      />
    </Container.Fixed>
  );
};

export { Musics };

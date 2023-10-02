"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import React, { useEffect } from "react";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { getCinemas } from "@/apis/cinema";
import { useQuery } from "@tanstack/react-query";
import LinearProgress from "@mui/material/LinearProgress";
import { PaginationData } from "@/apis";
type Props = {};

const columns: Column[] = [
  { id: "name", label: "Name" },
  { id: "description", label: "Description" },
  { id: "address", label: "Address" },
  {
    id: "created_at",
    label: "Created at",
    format: (value) => dayjs(value).format("MM/DD/YYYY HH:mm"),
  },
  {
    id: "action",
    label: "Action",
  },
];

export type Cinema = {
  id: number;
  created_at: string | null;
  updated_at: string | null;
  name: string;
  address: string;
  description: string;
  deleted_at: null;
};

type CinemaWithAction = Cinema & {
  action?: any;
};

interface Column {
  id: keyof CinemaWithAction;
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: any) => string;
}

const CinemaTable = (props: Props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(2);

  const { data, isLoading, isFetching, refetch } = useQuery<
    PaginationData<Cinema>
  >({
    queryKey: ["posts"],
    queryFn: () => getCinemas({ page: page + 1, per_page: rowsPerPage }),
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
  };

  useEffect(() => {
    console.log("Refetching...");
    refetch();
  }, [page, rowsPerPage]);

  return (
    <Paper>
      {(isLoading || isFetching) && <LinearProgress />}
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.data &&
              data.data.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      if (column.id === "action") {
                        return (
                          <TableCell>
                            <IconButton aria-label="edit">
                              <CreateIcon />
                            </IconButton>
                            <IconButton aria-label="delete">
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        );
                      }

                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[2, 5, 10, 25, 100]}
        component="div"
        count={(data && data.total) || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default CinemaTable;

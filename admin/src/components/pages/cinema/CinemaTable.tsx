"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import React from "react";
import dayjs from "dayjs";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
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

const rows: CinemaWithAction[] = [
  {
    id: 1,
    created_at: null,
    updated_at: null,
    name: "SM San Lazaro",
    address: "Felix Huertas Sampaloc Manila",
    description: "SM San Lazaro Cinema located in manila",
    deleted_at: null,
  },
  {
    id: 2,
    created_at: null,
    updated_at: null,
    name: "SM Manila",
    address: "Felix Huertas Sampaloc Manila",
    description: "SM Manila Cinema located in manila",
    deleted_at: null,
  },
  {
    id: 3,
    created_at: null,
    updated_at: null,
    name: "SM San Lazaro",
    address: "Felix Huertas Sampaloc Manila",
    description: "SM San Lazaro Cinema located in manila",
    deleted_at: null,
  },
  {
    id: 4,
    created_at: null,
    updated_at: null,
    name: "SM Manila",
    address: "Felix Huertas Sampaloc Manila",
    description: "SM Manila Cinema located in manila",
    deleted_at: null,
  },
  {
    id: 5,
    created_at: "2023-10-01T09:46:33.000000Z",
    updated_at: "2023-10-01T09:46:33.000000Z",
    name: "SM San Lazaro Cinema",
    address: "Felix Huertas Sampaloc Manila",
    description: "SM San Lazaro Cinema located in manila",
    deleted_at: null,
  },
  {
    id: 6,
    created_at: "2023-10-01T09:47:13.000000Z",
    updated_at: "2023-10-01T09:47:13.000000Z",
    name: "SM San Lazaro Cinema",
    address: "Felix Huertas Sampaloc Manila",
    description: "SM San Lazaro Cinema located in manila",
    deleted_at: null,
  },
];

const CinemaTable = (props: Props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper>
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
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
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default CinemaTable;

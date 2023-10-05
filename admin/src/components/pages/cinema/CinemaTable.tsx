"use client";
import { PaginationData } from "@/apis";
import { cinemaAPI } from "@/apis/cinema";
import { Cinema } from "@/app/(auth)/cinema/types";
import { pageRoutes } from "@/configs/pageRoutes";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import LinearProgress from "@mui/material/LinearProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";
import dayjs from "dayjs";
import { useConfirm } from "material-ui-confirm";
import Link from "next/link";
import { useSnackbar } from "notistack";
import React, { useReducer } from "react";
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

type Search = {
  page: 0;
  q: string;
  per_page: 10;
};

const CinemaTable = (props: Props) => {
  const confirm = useConfirm();
  const { enqueueSnackbar } = useSnackbar();
  // const [page, setPage] = React.useState(0);
  // const [search, setSearch] = React.useState("");
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [search, setSearch] = useReducer(
    (prev: any, next: any) => {
      return { ...prev, ...next };
    },
    { page: 0, q: "", per_page: 10 }
  );
  const searchParams = useDebounce(
    [search.q, search.page, search.per_page],
    300
  );

  const { data, isLoading, isFetching, refetch } = useQuery<
    PaginationData<Cinema>
  >({
    queryKey: ["posts", ...searchParams],
    queryFn: () =>
      cinemaAPI.getCinemas({
        page: search.page + 1,
        per_page: search.per_page,
        q: search.q,
      }),
    refetchOnWindowFocus: false,
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    setSearch({ page: newPage });
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearch({ page: 0, per_page: +event.target.value });
  };

  const handleDelete = async (id: number) => {
    confirm({
      title: "Delete Item",
      description: "Are you sure to delete this item?",
      confirmationText: "Yes",
    }).then(async () => {
      await cinemaAPI.deleteCinema(id.toString());
      enqueueSnackbar({
        message: "Cinema Deleted",
        variant: "success",
      });
      await refetch();
    });
  };

  return (
    <Card>
      {(isLoading || isFetching) && <LinearProgress />}

      <CardContent>
        <Grid container>
          <Grid item xs={4}>
            <TextField
              fullWidth
              variant="filled"
              label="Search"
              placeholder="Search name, description and address"
              value={search.q}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setSearch({ q: e.target.value })}
            />
          </Grid>
        </Grid>
      </CardContent>

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
                          <TableCell key={"action"}>
                            <IconButton
                              aria-label="edit"
                              href={pageRoutes.cinema.pages.edit(row.id).href}
                              LinkComponent={Link}
                            >
                              <CreateIcon />
                            </IconButton>
                            <IconButton
                              aria-label="delete"
                              onClick={() => handleDelete(row.id)}
                            >
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
        count={(data && data.total) || 0}
        rowsPerPage={search.per_page}
        page={search.page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  );
};

export default CinemaTable;

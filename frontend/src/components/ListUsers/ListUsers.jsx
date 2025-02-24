import { Button, LinearProgress, Typography} from "@mui/material";
import { DataGridPremium } from "@mui/x-data-grid-premium";
import { useListUsers } from "./useListUsers";
import { READONLY_COLUMNS_PROPS } from "@constants/tables";
import { ProfileDialog } from "@components/ProfileDialog/ProfileDialog";
import { useState } from "react";

export const ListUsers = () => {
  const { theme, users } = useListUsers();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  
  const handleClose = () => {
    setUser(null);
    setOpen(false);
  }

  const handleOpen = (user) => {
    console.log('Abrir el usuario', user);
    setUser(user);
    setOpen(true);
  }

  const columns = [
    { field: 'name', headerName: 'Nombre y apellidos', flex: 1, minWidth: 200,
      renderCell: (params) => (
        <Typography fontWeight={600} fontSize="14px">{params.row?.name}</Typography>
      )
    },
    { field: 'email', headerName: 'Correo electrónico', flex: 1, minWidth: 248,
      renderCell: (params) => (
        <Typography fontWeight={500} fontSize="14px" color="GrayText">{params.row?.email}</Typography>
      )
    },
    { field: 'phone', headerName: 'Número telefónico', flex: 1, minWidth: 248,
      renderCell: (params) => (
        <Typography fontWeight={500} fontSize="14px" color="GrayText">{params.row?.phone}</Typography>
      )
    },
    { ...READONLY_COLUMNS_PROPS, field: 'actions', headerName: 'Acciones', flex: 1, minWidth: 200,
      renderCell: (params) => (
        <Button
          variant="text"
          color="info"
          onClick={() => handleOpen(params.row)}
          sx={{ textTransform: 'none' }}
        >
          Ver detalle
        </Button>
      )
    },
  ]

  return (
    <>
      <DataGridPremium
        getRowId={(row) => row._id}
        slots={{ loadingOverlay: LinearProgress }}
        rows={users}
        columns={columns}
        loading={false}
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
          pinnedColumns: {  left: ['name'] },
        }}
        pageSizeOptions={[5, 10, 25]}
        sx={{
          minHeight: '10em',
          border: 'none',
          '& .MuiDataGrid-columnHeaders': {
            borderBottom: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            color: theme.palette.text.secondary,
            fontWeight: 600,
          },
        }}
        autoHeight
        pagination
      />
      <ProfileDialog
        open={open}
        onClose={handleClose}
        user={user}
      />
    </>
  );
}
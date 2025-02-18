import { Button, LinearProgress, Typography, useTheme } from "@mui/material";
import { DataGridPremium } from "@mui/x-data-grid-premium";

export const ListRegisters = () => {
  const theme = useTheme();

  const columns = [
    { field: 'name', headerName: 'Nombre y apellidos', flex: 1,
      renderCell: (params) => (
        <Typography fontWeight={600} fontSize="14px">{params.row?.name}</Typography>
      )
    },
    { field: 'email', headerName: 'Correo electrónico', flex: 1,
      renderCell: (params) => (
        <Typography fontWeight={500} fontSize="14px" color="GrayText">{params.row?.name}</Typography>
      )
    },
    { field: 'phone', headerName: 'Número telefónico', flex: 1,
      renderCell: (params) => (
        <Typography fontWeight={500} fontSize="14px" color="GrayText">{params.row?.name}</Typography>
      )
    },
    { field: 'actions', headerName: 'Acciones', flex: 1, 
      renderCell: (params) => (
        <Button
          variant="text"
          color="info"
          onClick={() => alert(params.row?.name)}
          sx={{ textTransform: 'none' }}
        >
          Ver detalle
        </Button>
      )
    },
  ]
  const rows = [
    { id: 1, name: 'John Doe', email: 'johndoe@email.com', phone: '1234567890' },
    { id: 2, name: 'Jane Doe', email: 'janedoe@email.com', phone: '0987654321' },
  ]

  return (
    <DataGridPremium
      slots={{
        // toolbar: () => CustomToolbar(true),
        loadingOverlay: LinearProgress,
      }}
      rows={rows}
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
    />
  );
}
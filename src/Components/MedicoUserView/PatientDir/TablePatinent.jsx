import { Button } from '@material-ui/core';

import { ModalBodyPacientes } from '../../../Styles For Components/ModalStyle';
import { Edit, Delete } from '@mui/icons-material';
import './TablePatient.scss';
import { DataGrid,GridToolbar,GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarDensitySelector, } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { useState } from 'react';


export const TablePatinent = ({State,EditOrDeleteSelector }) => {
    const [pageSize, setPageSize] = useState(10)

    const { styles } = ModalBodyPacientes();
    const columns = [
        { field: 'pacienteId', headerName: 'PacienteID', width: 90 },
        {
            field: 'nombre',
            headerName: 'Nombre',
            width: 150,
            editable: false,

        },
        {
            field: 'apellido',
            headerName: 'Apellido',
            width: 150,
            editable: false,

        },
        {
            field: 'fechaNacimiento',
            headerName: 'Fecha De Nacimiento',
            width: 200,
            editable: false,

        },
        {
            field: "Editar",
            headerName: "Editar",
            sortable: false,
            renderCell: (params) => {
         
                const data = params.row;
              return <Button onClick={()=>EditOrDeleteSelector(data,"Editar")}>Editar</Button>;
            },
          },
          {
            field: "Eliminar",
            headerName: "Eliminar",
            sortable: false,
            renderCell: (params) => {
         
                const data = params.row;
              return <Button onClick={()=>EditOrDeleteSelector(data,"Eliminar")}>Eliminar</Button>;
            },
          }



        

    ]
    
    function CustomToolbar() {
        return (
          <GridToolbarContainer>
        
            <GridToolbarColumnsButton />
            <GridToolbarFilterButton />
            <GridToolbarExport />
          </GridToolbarContainer>
        )
      }



    return (
        <>

            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid

                    getRowId={(State) => State.pacienteId}
                    
                    rows={State}
                    columns={columns}
                    checkboxSelection = {false}
                    pageSize={pageSize}
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[10, 25, 50]}
                    pagination
                    localeText={{
                        toolbarColumns: "Columnas",
                        toolbarFilters: "Filtros",
                        toolbarExport: "Exportar Data"
                      }}
                    components={{ Toolbar: CustomToolbar }}
                    disableSelectionOnClick
                />
            </Box>


          
        </>
    )
}

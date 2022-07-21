
import './PatientPageStyle.scss'
import { Table, TableContainer, TableHead, TableCell, TableRow, TableBody, Modal, Button, TextField, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core'
import { Edit, Delete } from '@mui/icons-material'
import { usePatient } from '../../../Hooks/usePatient'
import { ModalBodyPacientes } from '../../../Styles For Components/ModalStyle'




export const PatientPage = () => {
  const { styles } = ModalBodyPacientes();

  const { State,
    PostPatient,
    PutPatient,
    DeletePatient,
    handleChange,
    Paciente,
    openCloseCreateModal,
    CreateState,
    openCloseEditModal,
    EditOrDeleteSelector,
    EditState,
    openCloseDeleteModal,
    DeleteState
  } = usePatient();





  const bodyInsertar = (
    <div className={styles.modal}>
      <h3>Agregar Nuevo Paciente</h3>

      <TextField name="nombre" className='{styles.inputMaterial} ' label="Nombre" onChange={handleChange} />
      <br />
      <TextField name="apellido" className='{styles.inputMaterial} ' label="Apellido" onChange={handleChange} />
      <br />
      <TextField name="carrera" className='{styles.inputMaterial} ' label="Carrera" onChange={handleChange} />
      <br />
      <TextField name="departamento" className='{styles.inputMaterial} ' label="Departamento" onChange={handleChange} />
      <br />
      {/* <TextField name="sexo" className='{styles.inputMaterial} ' label="Sexo" onChange={handleChange} />
      <br /> */}
      <FormLabel>Genero</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="genderRadio"
      >
        <FormControlLabel name="sexo" value="femenino" control={<Radio />} label="Femenino" onChange={handleChange} />
        <FormControlLabel name="sexo" value="masculino" control={<Radio />} label="Masculino" onChange={handleChange} />


      </RadioGroup>
      <TextField name="telefono" className='{styles.inputMaterial} ' label="Telefono" onChange={handleChange} />
      <br />
      <TextField name="tipoPaciente" className='{styles.inputMaterial} ' label="Tipo de Paciente" onChange={handleChange} />
      <br />

      <TextField
        className='{styles.inputMaterial}'
        name="fechaNacimiento"
        label="Fecha de nacimiento"
        InputLabelProps={{ shrink: true, required: true }}
        type="date"
        onChange={handleChange}
      />
      <br />


      <div align="right">
        <Button color="primary" onClick={() => PostPatient()}>Insertar</Button>
        <Button onClick={() => openCloseCreateModal()}>Cancelar</Button>
      </div>
    </div>
  )


  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Editar paciente</h3>
      <TextField name="nombre" className='{styles.inputMaterial} ' label="Nombre" onChange={handleChange} value={Paciente && Paciente.nombre} />
      <br />
      <TextField name="apellido" className='{styles.inputMaterial} ' label="Apellido" onChange={handleChange} value={Paciente && Paciente.apellido} />
      <br />
      <TextField name="carrera" className='{styles.inputMaterial} ' label="Carrera" onChange={handleChange}value={Paciente && Paciente.carrera} />
      <br />
      <TextField name="departamento" className='{styles.inputMaterial} ' label="Departamento" onChange={handleChange} value={Paciente && Paciente.departamento}/>
      <br />
    
      <FormLabel>Genero</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={Paciente && Paciente.sexo}
        name="genderRadio"
      >
        <FormControlLabel name="sexo" value="femenino" control={<Radio />} label="Femenino" onChange={handleChange}/>
        <FormControlLabel name="sexo" value="masculino" control={<Radio />} label="Masculino" onChange={handleChange} />


      </RadioGroup>
      <TextField name="telefono" className='{styles.inputMaterial} ' label="Telefono" onChange={handleChange} value={Paciente && Paciente.telefono} />
      <br />
      <TextField name="tipoPaciente" className='{styles.inputMaterial} ' label="Tipo de Paciente" onChange={handleChange}  value ={Paciente && Paciente.tipoPaciente}/>
      <br />

      <TextField
        className='{styles.inputMaterial}'
        name="fechaNacimiento"
        label="Fecha de nacimiento"
        InputLabelProps={{ shrink: true, required: true }}
        type="date"
        onChange={handleChange}
        value={Paciente && Paciente.fechaNacimiento}
      />
      <br />


      <div align="right">
        <Button color="primary" onClick={() => PutPatient()}>Editar</Button>
        <Button onClick={() => openCloseEditModal()}>Cancelar</Button>
      </div>
    </div>
  )





  const bodyEliminar = (
    <div className={styles.modalEliminar}>
      <p>Estas Seguro que deseas eliminar el paciente <b>{Paciente && Paciente.nombre}</b>? </p>

      <div align="right">
        <Button color="secondary" onClick={() => DeletePatient()}>Si</Button>
        <Button onClick={() => openCloseDeleteModal()}>No</Button>
      </div>
    </div>
  )

  return (
    <>

      <div className='App content'>
        <br />

        <Button className="insertar" onClick={() => openCloseCreateModal()}>Insertar</Button>
        <br /> <br />
        <TableContainer className="Tb">
          <Table stickyHeader aria-label="sticky table" >
            <TableHead >
              <TableRow className="Pr-Row">
                <TableCell >PacienteID</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Apellido</TableCell>
                <TableCell>FechaDeNacimiento</TableCell>
                <TableCell>Carrera</TableCell>
                <TableCell>Departamento</TableCell>
                <TableCell>Sexo</TableCell>
                <TableCell>Telefono</TableCell>
                <TableCell>Tipo de Paciente</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>



            <TableBody className="Table-box">
              {State.map(cons => (
                <TableRow key={cons.pacienteId}>
                  <TableCell>{cons.pacienteId}</TableCell>
                  <TableCell>{cons.nombre}</TableCell>
                  <TableCell>{cons.apellido}</TableCell>
                  <TableCell>{cons.fechaNacimiento}</TableCell>
                  <TableCell>{cons.carrera}</TableCell>
                  <TableCell>{cons.departamento}</TableCell>
                  <TableCell>{cons.sexo}</TableCell>
                  <TableCell>{cons.telefono}</TableCell>
                  <TableCell>{cons.tipoPaciente}</TableCell>
                  <TableCell>
                    <Edit className={styles.iconos} onClick={() => EditOrDeleteSelector(cons, 'Editar')} />
                    &nbsp; &nbsp;
                    <Delete className={styles.iconos} onClick={() => EditOrDeleteSelector(cons, 'Eliminar')} />

                  </TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>



        <Modal open={CreateState}
          onClose={openCloseCreateModal}
        >
          {bodyInsertar}
        </Modal>

        <Modal open={EditState}
          onClose={openCloseEditModal}
        >
          {bodyEditar}
        </Modal>


        <Modal open={DeleteState}
          onClose={openCloseDeleteModal}
        >
          {bodyEliminar}
        </Modal>


      </div>



    </>
  )
}

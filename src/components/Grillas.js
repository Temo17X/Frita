import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import senuez from '../assets/img/senuez.jpeg';
import '../imgs.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CSSGrid() {
  return (
    <Box sx={{ width: 1 }}>
      <Box display="grid" gridTemplateColumns="repeat(24, 1fr)" gap={2}>


        <Box gridColumn="span 4">
          <Item>
              <h1>Foto de perfil</h1>
              <img src={senuez}/>
              
          </Item>
        </Box>


        <Box gridColumn="span 13">
          <Item>

            <h1>Información Personal</h1>
            <br></br>
            <p>Pasen porno por prontipagos</p>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '35ch' },
                 }}
                  noValidate
                 autoComplete="off"
               >
                 <TextField id="outlined-basic" label="Nombre completo" variant="outlined" />
                 <TextField id="outlined-basic" label="Edad" variant="outlined" />
                 <br></br>
                 <TextField id="outlined-basic" label="Lugar de Nacimiento" variant="outlined" />
                 <TextField id="outlined-basic" label="Genero" variant="outlined" />
         </Box>
         <br></br>
         <br></br>
          </Item>
        </Box>


        <Box gridColumn="span 7">
          <Item>

              <h1>Contacto</h1>
              <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '35ch' },
                 }}
                  noValidate
                 autoComplete="off"
               >
                 <TextField id="outlined-basic" label="Correo Electronico:" variant="outlined" />
                 <br></br>
                 <TextField id="outlined-basic" label="Telefono:" variant="outlined" />
                 
         </Box>
         <br></br>
         <br></br>
         <br></br>
          </Item>
        </Box>


        <Box gridColumn="span 7">
          <Item>

            <h1>Educación</h1>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '35ch' },
                 }}
                  noValidate
                 autoComplete="off"
               >
                
                 <TextField id="outlined-basic" label="Ultimo instituto cursado" variant="outlined" />
                 <br></br>
                 <TextField id="outlined-basic" label="Carrera Cursada" variant="outlined" />
                 <br></br>
                 <TextField id="outlined-basic" label="Titulado o Pasante" variant="outlined" />
                 <br></br>
                 <TextField id="outlined-basic" label="Periodo Cursado" variant="outlined" />
                 
         </Box>
          </Item>
        </Box>


        <Box gridColumn="span 8">
          <Item>

            <h1>Experiencia Laboral</h1>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '35ch' },
                 }}
                  noValidate
                 autoComplete="off"
               >
                
                 <TextField id="outlined-basic" label="¿Haz Trabajado?" variant="outlined" />
                 <br></br>
                 <TextField id="outlined-basic" label="Descripción de su ultimo trabajo" variant="outlined" />
                 <br></br>
                 <TextField id="outlined-basic" label="Periodo laborado" variant="outlined" />
         </Box>
          </Item>
        </Box>


        <Box gridColumn="span 8">
          <Item>

            <h1>Skills</h1>
            <h2>Cursos</h2>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                 }}
                  noValidate
                 autoComplete="off"
               >
                
                 <TextField id="outlined-basic" label="Curso 1" variant="outlined" />
                 <TextField id="outlined-basic" label="Años" variant="outlined" />
                 <br></br>
                 <TextField id="outlined-basic" label="Curso 2" variant="outlined" />
                 <TextField id="outlined-basic" label="Años" variant="outlined" />
                 <br></br>
                 <TextField id="outlined-basic" label="Curso 3" variant="outlined" />
                 <TextField id="outlined-basic" label="Años" variant="outlined" />
                 
         </Box>
          </Item>
        </Box>


      </Box>
    </Box>
  );
}
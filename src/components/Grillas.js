import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import senuez from '../assets/img/senuez.jpeg';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '../Grillas.css';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function About() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} style={{padding:'1rem'}}>
      <Item>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Item>
          <h1>Foto de perfil</h1>
          <h5>Todas las caras son hermosas xddddd</h5>
              <img src={senuez}/>
              <br></br>
              <p>Foto de perfil</p>
              <br></br>
              <p> .</p>  
              </Item>  
           </Grid>

          <Grid item xs={5}>
            <Item>
          <h1>Información Personal</h1>
          <h5>Es escencial al momento de venderte</h5>
            <br></br>
            
           
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
                 <FormControl>
                  <FormLabel id="demo-row-radio-buttons-group-label">Género</FormLabel>
                  <RadioGroup
                   row
                   aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    >
                  <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" /> 
                  <FormControlLabel value="Femenino" control={<Radio />} label="Femenino" />
                  </RadioGroup>
                </FormControl>
              </Box>
              </Item>
          </Grid>


          <Grid item xs={4}>
          <Item>
          <h1>Contacto</h1>
          <h5>La comunicación es vida</h5>
              <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '35ch' },
                 }}
                  noValidate
                 autoComplete="off"
               >
                 <TextField id="outlined-basic" label="Correo Electronico Escolar:" variant="outlined" />

                 <TextField id="outlined-basic" label="Correo Electronico Personal:" variant="outlined" />
                 <br></br>
                 <TextField id="outlined-basic" label="Telefono Fijo:" variant="outlined" />
                 <TextField id="outlined-basic" label="Telefono Móvil:" variant="outlined" />   
             </Box>
             </Item>
          
          </Grid>

          <Grid item xs={3}>
            <Item>
          <h1>Educación</h1>
          <h5>Tu trayectora escolar</h5>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '23ch' },
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
           </Grid>

           <Grid item xs={5}>
           <Item>
           <h1>Experiencia Laboral</h1>
           <h5>Tu trayectoria laboral</h5>
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
           </Grid>


           <Grid item xs={4}>
             <Item>
           <h1>Skills</h1>
           <h5>Complementa tu CV</h5>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '15ch' },
                 }}
                  noValidate
                 autoComplete="off"
               >
                
                 <TextField id="outlined-basic" label="Curso 1" variant="outlined" />
                 <TextField id="outlined-basic" label="Años XP" variant="outlined" />
                 <br></br>
                 <TextField id="outlined-basic" label="Curso 2" variant="outlined" />
                 <TextField id="outlined-basic" label="Años XP" variant="outlined" />
                 <br></br>
                 <TextField id="outlined-basic" label="Curso 3" variant="outlined" />
                 <TextField id="outlined-basic" label="Años XP" variant="outlined" />
                 
         </Box>
         </Item>
           </Grid>

        </Grid>
        </Item>
      </Box>
    </div>
    
  );
  }


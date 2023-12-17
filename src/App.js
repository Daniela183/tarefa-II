import React from 'react';
import { Box, TextField, Typography, Button, Checkbox, Grid } from '@mui/material';
import './App.css';

function App() {
    return (
        <Box style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'beige', minHeight: '100vh' }}>
            <Box style={{ display: 'flex', flexDirection: 'column', border: '2px solid black', padding: '30px', height: '550px', width: '600px', marginTop: '50px', rowGap: '8px' }}>
                <Typography style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '25px', color: '#006400' }} variant="body1" gutterBottom>Cadastro</Typography>
                <TextField style={{ padding:'10px'}} label='Nome'></TextField>
                <Grid container spacing={2}>
                    <Grid item xs={20}>
                        <TextField style={{ padding:'10px', width: '400px'}} label='Email'></TextField>
                        <TextField style={{ padding:'10px', width: '150px'}} label='Cpf'></TextField>
                    </Grid>
                </Grid>
                <TextField style={{ padding:'10px'}} label='Endereço'></TextField>
                <Grid container spacing={3}>
                    <Grid item xs={10}>
                        <TextField style={{ padding:'10px', width: '150px'}} label='Cidade'></TextField>
                        <TextField style={{ padding:'10px', width: '150px'}} label='Bairro'></TextField>
                        <TextField style={{ padding:'10px', width: '100px'}} label='Uf'></TextField>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={20}>
                    <Checkbox variant='contained'></Checkbox> Li e concordo com os termos de uso
                    </Grid>
                </Grid>
                <Button variant="contained" color="success">Enviar o formulário</Button>
                <Button variant="outlined" color="success" style={{ color: '#006412', border: '1px solid #01411C' }}>Já tenho cadastro</Button>

            </Box>
        </Box>
    );
}

export default App;

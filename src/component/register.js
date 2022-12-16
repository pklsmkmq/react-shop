import React, { useState } from 'react'
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { Link as RouterLink, useNavigate } from "react-router-dom";
const theme = createTheme();

function RegisterComponent() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const navigate = useNavigate();

    const regisAPI = async (e) => {
        e.preventDefault();
        console.log("Tombol Di Tekan");
        try {
            const url_api = "https://zealous-frog-leggings.cyclic.app/users/register";
            const response = await axios.post(url_api, {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword
            });
            if (response) {
                console.log('Berhasil');    
            } else {
                console.log("gagal");
            }
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "Column",
                    alignItems: "center"
                }}>
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>
                    <Box novalidate sx={{ m: 1 }}>
                        <TextField margin='normal' required fullWidth id='name' label='Name' name='name' autoComplete='name' autoFocus onChange={(e) => setName(e.target.value)} />
                        <TextField margin='normal' type='email' required fullWidth id='email' label='Email Address' name='email' autoComplete='email' onChange={(e) => setEmail(e.target.value)} />
                        <TextField margin='normal' type='password' required fullWidth id='password' label='Password' name='password' autoComplete='current password' onChange={(e) => setPassword(e.target.value)} />
                        <TextField margin='normal' type='password' required fullWidth id='confPassword' label='Confirmated Password' name='confPassword' autoComplete='current password' onChange={(e) => setConfPassword(e.target.value)} />
                        <Button type="submit" onClick={ regisAPI } fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                            Sign Up
                        </Button>
                    </Box>
                    <Grid container>
                        <Grid item>
                            <Link component={RouterLink} to="/" variant='body2'>I have an account? Sign In</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default RegisterComponent
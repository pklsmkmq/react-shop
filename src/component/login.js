import React, { useState } from 'react'
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { Link as RouterLink, useNavigate } from "react-router-dom";
const theme = createTheme();

const LoginComponent = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginAPI = async (e) => {
        e.preventDefault();
        console.log("Tombol Di Tekan");
        try {
            const url_api = "https://zealous-frog-leggings.cyclic.app/users/login";
            const response = await axios.post(url_api, {
                email: email,
                password: password
            });
            if (response) {
                console.log('Berhasil');    
            } else {
                console.log("gagal");
            }
            navigate('/home');
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
                        Sign In
                    </Typography>
                    <Box component="form" onSubmit={ loginAPI } novalidate sx={{ m: 1 }}>
                        <TextField margin='normal' type='email' required fullWidth id='email' label='Email Address' name='email' autoComplete='email' autoFocus onChange={(e) => setEmail(e.target.value)} />
                        <TextField margin='normal' type='password' required fullWidth id='password' label='Password' name='password' autoComplete='current password' onChange={(e) => setPassword(e.target.value)} />
                        <FormControlLabel control={<Checkbox value='remember' color='primary'/>} label="Remember Me"/>
                        <Button type="submit" fullWidth variant='contained' sx={{ mt: 3, mb: 2}}>
                            Sign In
                        </Button>
                    </Box>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant='body2'>Forgot Password</Link>
                        </Grid>
                        <Grid item>
                            <Link component={RouterLink} to="/register" variant='body2'>Don't have an account? Sign Up</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider>
    )
}

export default LoginComponent
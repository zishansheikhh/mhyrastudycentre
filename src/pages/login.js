import React from 'react';  
import MainLogo from "../assets/sf-white.png";
import MainLogo2 from "../assets/sf-black.png";
import { useState } from 'react';
import { useContext } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';


import {
  Button,
  TextField,
  Box,
  Grid,
  Typography,
  Avatar,
  Container,
  CssBaseline,
  Checkbox,
  FormControlLabel,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LoginSchema } from '@/schema/schema.index';
import { GlobalContext } from '@/context/global.context';
import { httpLogInUser } from '@/utils/api';
import { makeid } from '@/helper-functions';
import Head from 'next/head';

const StyledBox = styled(Box)`
    width: 80%;

    div{
        color: inherit;
    }
    label {
        color: inherit;
        z-index: 2;
    }
    input {
        color: inherit;
    }
    fieldset {
        border-color: ${props => props.theme == "light" ? 'black' : 'lightgrey'};

    }
    
    svg {
        color: ${props => props.theme == "light" ? 'black' : 'white'};
    }

    @media (min-width: 800px) {
        width: 100%;
    }
`
const StyledTypography = styled(Typography)`
    margin-top: 20px;
`;


const defaultFormFields = {
    Email: '',
    Password: ''
}

const LogIn = () => {
    const route = useRouter()

    const {theme, isLogin, setIsLogin, addNotifiction} = useContext(GlobalContext)


    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: defaultFormFields,
        validationSchema: LoginSchema,
        onSubmit : async (values) => {
            console.log({values})
            const data = await httpLogInUser(values)
            console.log({data})
            if (data.success) {
            //save auth token and redirct to home
                localStorage.setItem('admin', data.authToken)
                //set use name and email in local storage
                setIsLogin(true)
                route.push('/')
                const {userInfo} = data
                localStorage.setItem('sf-user-name', userInfo.Name)
                localStorage.setItem('sf-user-email', userInfo.Email)
                setTimeout(() => {
                    addNotifiction(makeid(5), "success", "You have logged in Successfully")
                }, 500);
            } else {
                addNotifiction(makeid(5), "danger", data)
            }
        }
    })


    return (
       <>
       <Head>
       <meta name="robots" content="noindex,nofollow"></meta>
       </Head>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {theme == "dark" ? (
              <Image src={MainLogo} alt="Saiyed Farhan" width={150} />
            ) : (
              <Image src={MainLogo2} alt="Saiyed Farhan" width={150} />
            )}
            <StyledTypography component="h1" variant="h5">
              Login
            </StyledTypography>
            <StyledBox component="form" onSubmit={handleSubmit} theme={theme} >
              <TextField
                margin="normal"
                required
                fullWidth
                id="Email"
                label="Email Address"
                name="Email"
                autoComplete="email"
                type="email"
                value={values.Email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.Email && Boolean(errors.Email)}
                helperText={touched.Email && errors.Email}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="Password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={values.Password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.Password && Boolean(errors.Password)}
                helperText={touched.Password && errors.Password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary"  />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item xs>
                  <Link href="/createaccount" variant="body2">
                  {"Don't have an account?"}
                  </Link>
                </Grid>
              </Grid>
            </StyledBox>
          </Box>
        </Container>
       </>
    )
}


  export default LogIn;  
import React, { useEffect } from "react";
import MainLogo from "../assets/sf-white.png";
import MainLogo2 from "../assets/sf-black.png";
import { useState } from "react";
import { useContext } from "react";
import { useFormik } from "formik";
import styled from "styled-components";

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
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { LoginSchema, RegistrationSchema } from "@/schema/schema.index";
import { GlobalContext } from "@/context/global.context";
import { httpCreateUserAccount, httpLogInUser } from "@/utils/api";
import { makeid } from "@/helper-functions";
import Head from "next/head";

const StyledBox = styled(Box)`
  width: 80%;

  div {
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
    border-color: ${(props) =>
      props.theme == "light" ? "black" : "lightgrey"};
  }

  svg {
    color: ${(props) => (props.theme == "light" ? "black" : "white")};
  }

  @media (min-width: 800px) {
    width: 100%;
  }
`;

const StyledTypography = styled(Typography)`
  margin-top: 20px;
`;

const defaultFormFields = {
  FirstName: "",
  LastName: "",
  Email: "",
  Password: "",
  Confirm_Password: "",
};

const CreateUserAccount = () => {
  const router = useRouter();

  const { theme, isLogin, setIsLogin, addNotifiction } =
    useContext(GlobalContext);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: defaultFormFields,
      validationSchema: RegistrationSchema,
      onSubmit: async (values) => {
        const { FirstName, LastName, Email, Password } = values;
        const data = await httpCreateUserAccount({
          FirstName,
          LastName,
          Email,
          Password,
        });
        console.log({ data });
        if (data.success) {
          //save auth token and redirct to home
          localStorage.setItem("admin", data.authToken);
          //set use name and email in local storage
          setIsLogin(true);
          router.push("/");
          const { userInfo } = data;
          localStorage.setItem("sf-user-name", userInfo.Name);
          localStorage.setItem("sf-user-email", userInfo.Email);
          setTimeout(() => {
            addNotifiction(
              makeid(5),
              "success",
              "You has been created in Successfully"
            );
          }, 500);
        } else {
          addNotifiction(makeid(5), "danger", data);
        }
      },
    });

  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {theme == "dark" ? (
            <Image src={MainLogo} alt="Saiyed Farhan" width={150} />
          ) : (
            <Image src={MainLogo2} alt="Saiyed Farhan" width={150} />
          )}
          <StyledTypography component="h1" variant="h5">
            Create New Account
          </StyledTypography>
          <StyledBox
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="FirstName"
                  required
                  fullWidth
                  id="FirstName"
                  label="First Name"
                  type="text"
                  value={values.FirstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.FirstName && Boolean(errors.FirstName)}
                  helperText={touched.FirstName && errors.FirstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="LastName"
                  autoComplete="family-name"
                  type="text"
                  value={values.LastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.LastName && Boolean(errors.LastName)}
                  helperText={touched.LastName && errors.LastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={values.Password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.Password && Boolean(errors.Password)}
                  helperText={touched.Password && errors.Password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Confirm_Password"
                  label="Confirm Password"
                  type="password"
                  id="Confirm_Password"
                  autoComplete="confirm-password"
                  value={values.Confirm_Password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.Confirm_Password && Boolean(errors.Confirm_Password)
                  }
                  helperText={
                    touched.Confirm_Password && errors.Confirm_Password
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create Account
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/login" variant="body2">
                  Already have an account ?
                </Link>
              </Grid>
            </Grid>
          </StyledBox>
        </Box>
      </Container>
    </>
  );
};

export default CreateUserAccount;

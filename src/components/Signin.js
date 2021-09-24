import React from 'react';
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Alert,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import validationSchema from "./validatin";
import { useAuth } from "../context/AuthContext";
import { Button} from 'semantic-ui-react';
import { fetchLogin} from "../api";
import { useHistory} from "react-router-dom";

function Signin() {
    const {  loggedIn,login } = useAuth();
    const history = useHistory();
    

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: async (values, bag) => {
          try {
            const loginResponse = await fetchLogin({
              email: values.email,
              password: values.password,
            });
            console.log("signinpageloginresponse", loginResponse);
            
            if (loginResponse === false) {
              console.log('kullanıcı bulunamadı');
            } else {
              login(loginResponse[0]);
              history.push("/");
            }
          } catch (e) {
            console.log("error oluştu", e);
            bag.setErrors({ general: e.response.data.message });
          }
          values.email ="";
          values.password="";
        
        },
    });
    return (
        <div>
            <Flex align="center" width="full" justifyContent="center">
            <Box pt={10}>
            <Box textAlign="center">
            <Heading>Signin</Heading>
            </Box>
            <Box my={5}>
        {formik.errors.general && (
            <Alert status="error">{formik.errors.general}</Alert>
        )}
            </Box>
            <Box my={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
            <FormControl>
            <FormLabel>E-mail</FormLabel>
            <Input
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            isInvalid={formik.touched.email && formik.errors.email}
            />
            </FormControl>

            <FormControl mt="4">
            <FormLabel>Password</FormLabel>
            <Input
            name="password"
            type ="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            isInvalid={formik.touched.password && formik.errors.password}
            />
            </FormControl>
            <br />
            <Button
            >
            Signin
            </Button>
            </form>
            </Box>
            </Box>
            </Flex>
        </div>

    )
}

export default Signin;

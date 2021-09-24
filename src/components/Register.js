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
import validationSchema from "./validations";
import { useAuth } from "../context/AuthContext";
import { Button, Header, Icon, Segment } from 'semantic-ui-react';
import { Link} from 'react-router-dom';
import {fetchRegister} from "../api";



function Register() {
    const { login, loggedIn } = useAuth();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: "",
            password: "",
            passwordConfirm: "",
        },
        validationSchema,
        onSubmit: async (values) => {
          const registerResponse = await fetchRegister({
            name: values.name,
            email: values.email,
            password: values.password,
          });
                  
            localStorage.setItem('name', JSON.stringify(values.name));
            localStorage.setItem('email', JSON.stringify(values.email));
            localStorage.setItem('password', JSON.stringify(values.password));
            login(values);
            values.email ="";
            values.password="";
            values.name="";
            values.passwordConfirm="";
        },
    });
    return (

        <div>
            {loggedIn && (
                <Segment placeholder>
                    <Header icon>
                        <Icon name='check' />
                        You have successfully logged in !
                    </Header>
                    <Link to="/">
                    <Button  size='big' inverted color='yellow'>
                        Start Shopping
                    </Button>
                    </Link>
                </Segment>
            )
            }
            <>
                {
                    !loggedIn && (
                        <Flex align="center" width="full" justifyContent="center">
                            <Box pt={10}>
                                <Box textAlign="center">
                                    <Heading>Sign Up</Heading>
                                </Box>
                                <Box my={5}>
                                    {formik.errors.general && (
                                        <Alert status="error">{formik.errors.general}</Alert>
                                    )}
                                </Box>
                                <Box my={5} textAlign="left">
                                    <form onSubmit={formik.handleSubmit}>
                                    <FormControl>
                                            <FormLabel>Name</FormLabel>
                                            <Input
                                                name="name"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.name}
                                                isInvalid={formik.touched.name && formik.errors.name}
                                            />
                                        </FormControl>
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
                                                type="password"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.password}
                                                isInvalid={formik.touched.password && formik.errors.password}
                                            />
                                        </FormControl>

                                        <FormControl mt="4">
                                            <FormLabel>Password Confirm</FormLabel>
                                            <Input
                                                name="passwordConfirm"
                                                type="password"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.passwordConfirm}
                                                isInvalid={
                                                    formik.touched.passwordConfirm &&
                                                    formik.errors.passwordConfirm
                                                }
                                            />
                                        </FormControl>
                                        <br />

                                        <Button

                                        >
                                            Sign Up
                                        </Button>
                                    </form>
                                </Box>
                            </Box>
                        </Flex>

                    )
                }

            </>
        </div>

    )
}

export default Register;

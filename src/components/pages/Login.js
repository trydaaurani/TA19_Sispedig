import React from 'react';
import '../../App.css';
import {Box, Center, Heading, Input} from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react"


const Login = () => {
  return (
    <Box margin={32} display="flex" justifyContent="center" >
      <Box 
      border= "8px" 
      borderColor="gray.700" 
      padding={5} 
      width="600px"
      maxWidth="600px">
      <Center>
        <Heading>LOGIN</Heading>
      </Center>
      <stack>
      <FormControl id="email">
        <FormLabel>Username</FormLabel>
        <Input type="email" placeholder="Type Username here"/>
      </FormControl>

      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Type Password here"/>
      </FormControl>
      </stack>
      <Center>
      <Button border="1px" borderColor="red.300" marginY={10} paddingX={10} borderRadius="16px">
        Masuk
      </Button>
      </Center>
      </Box>
    </Box>
  );
};
export default Login;
'use client'
import { ChakraProvider } from "@chakra-ui/react"
import React from "react";
import Todo from "./todo";


export default function Page(){


  return (
    <ChakraProvider>
  
    <Todo/>
    </ChakraProvider>
)
} 


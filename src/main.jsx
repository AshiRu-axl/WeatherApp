import React from "react";
import ReactDOM from 'react-dom/client';
import './style.css';
import { WeatherApp } from "./WeatherApp";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

        <QueryClientProvider client={queryClient}>
<ChakraProvider>   
        <Box bgGradient='linear(to-bl, blue.50 , blue.200, blue.400, blue.600, blue.700 )' height='100vh'>
        <WeatherApp id='weather'/>
        </Box>
        </ChakraProvider>    
        </QueryClientProvider> 
)
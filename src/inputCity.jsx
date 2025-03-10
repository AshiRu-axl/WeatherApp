import { useState } from "react"
import {  Input } from "@chakra-ui/react";

export const SearchCity = ({handleChange,lng}) => {

    const [localValue, setLocalValue] = useState('');
    
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
          handleChange(localValue);
          setLocalValue('');
          
        }
      };
      const handleInputChange = (e) => {
        setLocalValue(e.target.value);
      };

      
    return (

    
    <>
    
    <Input
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
        variant='filled'
        w='33%'
        ml='360px'
        
        mt='50px'
        
       



    type="text"
    placeholder={lng === 'en' ? "Nombre de la ciudad" : "city name.."}
    value = {localValue}
    
    />
    {/* <button
    value={localValue}
    onClick={handleButtonClick}
    
    >Search</button> */}
   
    </>
   
    )


}

import { useState } from "react";
import { SearchCity } from "./inputCity";
import { GetWeatherInfo } from "./GetWeatherInfo";
import { useGetCitybyName } from "./services/getCitybyName.service";
import { IconButton } from "@chakra-ui/react";
import spanish from "./icons/spanish.svg";
import english from "./icons/english.svg";
import { Image } from "@chakra-ui/react";

export const WeatherApp = () => {
  const [lng, setLng] = useState("en");

  const [inputCity, setInputCity] = useState("Managua");

  const language = lng === "en" ? "es" : "en";

  const icono = lng === "en" ? spanish : english;

  const { data } = useGetCitybyName(inputCity, lng);

  const handleInputChange = (value) => {
    setInputCity(value);
  };

  return (
    <>
      <IconButton
        onClick={() => setLng(language)}
      
        boxSize="20px"
        ml="20px"
        mt="0px"
        pt="0px"
        icon={
          <Image
            sx={{ filter: "drop-shadow(2px 3px 2px rgba(0, 0, 0, 0.2))" }}
            src={icono}
          />
        }
      />

      <SearchCity handleChange={handleInputChange} lng={language} />
      <GetWeatherInfo data={data} />
    </>
  );
};

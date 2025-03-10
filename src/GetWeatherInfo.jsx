import {
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Box, Image, Center, Text } from "@chakra-ui/react";
import humidity from "./icons/humidity.svg";
import temperature from "./icons/temperature.svg";
import windSpeed from "./icons/wind-speed.svg";



export const GetWeatherInfo = ({ data }) => {
  return (
    <>
      <Center>
        <Box
          bgGradient="linear(to-br,blue.100, blue.200, blue.400)"
          borderRadius="lg"
          display="flex"
          //     ml='30%'

          mt="7%"
          w="47%"
          height="45vh"
          shadow="md"
          color="white"
        >
          <Box
            w="65%"
            borderRight="3px"
            borderStyle="dashed"
            borderColor="white"
          >
            <Grid
              templateRows="repeat(5, 60px)"
              templateColumns="repeat(3, 33%)"
              fontWeight="bold"
              w="100%"
              textShadow="1px 1px 2px gray"
            >
              <GridItem pt="10%" pl='10%' display='flex' alignItems='left' colStart={1} colEnd={3}>
                {data?.weather?.map((clima) => clima?.description)}
              </GridItem>
              <GridItem colStart={1} colEnd={3} rowSpan={4}>
                <Image
                  sx={{ filter: "drop-shadow( 4px 12px rgba(0, 0, 0, 0.2))" }}
                  boxSize="100%"
                  pb="10%"
                  pl="20%"
                  src={`https://openweathermap.org/img/wn/${data?.weather?.map(
                    (icono) => icono?.icon
                  )}@2x.png`}
                />
              </GridItem>
            </Grid>
          </Box>
          <Box
            display="Flex"
            w="33%"
            fontWeight="bold"
            textShadow="1px 1px 2px gray"
            alignItems="left"
            pl="20px"
            flexDir="column"
            rowGap="30px"
            pt="5%"
          >
            <Text fontSize="30px" id="desc">
              {data?.name}
            </Text>
            <Box display="Flex">
              <Image
                sx={{ filter: "drop-shadow( 1px 1.5px rgba(0, 0, 0, 0.2))" }}
                pl="0px"
                src={windSpeed}
                boxSize="20px"
              />
              <Text pl="10px" id="speed">
                {data?.wind?.speed} km/h
              </Text>
            </Box>

            <Box display="Flex">
              <Image
                sx={{ filter: "drop-shadow( 1px 1.5px rgba(0, 0, 0, 0.2))" }}
                pl="0px"
                src={humidity}
                boxSize="20px"
              />
              <Text pl="10px" id="humidity">
                {data?.main?.humidity}%
              </Text>
            </Box>
            <Box display="Flex">
              <Image
                sx={{ filter: "drop-shadow( 1px 1.5px rgba(0, 0, 0, 0.2))" }}
                pl="0px"
                src={temperature}
                boxSize="20px"
              />
              <Text pl="10px" id="temp">
                {parseInt(data?.main?.temp) - 273}°C
              </Text>
            </Box>
          </Box>
        </Box>
      </Center>
    </>
  );
};

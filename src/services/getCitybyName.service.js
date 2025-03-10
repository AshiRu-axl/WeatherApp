import { useQuery } from "react-query";
import axios from "axios";
import { API_BASE_URL, API_KEY } from "../shared/apiConfig";

const getCitybyName = async (cityName, lng) => {
  try{
  const response = await axios.get(
    `${API_BASE_URL}/data/2.5/weather?q=${cityName}&APPID=${API_KEY}&lang=${lng}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response?.data;}catch(error){
    alert(lng === 'es'? 'no se encontro la ciudad':'city not found');
    return getCitybyName('Managua',lng);

    
    
   
  }
};

export const useGetCitybyName = (cityName, lng) => {
  return useQuery(["getCitybyName", cityName, lng], {
    keepPreviousData: true,
    async queryFn() {
      return getCitybyName(cityName, lng);
    },
  });
};

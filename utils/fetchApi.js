import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

// headers: {'X-RapidAPI-Key': '20fd69a613mshfb876fe5b78d611p107431jsn50062e01807a', 'X-RapidAPI-Host': 'bayut.p.rapidapi.com'}

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
      headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_API_KEY,
      },
    });
      
    return data;
  }

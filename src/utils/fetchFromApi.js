import axios from 'axios';

const baseURL= 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: baseURL,
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': '2cf09d54eemshf3a0e1a3b7646adp1e5921jsn9a249a851567',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromApi = async (url) =>{
    const { data }= await axios.get(`${baseURL}/${url}`, options);

    return data
};

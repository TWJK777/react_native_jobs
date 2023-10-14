import { useState, useEffect } from 'react';
import axios from 'axios';


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '5e64cac3d2mshec1ab7cd3128168p12c3adjsn2e10de485f1e',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
      };

      const fetchData = async () => {
          setIsloading(true);

          try {
              const response = await axios.request
              (options);

              setData(response.data.data);
              setIsloading(false);
          } catch (error) {
              setError(error);
              alert('There is an error')
          } finally {
              setIsloading(false);
          }
      }

      useEffect(() => {
        fetchData();
      }, []);

      const refetch = () => {
          setIsloading(true);
          fetchData();
      }

      return { data, isLoading, error, refetch };
};

export default useFetch;
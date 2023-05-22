import {
  useState,
  useEffect,
} from 'react';

export default function useApi() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const response = await fetch('/api/stays.json');
    const data = await response.json();

    if (data) {
      setData(data);
      setLoading(false);
    } else {
      setData(null);
      setLoading(false);
    }
  }

  return {
    loading,
    data,
  }
}
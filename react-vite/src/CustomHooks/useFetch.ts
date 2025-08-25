import { useEffect, useState } from "react";

type rating = {
  rate: number;
  count: number;
};

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: rating;
};


const useFetch = (url: string) => {
  const [data, setData] = useState<Product[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return [data, loading];
};
export default useFetch;

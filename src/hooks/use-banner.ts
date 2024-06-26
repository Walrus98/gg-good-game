import { useState, useEffect } from 'react';

export interface Banner {
  id: number;
  image: string;
}

export const useBanner = () => {
  const [banners, setProducts] = useState<Banner[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/mtgs?populate=Media');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const extractedProducts = data.data.map((item: any) => ({
          id: item.id,
          image: "http://localhost:1337" + item.attributes.Media.data[0].attributes.formats.thumbnail.url,
        }));
        setProducts(extractedProducts);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products: banners, loading, error };
};

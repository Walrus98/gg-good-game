import { useState, useEffect } from 'react';

export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  quantity: number;
  image: string;
}

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
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
          name: item.attributes.Name,
          description: item.attributes.Description,
          price: item.attributes.Price,
          longDescription: item.attributes.LongDescription,
          quantity: item.attributes.Quantity,
          image: "http://localhost:1337" + item.attributes.Media.data[0].attributes.formats.thumbnail.url,
          // Aggiungi altri campi se necessario
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

  return { products, loading, error };
};

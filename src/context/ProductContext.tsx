// import { createContext, useState, useEffect, ReactNode } from 'react';

// // Definizione del tipo per i dati dei prodotti
// export interface Product {
//   id: number;
//   name: string;
//   description: string;
//   longDescription: string;
//   price: number;
//   quantity: number;
//   image: string;
//   // Altri campi dei prodotti se necessario
// }

// // Definizione del tipo per il contesto dei prodotti
// interface ProductContextType {
//   products: Product[];
// }

// // Inizializzazione del contesto
// export const ProductContext = createContext<ProductContextType | undefined>(undefined);

// // Props per il provider dei prodotti
// interface ProductProviderProps {
//   children: ReactNode; // ReactNode permette di passare qualsiasi elemento React come children
// }

// export const ProductProvider = ({ children }: ProductProviderProps) => {
//   const [products, setProducts] = useState<Product[]>([]);

//   // Effettua la chiamata API per ottenere i prodotti
//   useEffect(() => {
//     fetch('http://localhost:1337/api/mtgs?populate=Media')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data: { data: any[] }) => {
//         const extractedProducts = data.data.map(item => ({
//           id: item.id,
//           name: item.attributes.Name,
//           description: item.attributes.Description,
//           price: item.attributes.Price,
//           longDescription: item.attributes.LongDescription,
//           quantity: item.attributes.Quantity,
//           image: "http://localhost:1337" + item.attributes.Media.data[0].attributes.formats.thumbnail.url, // Aggiunto il campo image con l'URL del thumbnail
//           // Aggiungi altri campi se necessario
//         }));
//         setProducts(extractedProducts);
//       })
//       .catch(error => {
//         console.error('Error fetching products:', error);
//       });
//   }, []); // Dipendenza vuota, viene eseguito solo una volta

//   console.log(products);
//   return (
//     <ProductContext.Provider value={{ products }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

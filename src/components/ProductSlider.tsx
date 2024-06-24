import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductItem from "./ProductItem";
import { useProducts } from '../hooks/use-products';

export default function ProductSlider() {

  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };


  return (
    <div className="py-4">
      <Slider {...settings}>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}


      </Slider>
    </div>
  );
}


{/* <div className='overflow-x-auto data-[left-scroll=true]:[mask-image:linear-gradient(270deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] data-[right-scroll=true]:[mask-image:linear-gradient(90deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] data-[left-right-scroll=true]:[mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)] -mx-6 -my-5 flex w-full max-w-full snap-x justify-start gap-6 px-6 py-5'>
<Product />
</div> */}
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './BannerSlider.css'

export default function BannerSlider() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  };

  const bannerImage = "https://mangayo.it/modules/an_homeslider/img/92e45deb58e67356cbdf47bde373fe4a_1.jpg";

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1920px] p-8 rounded-large bg-content1">
      <Slider {...settings} >
      <div>
          <img src={bannerImage} alt="Banner 1" className="rounded-large w-full object-cover" />
        </div>
        <div>
          <img src={bannerImage} alt="Banner 2" className="rounded-large nw-full object-cover" />
        </div>
      </Slider>

      </div>

    </div>
  );
}
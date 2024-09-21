import Slider from "../../components/slider";
import ProductArena1 from "../../components/productArea1";
import BannerArena1 from "../../components/bannerArea1";
import CategoriesArena1 from "../../components/categoriesArea1";
import ProductArena2 from "../../components/productArea2";
import BannerArena2 from "../../components/bannerArea2";
import BrandLogoArea from "../../components/brandLogoArea";
import TestimonialArea from "../../components/testimonialArea";
import ContactArea from "../../components/contactArea";

const Home = () => {
  return (
    <>
      <Slider />
      <ProductArena1 />
      <BannerArena1 />
      <CategoriesArena1 />
      <ProductArena2 />
      <BannerArena2 />
      <BrandLogoArea />
      <TestimonialArea />
      <ContactArea />
    </>
  );
};

export default Home;

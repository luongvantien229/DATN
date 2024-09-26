import Slider from "../../../components/user/slider";
import ProductArena1 from "../../../components/user/productArea1";
import BannerArena1 from "../../../components/user/bannerArea1";
import CategoriesArena1 from "../../../components/user/categoriesArea1";
import ProductArena2 from "../../../components/user/productArea2";
import BannerArena2 from "../../../components/user/bannerArea2";
import BrandLogoArea from "../../../components/user/brandLogoArea";
import TestimonialArea from "../../../components/user/testimonialArea";
import ContactArea from "../../../components/user/contactArea";

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

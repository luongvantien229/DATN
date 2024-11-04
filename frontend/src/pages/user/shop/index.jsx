import ShopTopBarWrapper from "../../../components/user/shopTopBarWrapper";
import ShopBottomBarWrapper from "../../../components/user/shopBottomBarWrapper";

export default function Index() {
  return (
    <div className="shop-area pt-75 pb-55">
      <div className="custom-container">
            {/* <ShopTopBarWrapper /> */}
            <ShopBottomBarWrapper />
      </div>
    </div>
  );
}

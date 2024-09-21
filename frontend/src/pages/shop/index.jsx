import ShopTopBarWrapper from "../../components/shopTopBarWrapper";
import ShopBottomBarWrapper from "../../components/shopBottomBarWrapper";

export default function Index() {
  return (
    <div className="shop-area pt-75 pb-55">
      <div className="custom-container">
        <div className="row flex-row-reverse">
            <ShopTopBarWrapper />
            <ShopBottomBarWrapper />
        </div>
      </div>
    </div>
  );
}

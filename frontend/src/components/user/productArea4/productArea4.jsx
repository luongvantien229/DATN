import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";
import { addToWishList } from "../../../redux/slices/wishlistSlice";
export default function ProductArena4({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = {
      ...product,
      quantity: 1,
    };

    dispatch(addToCart(item));
  };

  const handleAddToWishlist = async () => {
    const item = {
      ...product,
    };
    dispatch(addToWishList(item));

    try {
      
      const response = await axios.post(
        `/products/${product.id}/increment-favorite`
      );
      console.log(response.data.message); 
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      
    }
  };
  return (
    <div className="product-plr-1">
      <div className="single-product-wrap">
        <div className="product-img-action-wrap mb-20">
          <div className="product-img product-img-zoom">
            <Link to={`/product-detail/${product.slug}/${product.id}`}>
              <img className="default-img" src={product.image} alt={product.name} />
              <img className="hover-img" src={product.image} alt={product.name} />
            </Link>
          </div>
          <div className="product-action-1">
          <button aria-label="Add To Cart" onClick={handleAddToCart}>
              <i className="far fa-shopping-bag"></i>
            </button>
            <button aria-label="Add To Wishlist" onClick={handleAddToWishlist}>
              <i className="far fa-heart"></i>
            </button>
            {/* <button aria-label="Compare">
              <i className="far fa-signal"></i>
            </button> */}
          </div>
          <div className="product-badges product-badges-position product-badges-mrg">
            <span className="hot yellow">Hot</span>
          </div>
        </div>
        <div className="product-content-wrap">
          <h2>
            <Link to={`/product-detail/${product.slug}/${product.id}`}>{product.name}</Link>
          </h2>
          <div className="product-price">
            <span className="new-price">{Number(product.price).toLocaleString()} đ</span> {/* Giá sản phẩm */}
            {/* Nếu có giá cũ, hiển thị tại đây */}
            <span className="old-price">{Number(product.price_cost).toLocaleString()} đ</span> {/* Giá sản phẩm */}
          </div>
        </div>
      </div>
    </div>
  );
}
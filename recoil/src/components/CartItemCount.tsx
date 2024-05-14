import { useRecoilValue } from "recoil";
import { cartItemCountState } from "../atom";

function CartItemCount() {
  const count = useRecoilValue(cartItemCountState);
  return <div>장바구니 상품 개수: {count}</div>;
}

export default CartItemCount;

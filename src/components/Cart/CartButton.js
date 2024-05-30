import classes from "./CartButton.module.css";
import { useSelector } from "react-redux";
const CartButton = (props) => {
  const cart = useSelector((state) => state.cart);
  const sumOfTotal = cart?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{sumOfTotal ?? -1}</span>
    </button>
  );
};

export default CartButton;

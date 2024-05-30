import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cart?.map((product) => {
          return (
            <CartItem
              key={Math.random()}
              item={{
                title: product.title,
                quantity: product.quantity,
                total: product.quantity * product.price,
                price: product.price,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;

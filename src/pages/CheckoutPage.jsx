import { Link } from "react-router-dom";
import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import { useCart } from "../context/CartContext";
import styles from './CheckoutPage.module.css';
function CheckoutPage() {

	const [state, dispatch] = useCart();

	const clickHandler = (type, payload) => dispatch({ type, payload });

	if (!state.itemCounter) {
		return (
			<div className={styles.empty}>
				<p>😢 your Basket is Empty 😞</p>
				<Link to="/products">Go To Shop Now </Link>
			</div>
		)
	}
	return (
		<div className={styles.container}>
			<BasketSidebar state={state} clickHandler={clickHandler} />
			<div className={styles.products}>

				{
					state.selectedItems.map((product) => (
						<BasketCard key={product.id} data={product} clickHandler={clickHandler} />
					))
				}
			</div>
		</div>
	)
}

export default CheckoutPage

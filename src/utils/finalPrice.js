const finalPrice = (product) => {
	let tmpPrice = product.price;
	if (product.discount.flat !== 0) {
		tmpPrice -= product.discount.flat;
	}
	if (product.discount.percent !== 0) {
		tmpPrice = tmpPrice * (1 - `0.${product.discount.percent}`);
	}
	return tmpPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default finalPrice;

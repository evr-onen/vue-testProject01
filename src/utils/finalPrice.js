const finalPrice = (product, variant, isNumber = false) => {
	let tmpPrice = product.price;

	if (product?.variant?.length) {
		if (variant) {
			if (variant.discount.flat !== 0) {
				tmpPrice -= variant.discount.flat;
			}
			if (variant.discount.percent !== 0) {
				tmpPrice = tmpPrice * (1 - `0.${variant.discount.percent}`);
			}
		}
	} else {
		console.log("variant yok calisti");
		if (product.discount?.flat !== 0) {
			tmpPrice -= product.discount?.flat;
		}
		if (product.discount?.percent !== 0) {
			tmpPrice = tmpPrice * (1 - `0.${product.discount?.percent}`);
		}
	}
	if (isNumber) {
		return tmpPrice;
	} else {
		return tmpPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}
};

export default finalPrice;

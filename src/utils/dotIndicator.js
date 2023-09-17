export const dotIndicator = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
export default dotIndicator;

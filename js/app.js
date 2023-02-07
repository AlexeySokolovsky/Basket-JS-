const products = [
	{
		id: 1,
		title: 'Lenovo Yoga',
		price: 3000,
	},
	{
		id: 2,
		title: 'Acer Aspire',
		price: 1800,
	},
	{
		id: 3,
		title: 'Dell Vostro',
		price: 3400
	},
];

let order = [];
function addToBasket(productId) {
	products.find((item) => {
		if (item.id == productId) {
			if (order.find((items) => items.id == productId)) {
				alert('Товар уже в корзине!');
				return;
			}
			order.push(item);
		}
	});
	renderCart();
	rerenderTotalPrice();
}

function removeFromBasket(productId) {
	order.forEach((item, i) => {
		if (item.id === productId) {
			order.splice(i, 1);
			return;
		}
	});
	renderCart();
	rerenderTotalPrice();
}


function rerenderTotalPrice() {
	let totalPrice = 0;
	order.forEach((item) => {
		totalPrice += item.price;
	});
	document.getElementById('total').innerText = totalPrice;
}


function renderCart() {
	const cart = document.getElementById('basket-items');

	cart.innerHTML = '';
	order.forEach(item => {
		const el = document.createElement('li');
		el.innerText = item.title;
		el.onclick = () => removeFromBasket(item.id);
		cart.appendChild(el);
	});
}
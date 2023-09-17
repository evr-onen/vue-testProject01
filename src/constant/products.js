export const categories = [
	{
		id: 1,
		name: "bilgisayar",
		parent_category: 0,
	},
	{
		id: 2,
		name: "mouse",
		parent_category: 1,
	},
	{
		id: 3,
		name: "keyboard",
		parent_category: 1,
	},
	{
		id: 4,
		name: "monitor",
		parent_category: 1,
	},
	{
		id: 5,
		name: "ev",
		parent_category: 0,
	},
	{
		id: 6,
		name: "mutfak",
		parent_category: 0,
	},
	{
		id: 7,
		name: "blender",
		parent_category: 6,
	},
	{
		id: 8,
		name: "kettle",
		parent_category: 6,
	},
	{
		id: 9,
		name: "utu",
		parent_category: 5,
	},
];

export const productType = [
	{
		id: 1,
		name: "simple product",
	},
	{
		id: 2,
		name: "variant product",
	},
	{
		id: 3,
		name: "grup product",
	},
];

export const products = [
	{
		id: 1,
		name: "mouse 01",
		categories: [1, 2],
		price: 1000,
		discount: { flat: 0, percent: 0 },
		short_description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quidem tempore odit id! Quod repellat cupiditate sint voluptates laborum! Voluptas rerum adipisci ducimus aut.",
		quantity: "24",
		images: ["/assets/images/product/bracelet-01-a-600x750.jpg", "/assets/images/product/bracelet-01-b-600x750.jpg"],
		status: "onSale",
		variant: [
			{
				variant_type: { color: "red" },
				discount: { flat: 0, percent: 0 },
				quantity: "10",
			},
			{
				variant_type: { color: "blue" },
				discount: { flat: 0, percent: 0 },
				quantity: "10",
			},
			{
				variant_type: { color: "black" },
				discount: { flat: 0, percent: 0 },
				quantity: "4",
			},
			{
				variant_type: { color: "silver" },
				discount: { flat: 0, percent: 0 },
				quantity: "4",
			},
		],
	},
	{
		id: 2,
		name: "mouse 02",
		categories: [1, 2],
		price: 800,
		discount: { flat: 0, percent: 0 },
		short_description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quidem tempore odit id! Quod repellat cupiditate sint voluptates laborum! Voluptas rerum adipisci ducimus aut.",
		quantity: "55",
		images: ["/assets/images/product/bracelet-01-a-600x750.jpg", "/assets/images/product/bracelet-01-b-600x750.jpg"],
		status: "onSale",
		variant: [
			{
				variant_type: { color: "red" },
				discount: { flat: 100, percent: 0 },
				quantity: "17",
			},
			{
				variant_type: { color: "blue" },
				discount: { flat: 47, percent: 0 },
				quantity: "21",
			},
			{
				variant_type: { color: "black" },
				discount: { flat: 0, percent: 0 },
				quantity: "7",
			},
			{
				variant_type: { color: "white" },
				discount: { flat: 10, percent: 0 },
				quantity: "10",
			},
		],
	},
	{
		id: 3,
		name: "keyboard 01",
		categories: [1, 3],
		price: 2200,
		discount: { flat: 0, percent: 0 },
		short_description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quidem tempore odit id! Quod repellat cupiditate sint voluptates laborum! Voluptas rerum adipisci ducimus aut.",
		quantity: "56",
		images: ["/assets/images/product/bracelet-01-a-600x750.jpg", "/assets/images/product/bracelet-01-b-600x750.jpg"],
		status: "onSale",
		variant: [
			{
				variant_type: { color: "gray", lang: "tr" },
				discount: { flat: 0, percent: 30 },
				quantity: "3",
			},
			{
				variant_type: { color: "gray", lang: "en" },
				discount: { flat: 0, percent: 0 },
				quantity: "20",
			},
			{
				variant_type: { color: "black", lang: "en" },
				discount: { flat: 0, percent: 0 },
				quantity: "20",
			},
			{
				variant_type: { color: "white", lang: "tr" },
				discount: { flat: 0, percent: 40 },
				quantity: "13",
			},
		],
	},
	{
		id: 4,
		name: "monitor 01",
		categories: [1, 4],
		price: 8800,
		discount: { flat: 200, percent: 0 },
		short_description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quidem tempore odit id! Quod repellat cupiditate sint voluptates laborum! Voluptas rerum adipisci ducimus aut.",
		quantity: "12",
		images: ["/assets/images/product/bracelet-01-a-600x750.jpg", "/assets/images/product/bracelet-01-b-600x750.jpg"],
		status: "onSale",

		variant: [],
	},
	{
		id: 5,
		name: "utu 01",
		categories: [5, 9],
		price: 3300,
		discount: { flat: 0, percent: 15 },
		short_description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quidem tempore odit id! Quod repellat cupiditate sint voluptates laborum! Voluptas rerum adipisci ducimus aut.",
		quantity: "27",
		images: ["/assets/images/product/bracelet-01-a-600x750.jpg", "/assets/images/product/bracelet-01-b-600x750.jpg"],
		status: "onSale",
		variant: [],
	},
	{
		id: 6,
		name: "utu 02",
		categories: [5, 9],
		price: 3300,
		discount: { flat: 0, percent: 10 },
		short_description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quidem tempore odit id! Quod repellat cupiditate sint voluptates laborum! Voluptas rerum adipisci ducimus aut.",
		quantity: "34",
		images: ["/assets/images/product/bracelet-01-a-600x750.jpg", "/assets/images/product/bracelet-01-b-600x750.jpg"],
		status: "onSale",
		variant: [],
	},
	{
		id: 7,
		name: "kettle 01",
		categories: [6, 8],
		price: 700,
		discount: { flat: 0, percent: 0 },
		short_description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quidem tempore odit id! Quod repellat cupiditate sint voluptates laborum! Voluptas rerum adipisci ducimus aut.",
		quantity: "31",
		images: ["/assets/images/product/bracelet-01-a-600x750.jpg", "/assets/images/product/bracelet-01-b-600x750.jpg"],
		status: "onSale",
		variant: [],
	},
	{
		id: 8,
		name: "blender 01",
		categories: [6, 7],
		price: 3500,
		discount: { flat: 300, percent: 0 },
		short_description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quidem tempore odit id! Quod repellat cupiditate sint voluptates laborum! Voluptas rerum adipisci ducimus aut.",
		quantity: "12",
		images: ["/assets/images/product/bracelet-01-a-600x750.jpg", "/assets/images/product/bracelet-01-b-600x750.jpg"],
		status: "onSale",
		variant: [],
	},
	{
		id: 9,
		name: "blender 02",
		categories: [6, 7],
		price: 2200,
		discount: { flat: 70, percent: 0 },
		short_description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quidem tempore odit id! Quod repellat cupiditate sint voluptates laborum! Voluptas rerum adipisci ducimus aut.",
		quantity: "12",
		images: ["/assets/images/product/bracelet-01-a-600x750.jpg", "/assets/images/product/bracelet-01-b-600x750.jpg"],
		status: "onSale",
		variant: [],
	},
	{
		id: 10,
		name: "blender 03",
		categories: [6, 7],
		price: 2200,
		discount: { flat: 10, percent: 0 },
		short_description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quidem tempore odit id! Quod repellat cupiditate sint voluptates laborum! Voluptas rerum adipisci ducimus aut.",
		quantity: "12",
		images: ["/assets/images/product/bracelet-01-a-600x750.jpg", "/assets/images/product/bracelet-01-b-600x750.jpg"],
		status: "onSale",
		variant: [],
	},
	{
		id: 11,
		name: "keyboard 02",
		categories: [1, 3],
		price: 3500,
		discount: { flat: 0, percent: 0 },
		short_description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem quidem tempore odit id! Quod repellat cupiditate sint voluptates laborum! Voluptas rerum adipisci ducimus aut.",
		quantity: "56",
		images: ["/assets/images/product/bracelet-01-a-600x750.jpg", "/assets/images/product/bracelet-01-b-600x750.jpg"],
		status: "onSale",
		variant: [
			{
				variant_type: { color: "gray", lang: "tr", bluetooth: "yes" },
				discount: { flat: 0, percent: 30 },
				quantity: "3",
			},
			{
				variant_type: { color: "black", lang: "tr", bluetooth: "yes" },
				discount: { flat: 0, percent: 50 },
				quantity: "3",
			},
			{
				variant_type: { color: "yellow", lang: "fr" },
				discount: { flat: 0, percent: 0 },
				quantity: "20",
			},
			{
				variant_type: { color: "black", lang: "fr", bluetooth: "yes" },
				discount: { flat: 0, percent: 50 },
				quantity: "20",
			},
			{
				variant_type: { color: "white", lang: "tr" },
				discount: { flat: 0, percent: 40 },
				quantity: "13",
			},
			{
				variant_type: { color: "cyan", lang: "tr" },
				discount: { flat: 0, percent: 40 },
				quantity: "13",
			},
			{
				variant_type: { color: "green", lang: "tr" },
				discount: { flat: 0, percent: 40 },
				quantity: "13",
			},
			{
				variant_type: { color: "orange", lang: "tr" },
				discount: { flat: 0, percent: 40 },
				quantity: "13",
			},
			{
				variant_type: { color: "teal", lang: "tr" },
				discount: { flat: 0, percent: 40 },
				quantity: "13",
			},
			{
				variant_type: { color: "purple", lang: "tr" },
				discount: { flat: 0, percent: 40 },
				quantity: "13",
			},
			{
				variant_type: { color: "dark blue", lang: "tr" },
				discount: { flat: 0, percent: 40 },
				quantity: "13",
			},
			{
				variant_type: { color: "pink", lang: "tr" },
				discount: { flat: 0, percent: 40 },
				quantity: "13",
			},
			{
				variant_type: { color: "light gray", lang: "tr" },
				discount: { flat: 0, percent: 40 },
				quantity: "13",
			},
		],
	},
];

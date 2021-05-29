// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "broccoli",
		lactose_intolerant: false,
		nut_allergy: false,
		organic: true,
		price: 1.99,
		category: "vegetable"
	},
	{
		name: "bread",
		lactose_intolerant: false,
		nut_allergy: false,
		organic: false,
		price: 2.35,
		category: "Other"
	},
	{
		name: "salmon",
		lactose_intolerant: false,
		nut_allergy: false,
		organic: false,
		price: 9.00,
		category: "meat"
	},
	{
		name: "apple",
		lactose_intolerant: false,
		nut_allergy: false,
		organic: true,
		price: 1.50,
		category: "fruit"
	},
	{
		name: "milk",
		lactose_intolerant: true,
		nut_allergy: false,
		organic: true,
		price: 2.20,
		category: "Other"
	},
	{
		name: "cake",
		lactose_intolerant: true,
		nut_allergy: true,
		organic: false,
		price: 5.00,
		category: "Other"
	},
	{
		name: "beef",
		lactose_intolerant: false,
		nut_allergy: false,
		organic: false,
		price: 7.50,
		category: "meat"
	},
	{
		name: "peanut",
		lactose_intolerant: false,
		nut_allergy: true,
		organic: true,
		price: 1.28,
		category: "Other"
	},
	{
		name: "potato",
		lactose_intolerant: false,
		nut_allergy: false,
		organic: true,
		price: 1.34,
		category: "vegetable"
	},
	{
		name: "lamb",
		lactose_intolerant: false,
		nut_allergy: false,
		organic: false,
		price: 9.25,
		category: "meat"
	},
	{
		name: "Cashew nuts",
		lactose_intolerant: false,
		nut_allergy: true,
		organic: true,
		price: 5.25,
		category: "Other"
	},
	{
		name: "onion",
		lactose_intolerant: false,
		nut_allergy: false,
		organic: true,
		price: 1.23,
		category: "vegetable"
	},
	{
		name: "Tomato",
		lactose_intolerant: false,
		nut_allergy: false,
		organic: true,
		price: 0.22,
		category: "vegetable"
	},
	{
		name: "Frozen_pizza",
		lactose_intolerant: false,
		nut_allergy: false,
		organic: false,
		price: 4.99,
		category: "Other"
	},
	{
		name: "Chicken_nuggets",
		lactose_intolerant: false,
		nut_allergy: false,
		organic: false,
		price: 3.99,
		category: "Other"
	},


];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProductsFruit(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose_intolerant") && (prods[i].lactose_intolerant == false)&&(prods[i].category=="fruit")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if((restriction == "lactose_intolerant(organic)") && (prods[i].lactose_intolerant == false)&&(prods[i].organic==true)&&(prods[i].category=="fruit")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergy") && (prods[i].nut_allergy == false)&&(prods[i].category=="fruit")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergy(organic)") && (prods[i].nut_allergy == false)&&(prods[i].organic==true)&&(prods[i].category=="fruit")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "Both") && ((prods[i].lactose_intolerant == false)&& (prods[i].nut_allergy == false))&&(prods[i].category=="fruit")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "Both(organic)") && ((prods[i].lactose_intolerant == false)&& (prods[i].nut_allergy == false)&&(prods[i].organic==true))&&(prods[i].category=="fruit")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if (restriction == "None"&&(prods[i].category=="fruit")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None(organic)")&&(prods[i].organic==true)&&(prods[i].category=="fruit")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
	}
	product_names.sort();
	return product_names;
}
function restrictListProductsVegetable(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose_intolerant") && (prods[i].lactose_intolerant == false)&&(prods[i].category=="vegetable")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if((restriction == "lactose_intolerant(organic)") && (prods[i].lactose_intolerant == false)&&(prods[i].organic==true)&&(prods[i].category=="vegetable")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergy") && (prods[i].nut_allergy == false)&&(prods[i].category=="vegetable")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergy(organic)") && (prods[i].nut_allergy == false)&&(prods[i].organic==true)&&(prods[i].category=="vegetable")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "Both") && ((prods[i].lactose_intolerant == false)&& (prods[i].nut_allergy == false))&&(prods[i].category=="vegetable")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "Both(organic)") && ((prods[i].lactose_intolerant == false)&& (prods[i].nut_allergy == false)&&(prods[i].organic==true))&&(prods[i].category=="vegetable")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if (restriction == "None"&&(prods[i].category=="vegetable")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None(organic)")&&(prods[i].organic==true)&&(prods[i].category=="vegetable")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
	}
	product_names.sort();
	return product_names;
}
function restrictListProductsOther(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose_intolerant") && (prods[i].lactose_intolerant == false)&&(prods[i].category=="Other")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if((restriction == "lactose_intolerant(organic)") && (prods[i].lactose_intolerant == false)&&(prods[i].organic==true)&&(prods[i].category=="Other")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergy") && (prods[i].nut_allergy == false)&&(prods[i].category=="Other")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergy(organic)") && (prods[i].nut_allergy == false)&&(prods[i].organic==true)&&(prods[i].category=="Other")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "Both") && ((prods[i].lactose_intolerant == false)&& (prods[i].nut_allergy == false))&&(prods[i].category=="Other")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "Both(organic)") && ((prods[i].lactose_intolerant == false)&& (prods[i].nut_allergy == false)&&(prods[i].organic==true))&&(prods[i].category=="Other")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if (restriction == "None"&&(prods[i].category=="Other")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None(organic)")&&(prods[i].organic==true)&&(prods[i].category=="Other")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
	}
	product_names.sort();
	return product_names;
}
function restrictListProductsMeat(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose_intolerant") && (prods[i].lactose_intolerant == false)&&(prods[i].category=="meat")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if((restriction == "lactose_intolerant(organic)") && (prods[i].lactose_intolerant == false)&&(prods[i].organic==true)&&(prods[i].category=="meat")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergy") && (prods[i].nut_allergy == false)&&(prods[i].category=="meat")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "nut_allergy(organic)") && (prods[i].nut_allergy == false)&&(prods[i].organic==true)&&(prods[i].category=="meat")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "Both") && ((prods[i].lactose_intolerant == false)&& (prods[i].nut_allergy == false))&&(prods[i].category=="meat")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "Both(organic)") && ((prods[i].lactose_intolerant == false)&& (prods[i].nut_allergy == false)&&(prods[i].organic==true))&&(prods[i].category=="meat")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if (restriction == "None"&&(prods[i].category=="meat")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
		else if ((restriction == "None(organic)")&&(prods[i].organic==true)&&(prods[i].category=="meat")){
			product_names.push(prods[i].price+" "+prods[i].name);
		}
	}
	product_names.sort();
	return product_names;
}


// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].price+" "+products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}



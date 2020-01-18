const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "medium"
}

const hamburgerComboMeal = {
    sandwichType: "hamburger",
    fries: true,
    drinkSize: "medium" 
}

const cheeseburgerComboMeal = {
    sandwichType: "cheeseburger",
    fries: true,
    drinkSize: "medium" 
}

const restaurant = {
    name: "Bob's Burgers",
    orders: [chickenComboMeal, hamburgerComboMeal, cheeseburgerComboMeal],
    placeOrder: function (meal) {
        console.log(meal);
    },
    allOrders: function () {
        console.log(this.orders);
    }
}

// Place an order
restaurant.placeOrder(chickenComboMeal);

// Invoke the function to return the list of all orders

restaurant.allOrders();

// Output all orders to the console using console.table()

console.table(restaurant.orders);


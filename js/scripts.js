function Pizza(size, toppings, quantity) {
  this.size = size;
  this.toppings = toppings;
  this.quantity = quantity;
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
};

Pizza.prototype.totalPrice = function() {
  var sizePrice = 0;

  if (this.size === "X-Large") {
      sizePrice += 20;
  } else if (this.size === "Large") {
      sizePrice += 16;
  } else if (this.size === "Medium") {
      sizePrice += 12;
  } else if (this.size === "Small") {
      sizePrice += 8;
  }

  for(var i=0; i<this.toppings.length; i++) {
    if (this.toppings[i] === "Chicken" || this.toppings[i] === "Pepperoni" || this.toppings[i] === "Sausage" || this.toppings[i] === "Bacon" || this.toppings[i] === "Salami" || this.toppings[i] === "Ham") {
        sizePrice += 2;
    }  else if (this.toppings[i] === "Green Pepper" || this.toppings[i] === "Mushroom" || this.toppings[i] === "Onion" || this.toppings[i] === "Black Olive") {
        sizePrice += 1;
    }
  }


  var totalPrice = sizePrice * this.quantity;

  return totalPrice;
  }
// $(document).ready(function() {
//   $("form#letsMakePizza").submit(function(event) {
// event.preventDefault();
//   });
// });

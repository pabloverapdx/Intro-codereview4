function Pizza (pizzaQuantity, pizzaSize, pizzaTopping, pizzaPrice) {
  this.pizzaQuantity = pizzaQuantity;
  this.pizzaSize = pizzaSize;
  this.pizzaTopping = pizzaTopping;
  this.pizzaPrice = pizzaPrice
 }

Pizza.prototype.price = function() {

}
$(document).ready(function() {
  $("form#letsMakePizza").submit(function(event) {




    event.preventDefault();
  });
});

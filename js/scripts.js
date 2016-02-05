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

  if (this.size === "Large") {
      sizePrice += 16;
  } else if (this.size === "Medium") {
      sizePrice += 12;
  } else if (this.size === "Small") {
      sizePrice += 8;
  }

  for(var i=0; i<this.toppings.length; i++) {
    if (this.toppings[i] === "Hawaiian" || this.toppings[i] === "Pepperoni" || this.toppings[i] === "Mushrooms") {
        sizePrice += 2;
  }
}

  var totalPrice = sizePrice * this.quantity;

  return totalPrice;
  }


  var clearForm = function() {
    $('input:checkbox').removeAttr('checked');
    $('input:radio').removeAttr('checked');
  };

  var constructPage = function() {
    var mySize = ["Small", "Medium", "Large"];
    var myQuantity = [1, 2, 3];

    mySize.forEach(function(size) {
      $("select#pizza-size").append("<option value='" + size + "'><span class='chosen-size'>" + size + "</span></option>");
    });

    myQuantity.forEach(function(quantity) {
      $("select#pizza-quantity").append("<option value='" + quantity + "'><span class='chosen-quantity'>" + quantity + "</span></option>");
    });
  }
// User Interface //

  $(document).ready(function() {

    clearForm();
    constructPage();

    $("form#user-info").submit(function(event) {

      var pizzaToppings = [];
      $(this).find("input[name=toppings]:checked").each(function() {
        pizzaToppings.push($(this).val());
      });
      var pizzaSize = $("#pizza-size option:selected").text();
      var pizzaQuantity = parseInt($("#pizza-quantity option:selected").val());

      var myPizza = new Pizza(pizzaSize, pizzaToppings, pizzaQuantity);
      var myPrice = myPizza.totalPrice();

      $(".sizeChoice").text(pizzaSize);
      $(".toppingsChoice").text(pizzaToppings);
      $(".quantityChoice").text(pizzaQuantity);
      $(".total-price").text(myPrice);

      $("select#pizza-size").val("");
      $("select#pizza-toppings").val("");
      $("select#pizza-quantity").val("");

      $("#result").show();
      event.preventDefault();
  });
});

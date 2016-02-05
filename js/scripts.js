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

// Clears form //
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

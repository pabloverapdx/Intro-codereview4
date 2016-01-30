describe('Pizza', function () {
  it("will make a pizza with according to what the costumer wants ", function () {
    var testPizza = new Pizza("1", "small", "pepperoni", "5");
     expect(testPizza.pizzaQuantity).to.equal("1");
     expect(testPizza.pizzaSize).to.equal("small");
     expect(testPizza.pizzaTopping).to.equal("pepperoni");
     expect(testPizza.pizzaPrice).to.equal("5");
  });

  it("adds price method to constructor", function() {
    var testPizza = new Pizza("1", "small", "mushrooms");
    expect(testOrder.calculatePrice()).to.equal(5);
    });  
});

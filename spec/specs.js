describe("Pizza", function() {
  it('creates a new pizza order with the given properties', function() {
    var testPizza = new Pizza("Large", [], 1);
    expect(testPizza.size).to.equal("Large");
    expect(testPizza.toppings).to.eql([]);
    expect(testPizza.quantity).to.equal(1);
  });
});

//
//Back end
//
function Pizza(size, cheese, meats, veggies, price)
{
  this.size = size;
  this.cheese = cheese;
  this.meats = meats;
  this.veggies = veggies;
  this.price = price;
}
//
Pizza.prototype.pizzaCost = function()
{
  this.price += this.size;
  this.price += this.cheese;
  return this.price;
}
//
//Front end
//
$(document).ready(function()
{
  //
  $("#pizza-form").submit(function(event)
  {
    event.preventDefault();

    $("#pizza-total-line").show();

    var pizzaSize = parseInt($("select#pizza-size").val());
    var cheeseAmount = parseInt($("select#cheese-amount").val());

    var meatCost = $("input:checkbox[name=meat]:checked").each(function(){

    });

    var newPizza = new Pizza(pizzaSize, cheeseAmount, 0, 0, 0);

    var pizzaTotal = newPizza.pizzaCost();
    $("#pizza-total").text(pizzaTotal);

  });
  //
});

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
  console.log(this.price);
  this.price += this.cheese;
  console.log(this.price);
  this.price += this.meats;
  console.log(this.price);
  this.price += this.veggies;
  console.log(this.price);
  this.price = (this.price * 1.1).toFixed(2);
  console.log(this.price);
  return this.price;
}
//
//Front end
//
$(document).ready(function()
{
  $("#pizza-form")[0].reset();
  //
  $("#pizza-form").submit(function(event)
  {
    event.preventDefault();

    $("#pizza-total-line").show();

    var pizzaSize = parseFloat($("select#pizza-size").val());
    var cheeseAmount = parseFloat($("select#cheese-amount").val());
    var meatCost = 0;
    var veggieCost = 0;
    var totalPrice = 0;

    $("input:checkbox[name=meats]:checked").each(function()
    {
      var meats = parseFloat($(this).val());
      meatCost += meats;
      return meatCost;
    });

    $("input:checkbox[name=veggies]:checked").each(function()
    {
      var veggies = parseFloat($(this).val());
      veggieCost += veggies;
      return veggieCost;
    });

    var newPizza = new Pizza(pizzaSize, cheeseAmount, meatCost, veggieCost, totalPrice);

    var pizzaTotal = newPizza.pizzaCost();
    $("#pizza-total").text(pizzaTotal);
    $("#pizza-form")[0].reset();
  });
  //
});

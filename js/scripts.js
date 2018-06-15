//
//Back end
//
function PizzaEater(name)
{
  this.name = name;
}
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
  //
  $("#pizza-form")[0].reset();
  //
  $("button#user-info-button").click(function(event)
  {
    event.preventDefault();
    var userName = $("input#user-name").val();
    if (userName === "")
    {
      alert("Please input a name for this order")
    }
    else
    {
      $("#order-form-user-name").text(userName);
      $("#user-info").hide();
      $("#order-form").show();
      $("#user-info-display").show();
      $("#delivery-display").show();
    }
  });
  //
  $("button#pizza-form-button").click(function(event)
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

    if (newPizza.size === 8)
    {
      $("#pizza-size-output").text("Medium");
    }
    else if (newPizza.size === 10)
    {
      $("#pizza-size-output").text("Large");
    }
    else if (newPizza.size === 12)
    {
      $("#pizza-size-output").text("Extra Large");
    }



    $("#pizza-total").text(pizzaTotal);
    $("#pizza-form")[0].reset();
  });
  //
});

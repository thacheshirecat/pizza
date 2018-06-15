//
//Back end
//
var orderTotal = 0;
//
function PizzaEater(name, street, city, state, zip)
{
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
}
//A prototype for checking if the user entered their full adress, and adding it to the next page if they have
PizzaEater.prototype.deliveryAddress = function()
{
  if (this.name === "" || this.street === "" || this.city === "" || this.state === "" || this.zip === "")
  {
    alert("Please Enter Name and Full Address for Delivery")
  }
  else
  {
    $("#order-form-user-name").text(this.name);
    $("#delivery-street").text(this.street);
    $("#delivery-city").text(this.city);
    $("#delivery-state").text(this.state);
    $("#delivery-zip").text(this.zip);
    $("#user-info").hide();
    $("#order-form").show();
    $("#user-info-display").show();
    $("#delivery-display").show();
  }
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
//A prototype to calculate the cost of pizza
Pizza.prototype.pizzaCost = function()
{
  this.price += this.size;
  this.price += this.cheese;
  this.price += this.meats;
  this.price += this.veggies;
  this.price = (this.price * 1.1).toFixed(2);
  return this.price;
}
//A prototype to output the selected size of the pizza
Pizza.prototype.pizzaSize = function()
{
  var pizzaSizeOutput = ""
  if (this.size === 8)
  {
    pizzaSizeOutput = "Medium";
  }
  else if (this.size === 10)
  {
    pizzaSizeOutput = "Large";
  }
  else if (this.size === 12)
  {
    pizzaSizeOutput = "Extra Large";
  }
  return pizzaSizeOutput
}
//
//Front end
//
$(document).ready(function()
{
  //
  $("#pizza-form")[0].reset();
  //
  $("#user-info-input")[0].reset();
  //Carry out button is clicked on initial screen
  $("button#carry-out-button").click(function(event)
  {
    event.preventDefault();
    var userName = $("input#user-name").val();
    if (userName === "")
    {
      alert("Name required for a carry out order")
    }
    else
    {
      $("#order-form-user-name").text(userName);
      $("#user-info").hide();
      $("#order-form").show();
      $("#user-info-display").show();
    }
  });
  //Delivery button is clicked on initial screen
  $("button#delivery-button").click(function(event)
  {
    event.preventDefault();
    var userName = $("input#user-name").val();
    var userStreet = $("input#user-street").val();
    var userCity = $("input#user-city").val();
    var userState = $("input#user-state").val();
    var userZip = $("input#user-zip").val();

    var newEater = new PizzaEater(userName, userStreet, userCity, userState, userZip);

    newEater.deliveryAddress();

  });
  //Add Pizza button is clicked on order form
  $("button#pizza-form-button").click(function(event)
  {
    event.preventDefault();

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
    var pizzaSizeOutput = newPizza.pizzaSize();
    orderTotal = (parseFloat(pizzaTotal) + parseFloat(orderTotal)).toFixed(2);



    $("#pizza-total").append("<li>" + pizzaSizeOutput + " pizza: $" + pizzaTotal + "</li>");
    $("#pizza-form")[0].reset();
    $("#checkout-button").show();
  });
  //
  $("button#checkout-button").click(function(event)
  {
    event.preventDefault();

    $("#order-form").hide();
    $("#pizza-total").hide();
    $("#checkout-button").hide();
    $("#checkout-screen").show();
    $("#total-money-owed").text(orderTotal);
    orderTotal = 0;
  })
  //
});

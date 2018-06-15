Specs:
1. User selects a pizza size //
  Input: Large - Output: $10
2. User selects an amount of cheese, and a size //
  Input: Extra Cheese/Large - Output: $12 (2 + 10)
3. User selects number of meats in addition to size and cheese //
  Input: Pepperoni, Sausage/Extra Cheese/Large - Output: $13.50 ((2*0.75) + 2 + 10)
4.  User selects number of veggies in addition to all other selections //
  Input: Onions, Peppers, Spinach/Pepperoni, Sausage/Extra Cheese/Large -
  Output: $15.00 ((3 * 0.50) + (2 * 0.75) + 2 + 10)
5. Add tax //
  Input $15.00 - Output: $16.50 (15 * 1.1)

Additional Specs:
1. User inputs name and clicks button, order form features text using name //
  Input: Alex Bunnell - Output: Order For Alex Bunnell
2. User inputs address and clicks button, order form displays where pizza will be delivered to //
  Input: 123 House St / Seattle / WA / 98103 - Output: Delivery To: 123 House St, Seattle, WA 98103
3. If user leaves name or address blank pressing the button will prompt them to fill out the form // Input: "" = Output: alert("Please complete all required fields")
4. After adding pizza to their order a checkout button will appear which can be clicked to change pages to one that displays the total //
 Input: user clicks checkout button, two medium cheese pizzas listed - Output: Your total is: $19.60

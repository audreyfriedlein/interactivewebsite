/* Menu snapshot from https://thereefshack.toast.site/order */
const menuItems = [
  {
    "name": "Gabe's Fish & Chips",
    "description": "Lightly Breaded Fresh New England Cod, Served with Coleslaw, House-Cut Fries, Tartar Sauce & Lemon.",
    "price": "$21.95",
    "category": "Seafood",
    "image": "assets/item-100000006066279800_1683860529.jpg"
  },
  {
    "name": "The Shack Attack",
    "description": "Steak or Chicken, Sausage, Bacon, Hash Browns, American Cheese",
    "price": "$14.49",
    "category": "Breakfast",
    "image": "assets/item-100000025702575675_1678542154.jpg"
  },
  {
    "name": "Tex-Mex bowl",
    "description": "Seasoned Grilled Chicken, spanish rice, melted cheddar cheese, corn, black beans , avacado and cilantro",
    "price": "$14.95",
    "category": "Bowls & Salads",
    "image": "assets/item-100000031497865736_1689345511.jpg"
  },
  {
    "name": "Chicken Coop",
    "description": "Fried or Grilled chicken breast with lettuce tomato mayo on a fresh daily roll",
    "price": "$10.50",
    "category": "Sandwiches",
    "image": "assets/item-100000025703008132_1678542350.jpg"
  },
  {
    "name": "Stone Crab Roll",
    "description": "Fresh Stone Crab meat, served on buttered Grilled Brioche roll along side melted dipping butter",
    "price": "$23.95",
    "category": "Seafood",
    "image": "assets/item-100000042647227334_1718483859.jpg"
  },
  {
    "name": "Three Buttermilk Pancakes",
    "description": "3 Buttermilk Pancakes Add Bacon, 2 eggs OR Sausage 3.00",
    "price": "$9.99",
    "category": "Breakfast",
    "image": "assets/item-100000025702575689_1678541292.jpg"
  },
  {
    "name": "Lobster Roll",
    "description": "Hot Maine Lobster on toasted buttered Brioche roll",
    "price": "$29.99",
    "category": "Seafood"
  },
  {
    "name": "The Reefer Cheesteak",
    "description": "",
    "price": "$14.95",
    "category": "Sandwiches"
  },
  {
    "name": "Power Bowl",
    "description": "Chicken, two fried eggs over brown rice, spinach, avocado, and black beans.",
    "price": "$13.95",
    "category": "Bowls & Salads",
    "image": "assets/item-100000007236546368_1633801180.jpg"
  },
  {
    "name": "Chicken Caesar Salad",
    "description": "Made to order grilled chicken over Romaine topped with croutons and parm cheese. Make it a wrap option available",
    "price": "$13.99",
    "category": "Bowls & Salads"
  },
  {
    "name": "Fried Chicken & Mashed Potatoes",
    "description": "Chunkss of our Crispy Fried Chicken over mashed potatoes, corn, melted cheese and gravy",
    "price": "$12.95",
    "category": "Bowls & Salads",
    "image": "assets/item-100000026983170465_1678493444.jpg"
  },
  {
    "name": "Hot Vegan Bowl",
    "description": "Cauliflower rice, grilled pepper, onions & mushrooms, sautéed carrots, spinach, broccoli and cherry tomatoes in EVOO AND garlic drizzled with a balsamic glaze",
    "price": "$14.99",
    "category": "Bowls & Salads"
  },
  {
    "name": "Nora's Favorite Salad",
    "description": "Sliced Grilled chicken over baby spinach with cranberries, hard boiled egg, avacado, sunflower seeds and Green Goddess dressing.",
    "price": "$14.99",
    "category": "Bowls & Salads"
  },
  {
    "name": "06824 Salad",
    "description": "Fresh romaine lettuce with tomatoes, corn, cucumbers and grilled chicken. Comes with ranch dressing on the side.",
    "price": "$14.99",
    "category": "Bowls & Salads"
  },
  {
    "name": "Mac And Cheese Bowl",
    "description": "",
    "price": "$13.99",
    "category": "Bowls & Salads"
  },
  {
    "name": "Mixed Green Salad",
    "description": "Fresh spring mixed Salad with cherry tomatoes, cucumbers and red onion Add Steak tips, Salmon, grilled chicken for $7.00 Lobster or Stone Crab meat additional $12",
    "price": "$8.99",
    "category": "Bowls & Salads"
  },
  {
    "name": "Egg & Cheese",
    "description": "Add Hash Browns , Sausage, Ham, or Bacon 2.00",
    "price": "$5.00",
    "category": "Breakfast"
  },
  {
    "name": "Bacon, Egg & Cheese",
    "description": "Two Eggs, Anerican cheese, 3 pieces of bacon on a fresh baked roll",
    "price": "$7.99",
    "category": "Breakfast",
    "image": "assets/item-100000025702575673_1678492687.jpg"
  },
  {
    "name": "Sausage, Egg & Cheese",
    "description": "House made sausage, 2 Eggs, American cheese on a fresh baked roll",
    "price": "$7.00",
    "category": "Breakfast"
  },
  {
    "name": "Breakfast Reeferito",
    "description": "3 Eggs Scrambled, Choice of Bacon OR Sausage, Pico, Sour Cream, on Flour Tortilla",
    "price": "$12.99",
    "category": "Breakfast"
  },
  {
    "name": "Breakfast Crunch Wrap",
    "description": "Two farm farm fresh eggs, choice of fried chicken, bacon or sausage, with cheddar monterey jaxk cheddar, crunchy corn tortilla wrapped in a grilled flour tortilla",
    "price": "$11.49",
    "category": "Breakfast"
  },
  {
    "name": "Brunch Burger",
    "description": "",
    "price": "$12.99",
    "category": "Breakfast"
  },
  {
    "name": "The Jersey Shore",
    "description": "Taylor Ham, Eggs & American Cheese",
    "price": "$10.50",
    "category": "Breakfast"
  },
  {
    "name": "Stacy's Mom",
    "description": "Steak or chicken, Eggs, American cheese, on fresh baked roll",
    "price": "$10.50",
    "category": "Breakfast"
  },
  {
    "name": "Moms of Fairfield",
    "description": "Grilled Peppers, Onions, Mushrooms, Broccolini & Spinach with American Cheese. Add Fresh Mozzarella $1.50",
    "price": "$9.99",
    "category": "Breakfast",
    "image": "assets/item-100000025702575681_1678542051.jpg"
  },
  {
    "name": "The Southporter",
    "description": "Italian Sausage, Sautéed Spinach & Garlic, American Cheese on fesh baked roll",
    "price": "$9.99",
    "category": "Breakfast",
    "image": "assets/item-100000025702575679_1678492766.jpg"
  },
  {
    "name": "Steak Tips and Eggs",
    "description": "Angus Steak tips and eggs made your way with buttered toast",
    "price": "$13.95",
    "category": "Breakfast"
  },
  {
    "name": "French Toast",
    "description": "Add Bacon, 2 eggs OR Sausage 3.00",
    "price": "$10.99",
    "category": "Breakfast",
    "image": "assets/item-100000025702575691_1678541237.jpg"
  },
  {
    "name": "3-Egg Omelet",
    "description": "With Cheese, Toast and House-made Hash Browns Fillings: Cherry Peppers, Grape Tomatoes, Gilled Mushrooms, Grilled Onions, Grilled Peppers, Sautéed Spinach Add Ons: Avocado 1.50, Bacon 2, Ham 1.50, Sausage 2, Steak 5, Turkey 3",
    "price": "$9.50",
    "category": "Breakfast"
  },
  {
    "name": "The Dubliner",
    "description": "A traditional Irish Breakfast with two farm fresh Eggs, Irish Sausage, baked beans and toast",
    "price": "$10.49",
    "category": "Breakfast"
  },
  {
    "name": "REEFERITO - Breakfast",
    "description": "3 Scrambled eggs, cheddar cheese, pico, sour cream, choice of BACON or SAUSAGE in tortilla",
    "price": "$9.50",
    "category": "Breakfast"
  },
  {
    "name": "Juevos Ranchero",
    "description": "",
    "price": "$13.95",
    "category": "Breakfast",
    "image": "assets/item-100000048591597815_1733590125.jpg"
  },
  {
    "name": "Avacado Toast",
    "description": "Fresh sliced Avacado over 2 slices of toasted whole grain bread topped with 2 eggs made your way, fresh pico de gaeio",
    "price": "$11.95",
    "category": "Breakfast"
  },
  {
    "name": "Toasted plain or everything Bagel with cream cheese Lox tomato onion",
    "description": "Toasted everything or plain Bagel stuff with Lox, cream cheese and topped with Tomato and raw onion",
    "price": "$10.99",
    "category": "Breakfast"
  },
  {
    "name": "Reef Burger",
    "description": "",
    "price": "$13.99",
    "category": "Sandwiches"
  },
  {
    "name": "Chicken Tenders",
    "description": "",
    "price": "$9.99",
    "category": "Sides & Snacks"
  },
  {
    "name": "Mozzarella Sticks",
    "description": "",
    "price": "$8.99",
    "category": "Sides & Snacks"
  },
  {
    "name": "Meat Head Meatballs",
    "description": "",
    "price": "$9.99",
    "category": "Sides & Snacks"
  },
  {
    "name": "Reefer Dumplings",
    "description": "",
    "price": "$9.99",
    "category": "Sides & Snacks"
  },
  {
    "name": "Philly CheeseSteak Egg Rolls",
    "description": "3 large hand rolled Shaved steak egg rolls with cheese sauce.",
    "price": "$9.99",
    "category": "Sides & Snacks"
  },
  {
    "name": "Jumbo Pretzel",
    "description": "",
    "price": "$7.99",
    "category": "Sides & Snacks"
  },
  {
    "name": "6 Wings",
    "description": "6 Wings, tossed in your choice of sauce",
    "price": "$8.99",
    "category": "Sides & Snacks",
    "image": "assets/item-100000025704968462_1678493260.jpg"
  },
  {
    "name": "12 Wings",
    "description": "",
    "price": "$17.99",
    "category": "Sides & Snacks"
  },
  {
    "name": "Cup of Chili",
    "description": "",
    "price": "$7.49",
    "category": "Sides & Snacks"
  },
  {
    "name": "Lil' Reefer Cheesesteak",
    "description": "Steak OR Chicken, House Cheese Sauce, Crinkle Cut Fries",
    "price": "$9.99",
    "category": "Kids"
  },
  {
    "name": "Chicken Tenders",
    "description": "with Crinkle Cut Fries",
    "price": "$9.99",
    "category": "Kids"
  },
  {
    "name": "Jake Panus Grilled Cheese",
    "description": "with Crinkle Cut Fries",
    "price": "$9.99",
    "category": "Kids"
  },
  {
    "name": "Lil' Reefer Smash Cheeseburger",
    "description": "Fresh Ground Sirloin with Crinkle Cut Fries",
    "price": "$9.99",
    "category": "Kids"
  },
  {
    "name": "Cheese Quesadilla",
    "description": "",
    "price": "$7.99",
    "category": "Kids"
  },
  {
    "name": "Kids Hot Dog",
    "description": "Hot Dog Served with Crinkle Cut Fries.",
    "price": "$8.99",
    "category": "Kids"
  },
  {
    "name": "HOT DOG (Copy)",
    "description": "",
    "price": "$9.99",
    "category": "Sandwiches"
  },
  {
    "name": "Meatball Parmigiana",
    "description": "Ground Sirloin Meatballs topped with our marinara and and melted mozzarella",
    "price": "$13.99",
    "category": "Sandwiches",
    "image": "assets/item-100000038252299337_1707398871.jpg"
  },
  {
    "name": "Chicken Parmigiana",
    "description": "Lightly Fried Chicken Cutlet topped with our zesty homemade marinara and mozzarella on a seeded Italian Grinder",
    "price": "$13.99",
    "category": "Sandwiches",
    "image": "assets/item-100000038252038184_1707328083.jpg"
  },
  {
    "name": "The Tailgater Sandwich",
    "description": "Pulled chicken, buffalo sauce, griled peppers and onions, house cheese sauce on a fresh grinder or bowl",
    "price": "$13.99",
    "category": "Sandwiches"
  },
  {
    "name": "BLT",
    "description": "Genorous amount of Crispy Bacon, Lettuce, Tomato and Mayo on Texas toast",
    "price": "$9.99",
    "category": "Sandwiches",
    "image": "assets/item-100000025704051016_1678643322.jpg"
  },
  {
    "name": "The New Yorker",
    "description": "NY Hot Pastrami Sandwich served with soft seedless Rye Bread and yellow mustard",
    "price": "$12.99",
    "category": "Sandwiches"
  },
  {
    "name": "Traditional Chicago Beef",
    "description": "",
    "price": "$11.99",
    "category": "Sandwiches"
  },
  {
    "name": "Deli Classic",
    "description": "Roast Turkey, Ham or Roast Beef Grinder, Roll, Wrap or Bread, with Lettuce, Tomato, Mayo, and choice of American, Provolone, Pepper Jack, Swiss, Cheddar",
    "price": "$12.99",
    "category": "Sandwiches"
  },
  {
    "name": "Chicken little",
    "description": "Our Famous Fried Chicken sandwich on Freshly made Roll, with thick cut onion ring, pickels and our famous Shack Sauce",
    "price": "$12.95",
    "category": "Sandwiches"
  },
  {
    "name": "Cubano Sandwich",
    "description": "Boiled Ham, sliced pork, melted swiss cheese, pickles and yellow mustard on a grilled fresh sub roll",
    "price": "$13.95",
    "category": "Sandwiches"
  },
  {
    "name": "Italian Combo",
    "description": "Genoa Salami, Prosciutto, Mortadella, Provolone, Italian Dressing, Grinder, Roll or Wrap",
    "price": "$13.95",
    "category": "Sandwiches",
    "image": "assets/item-100000025704051014_1678643391.jpg"
  },
  {
    "name": "Renato Scarpiello",
    "description": "Shredded marinated Chicken off the bone then sautéed with onions, cherry peppers and our homeade chopped fried potatoes. Stuffed into our fresh daily 10\" grinder bread. Drizzled with our housemadw cheese sauce",
    "price": "$19.99",
    "category": "Sandwiches"
  },
  {
    "name": "New England Clam Chowder",
    "description": "",
    "price": "See Toast",
    "category": "Sides & Snacks"
  },
  {
    "name": "Steak Chili",
    "description": "Cubed sirlion steak chili, topped with melted cheddar. Served with side of sour cream and red onions",
    "price": "See Toast",
    "category": "Sides & Snacks"
  },
  {
    "name": "Soup of the Day",
    "description": "Creamy tomato soup or Matzah ball soup",
    "price": "See Toast",
    "category": "Sides & Snacks"
  },
  {
    "name": "Mac 'N Cheese",
    "description": "",
    "price": "See Toast",
    "category": "Sides & Snacks"
  },
  {
    "name": "Reefer Dumplings (Pork)",
    "description": "4 homeade dumplings stuffed with pork, scallions and seasoning. Served with our Asian Ginger sauce",
    "price": "$8.99",
    "category": "Sides & Snacks"
  },
  {
    "name": "Reefer Dumplings (Chicken)",
    "description": "4 Homemade stuffed Chicken Ginger dumplings served with our Thai sauce.",
    "price": "$8.99",
    "category": "Sides & Snacks"
  },
  {
    "name": "Authentic Chicago Beef Sandwich",
    "description": "Hot Rare house-made Roast Beef dipped in our Chicago style Au-Jus with melted provolone and sautéed onions on fresh backed roll",
    "price": "$12.95",
    "category": "Specials",
    "image": "assets/item-100000026983170461_1678543238.jpg"
  },
  {
    "name": "Fried Chicken & Mashed Potatoes",
    "description": "Chunkss of our Crispy Fried Chicken over mashed potatoes, corn, melted cheese and gravy",
    "price": "$12.95",
    "category": "Specials",
    "image": "assets/item-100000026983170465_1678493444.jpg"
  },
  {
    "name": "BBQ Pulled Pork Mac & Cheese",
    "description": "Slow Roasted pork with BBQ sauce served over our creamy Mac and Cheese",
    "price": "$11.99",
    "category": "Specials",
    "image": "assets/item-100000026983170467_1678541507.jpg"
  },
  {
    "name": "Buffalo Chicken Mac & Cheese",
    "description": "Chunks of our Buffalo Fried Chicken over Mac and Cheese or Mashed potatoes",
    "price": "$11.99",
    "category": "Specials",
    "image": "assets/item-100000026983170469_1678540918.jpg"
  },
  {
    "name": "Chicken Caprese sandwich",
    "description": "Grilled chicken breast with Fresh Mozz, tomatoes, arugala, pesto and olive oil on a fresh baked grinder",
    "price": "$13.95",
    "category": "Specials"
  },
  {
    "name": "Grilled Cheese & Tomato Soup",
    "description": "Butter grilled Texas Toast mekted American cheese with a cup of our homeade Creamy Tomatoe Soup",
    "price": "$11.99",
    "category": "Specials",
    "image": "assets/item-100000034074333755_1695667671.jpg"
  },
  {
    "name": "Mac and cheese, topped with french fries and chili",
    "description": "",
    "price": "$12.99",
    "category": "Specials"
  },
  {
    "name": "The Milano",
    "description": "Lightly breaded Chicken cutlet with Fesh Mozzarella, heirloom tomatoes, fresh spinach and layered with Prosciuto then drizzled with pesto/balsamic glaze. All served on fresh daily 10\" Grinder.",
    "price": "$19.95",
    "category": "Specials",
    "image": "assets/item-100000042288441973_1717439964.jpg"
  },
  {
    "name": "Big Shack Salad",
    "description": "Ground sirloin all beef burger topped with melted American cheese Diced over lettuce, tomato, pickels l, onion Reefshack sauce without the sesame seed bun but with French fries tossed into salad to perfection",
    "price": "$13.95",
    "category": "Specials",
    "image": "assets/item-100000044303183544_1722456452.jpg"
  },
  {
    "name": "Narragansett Clam Strips",
    "description": "Local clams lightly breaded and fried served with tartar and lemon",
    "price": "$13.99",
    "category": "Sides & Snacks"
  },
  {
    "name": "Shack Sliders (2)",
    "description": "",
    "price": "$9.99",
    "category": "Sides & Snacks"
  },
  {
    "name": "Meat Head Meatballs (2)",
    "description": "Freshly made tortilla chipd with homeade salsa",
    "price": "$9.99",
    "category": "Sides & Snacks",
    "image": "assets/item-100000029671494025_1684761909.jpg"
  },
  {
    "name": "Steak Tips with Sweet Bourbon Sauce",
    "description": "Sirloin steak tips marinated in sweet Bourbon sauce",
    "price": "$9.99",
    "category": "Sides & Snacks",
    "image": "assets/item-100000029671494029_1684761006.jpg"
  },
  {
    "name": "Mozzarella Sticks with Marinara Dipping Suace",
    "description": "",
    "price": "$7.99",
    "category": "Sides & Snacks"
  },
  {
    "name": "Jumbo Pretzel",
    "description": "Jumbo sized pretzel with side of hot mustard",
    "price": "$6.99",
    "category": "Sides & Snacks",
    "image": "assets/item-100000029671494021_1684761697.jpg"
  },
  {
    "name": "Veggie Spring Rolls with Sweet Chili Dipping Sauce",
    "description": "",
    "price": "$9.00",
    "category": "Sides & Snacks"
  },
  {
    "name": "Fried Shrimp with choice of sauce",
    "description": "",
    "price": "$12.95",
    "category": "Sides & Snacks"
  },
  {
    "name": "12 Wings",
    "description": "12 Wings, tossed in your choice of sauce",
    "price": "$16.99",
    "category": "Sides & Snacks",
    "image": "assets/item-100000025704968464_1678493274.jpg"
  },
  {
    "name": "18 Wings",
    "description": "18 Wings, tossed in your choice of sauce",
    "price": "$27.00",
    "category": "Sides & Snacks",
    "image": "assets/item-100000025704968466_1678493293.jpg"
  },
  {
    "name": "Boneless 4",
    "description": "",
    "price": "$8.99",
    "category": "Sides & Snacks"
  },
  {
    "name": "Boneless 6",
    "description": "",
    "price": "$12.99",
    "category": "Sides & Snacks"
  },
  {
    "name": "Crinkle Cut Fries",
    "description": "",
    "price": "$5.50+",
    "category": "Sides & Snacks"
  },
  {
    "name": "Cheese Fries",
    "description": "",
    "price": "$6.50+",
    "category": "Sides & Snacks"
  },
  {
    "name": "Chili Cheese Fries",
    "description": "",
    "price": "$7.95+",
    "category": "Sides & Snacks"
  },
  {
    "name": "Disco Fries",
    "description": "",
    "price": "$7.95",
    "category": "Sides & Snacks"
  },
  {
    "name": "Onion Rings",
    "description": "",
    "price": "$6.00+",
    "category": "Sides & Snacks"
  },
  {
    "name": "Bar Style Pizza (Copy)",
    "description": "Crispy 12\" bar style pizza choose your toppings made to order",
    "price": "$13.00",
    "category": "Specials",
    "image": "assets/item-100000022757039872_1760103441.jpg"
  },
  {
    "name": "Dos Tacos (Copy)",
    "description": "",
    "price": "$9.99",
    "category": "Specials"
  }
];

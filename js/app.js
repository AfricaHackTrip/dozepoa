var categoriesTemplate = Handlebars.compile($('#nav-template').html());
var wordlistTemplate = Handlebars.compile($('#wordlist-template').html());

var navHtml = categoriesTemplate({categories: [
  {icon: 'salamz.png', title: 'Salamz', english_title: 'Greetings', gridPosition: "a"},
  {icon: 'food.png', title: 'Dish', english_title: 'Food and Drinks', gridPosition: "b"},
  {icon: 'directions.png', title: 'Kusaka', english_title: 'Directions', gridPosition: "a"},
  {icon: 'shopping.png', title: 'Ku-shop', english_title: 'Shopping', gridPosition: "b"}
]});

var wordlistHtml = wordlistTemplate({words: [
  {title: 'Salamz', english_title: 'Greetings'},
  {title: 'Dish', english_title: 'Food and Drinks'},
  {title: 'Kusaka', english_title: 'Directions'},
  {title: 'Ku-shop', english_title: 'Shopping'}
]});

// $('#categories').html(navHtml);
$('#categories').html(wordlistHtml);

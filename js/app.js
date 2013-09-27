var categoriesTemplate = Handlebars.compile($('#nav-template').html());

var navHtml = categoriesTemplate({categories: [
  {icon: 'salamz.png', title: 'Salamz', english_title: 'Greetings'},
  {icon: 'food.png', title: 'Dish', english_title: 'Food and Drinks'},
  {icon: 'directions.png', title: 'Kusaka', english_title: 'Directions'},
  {icon: 'shopping.png', title: 'Ku-shop', english_title: 'Shopping'}
]});

$('#categories').html(navHtml);

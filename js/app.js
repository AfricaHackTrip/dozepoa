var categoriesTemplate = Handlebars.compile($('#nav-template').html());
var wordlistTemplate = Handlebars.compile($('#wordlist-template').html());

var content = {
  categories: {
    salamz: { title: 'Salamz', english_title: 'Greetings', gridPosition: "a", phrases: [
      {swahili: "Mambo", english: "How are you?", answer: ["Poa - Cool", "Niko poa - I'm fine"], explanation: "maybe the most common greeting to start a great conversation"},
      {swahili: "Sasa", english: "Hi", answer: ["Poa - Cool", "Niko poa - I'm fine"], explanation: "the most common greeting if you do not want to start a conversation"},
      {swahili: "Niaje", english: "How is it?", answer: ["Poa - Cool", "Niko poa - I'm fine"], explanation: "checking on someone else"},
      {swahili: "Sasa niaje", english: "Hey, how is it now?", answer: ["Poa - Cool", "Niko poa - I'm fine"], explanation: ""}
    ]},

    food: {title: 'Dish', english_title: 'Food and Drinks', gridPosition: "b"},
    directions: {title: 'Kusaka', english_title: 'Directions', gridPosition: "a"},
    shopping: {title: 'Ku-shop', english_title: 'Shopping', gridPosition: "b"}
  }
};

var navHtml = categoriesTemplate(content);

var wordlistHtml = wordlistTemplate({
  phrases: content.categories["salamz"]["phrases"]
});

// $('#categories').html(navHtml);
$('#categories').html(wordlistHtml);

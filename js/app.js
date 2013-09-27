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
    food: {title: 'Dish', english_title: 'Food and Drinks', gridPosition: "b", phrases: [
      {swahili: "Nini iko?", english: "What's on the menu?", answer: [], explanation: ""},
      {swahili: "Mko na nini leo?", english: "What's on the special of today?", answer: [], explanation: ""},
      {swahili: "Kuna beer", english: "Can I have a beer", answer: [], explanation: ""},
      {swahili: "Kuna soda", english: "Is there soda?", answer: [], explanation: ""}
    ]},
    directions: {title: 'Kusaka', english_title: 'Directions', gridPosition: "a", phrases: [
      {swahili: "Naeza fika vipi [your place]?", english: "How do I get to [your place]?", answer: [], explanation: ""},
      {swahili: "[place] iko wapi", english: "Where is [place]?", answer: [], explanation: ""}
    ]},
    shopping: {title: 'Ku-shop', english_title: 'Shopping', gridPosition: "b", phrases: [
      {swahili: "[fish] ni how much?", english: "how much is the [fish]?", answer: [], explanation: "yes, it is really kind english"},
      {swahili: "[fish] ina uzwa ngapi?", english: "how much is the [fish]?", answer: [], explanation: ""},
      {swahili: "[fish] ni expe sana", english: "That [fish] is way too expensive?", answer: [], explanation: ""}
    ]}
  }
};

var navHtml = categoriesTemplate(content);

var wordlistHtml = wordlistTemplate({
  phrases: content.categories["food"]["phrases"]
});

$('body').append(navHtml);
$('body').append(wordlistHtml);

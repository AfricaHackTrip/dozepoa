var categoriesTemplate = Handlebars.compile($('#nav-template').html());
var phrasesTemplate = Handlebars.compile($('#phrases-template').html());
var phraseTemplate = Handlebars.compile($('#phrase-template').html());

var content = {
  categories: [
    {name: "salamz", title: 'Salamz', english_title: 'Greetings', gridPosition: "a", phrases: [
      {swahili: "Mambo", english: "How are you?", answer: ["Poa - Cool", "Niko poa - I'm fine"], explanation: "maybe the most common greeting to start a great conversation"},
      {swahili: "Sasa", english: "Hi", answer: ["Poa - Cool", "Niko poa - I'm fine"], explanation: "the most common greeting if you do not want to start a conversation"},
      {swahili: "Niaje", english: "How is it?", answer: ["Poa - Cool", "Niko poa - I'm fine"], explanation: "checking on someone else"},
      {swahili: "Sasa niaje", english: "Hey, how is it now?", answer: ["Poa - Cool", "Niko poa - I'm fine"], explanation: ""}
    ]},
    {name: "food", title: 'Dish', english_title: 'Food and Drinks', gridPosition: "b", phrases: [
      {swahili: "Nini iko?", english: "What's on the menu?", answer: [], explanation: ""},
      {swahili: "Mko na nini leo?", english: "What's on the special of today?", answer: [], explanation: ""},
      {swahili: "Kuna beer", english: "Can I have a beer", answer: [], explanation: ""},
      {swahili: "Kuna soda", english: "Is there soda?", answer: [], explanation: ""}
    ]},
    {name: "directions", title: 'Kusaka', english_title: 'Directions', gridPosition: "a", phrases: [
      {swahili: "Naeza fika vipi [your place]?", english: "How do I get to [your place]?", answer: [], explanation: ""},
      {swahili: "[place] iko wapi", english: "Where is [place]?", answer: [], explanation: ""}
    ]},
    {name: "whatthe", title: 'Ei...?!', english_title: 'What the..?!', gridPosition: "b", phrases: [
      {swahili: "Ei...", english: "What the...?", answer: [], explanation: ""},
      {swahili: "Eishhhh", english: "ouch!", answer: [], explanation: ""},
      {swahili: "wa wa wa", english: "expresion of being surprised", answer: [], explanation: ""},
      {swahili: "Kwenda uko",english: "get outta here", answer: [], explanation: ""}
    ]},
    {name: "shopping", title: 'Ku-shop', english_title: 'Shopping', gridPosition: "a", phrases: [
      {swahili: "[fish] ni how much?", english: "how much is the [fish]?", answer: [], explanation: "yes, it is really kind english"},
      {swahili: "[fish] ina uzwa ngapi?", english: "how much is the [fish]?", answer: [], explanation: ""},
      {swahili: "[fish] ni expe sana", english: "That [fish] is way too expensive?", answer: [], explanation: ""}
    ]},
    {name: "pickup", title: 'Mambo m-super', english_title: 'Pickup lines',gridPosition: "b", phrases: [
      {swahili: "Mambo m-super", english: "Hey gorgeous", answer: [], explanation: "Only when adressing girls!"},
      {swahili: "Mambo m-handsome", english: "Hey handsome", answer: [], explanation: "Only when adressing guys!"},
      {swahili: "We ni kuitaje?", english: "How do I call you?", answer: [], explanation: "to any gender"},
    ]}
  ]
};

var navHtml = categoriesTemplate(content);

var phrasesHtml = phrasesTemplate({
  phrases: content.categories[0]["phrases"]
});

var phrasesHtmlForCategory = function(categoryName) {
  var category = $.grep( content.categories, function( category, index ) {
    return category.name === categoryName;
  })[0];

  return phrasesTemplate({
    phrases: category.phrases,
    title: category.title
  });
};

var findPhrase = function(swahili) {
  return _.chain(content.categories)
    .map(function(category) {
      return category.phrases;
    })
    .flatten()
    .find(function(phrase) {
      return phrase.swahili === swahili;
    }).value();
};

var phraseHtml = function(phrase) {
  return phraseTemplate(phrase);
};

$('body').append(navHtml);
$('body').append(phrasesHtml);

$('#homepage a').on("click", function(){
  var categoryTitle = $(this).data('category');

  $('#phrases').remove();
  $('body').append(phrasesHtmlForCategory(categoryTitle));
});

$(document).on('click', '#phrases a[rel=phrase]', function(e) {
  e.preventDefault();

  var phraseTitle = $(this).data('phrase');
  var phrase = findPhrase(phraseTitle);

  $(this).next('[rel=explanation]').html(phraseHtml(phrase));
});

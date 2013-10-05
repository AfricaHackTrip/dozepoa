var categoriesTemplate = Handlebars.compile($('#nav-template').html());
var phrasesTemplate = Handlebars.compile($('#phrases-template').html());
var phraseTemplate = Handlebars.compile($('#phrase-template').html());

var navHtml = categoriesTemplate(Dozepoa.content);

var phrasesHtml = phrasesTemplate({
  phrases: Dozepoa.content.categories[0]["phrases"]
});

var phrasesHtmlForCategory = function(categoryName) {
  var category = $.grep( Dozepoa.content.categories, function( category, index ) {
    return category.name === categoryName;
  })[0];

  return phrasesTemplate({
    phrases: category.phrases,
    title: category.title
  });
};

var findPhrase = function(swahili) {
  return _.chain(Dozepoa.content.categories)
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
  var explanation = $(this).next('[rel=explanation]');

  if(explanation.html() === "") {
    explanation.html(phraseHtml(phrase));
  }
  else {
    explanation.html("");
  }
});

var categoriesTemplate = Handlebars.compile($('#nav-template').html());
var phrasesTemplate    = Handlebars.compile($('#phrases-template').html());
var phraseTemplate     = Handlebars.compile($('#phrase-template').html());

var navHtml = categoriesTemplate(Dozepoa.categories('luganda'));

var phrasesHtml = phrasesTemplate({
  phrases: Dozepoa.content.categories[0]["phrases"]
});

var phrasesHtmlForCategory = function(categoryName) {
  var category = _.findWhere(Dozepoa.content.categories, {name: categoryName});
  var phrases  = Dozepoa.phrases('luganda', categoryName);

  return phrasesTemplate({
    phrases: phrases,
    title: category.title
  });
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
  $(this).children('.explanation').first().slideToggle('fast');
});

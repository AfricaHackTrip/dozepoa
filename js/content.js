var Dozepoa = {};

Dozepoa.languages = {
  swahili: 'Swahili',
  luganda: 'Luganda',
  lugbara: 'Lugbara'
};

Dozepoa.content = {
  categories: [{
    name: "salamz",
    swahili: 'Salamz',
    luganda: 'Category Luganda',
    lugbara: 'Category Lugbara',
    english: 'Greetings',
    gridPosition: "a",
    phrases: [
      {
        swahili: "Mambo",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "How are you?",
        answer: ["Poa - Cool", "Niko poa - I'm fine"],
        explanation: "maybe the most common greeting to start a great conversation"
      },
      {
        swahili: "Sasa",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "Hi",
        answer: ["Poa - Cool", "Niko poa - I'm fine"],
        explanation: "the most common greeting if you do not want to start a conversation"
      },
      {
        swahili: "Niaje",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "How is it?",
        answer: ["Poa - Cool", "Niko poa - I'm fine"],
        explanation: "checking on someone else"
      },
      {
        swahili: "Sasa niaje",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "Hey, how is it now?",
        answer: ["Poa - Cool", "Niko poa - I'm fine"],
        explanation: ""
      }
    ]
  },
  {
    name: "food",
    swahili: 'Dish',
    luganda: 'Category Luganda',
    lugbara: 'Category Lugbara',
    english: 'Food and Drinks',
    gridPosition: "b",
    phrases: [
      {
        swahili: "Nini iko?",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "What's on the menu?",
        answer: [],
        explanation: ""
      },
      {
        swahili: "Mko na nini leo?",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "What's on the special of today?",
        answer: [],
        explanation: ""
      },
      {
        swahili: "Kuna beer",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "Can I have a beer",
        answer: [],
        explanation: ""
      },
      {
        swahili: "Kuna soda",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "Is there soda?",
        answer: [],
        explanation: ""
      }
    ]
  },
  {
    name: "directions",
    swahili: 'Kusaka',
    luganda: 'Category Luganda',
    lugbara: 'Category Lugbara',
    english: 'Directions',
    gridPosition: "a",
    phrases: [
      {
        swahili: "Naeza fika vipi [your place]?",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "How do I get to [your place]?",
        answer: [],
        explanation: ""
      },
      {
        swahili: "[place] iko wapi",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "Where is [place]?",
        answer: [],
        explanation: ""
      }
    ]
  },
  {
    name: "whatthe",
    swahili: 'Ei...?!',
    luganda: 'Category Luganda',
    lugbara: 'Category Lugbara',
    english: 'What the..?!',
    gridPosition: "b",
    phrases: [
      {
        swahili: "Ei...",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "What the...?",
        answer: [],
        explanation: ""
      },
      {
        swahili: "Eishhhh",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "ouch!",
        answer: [],
        explanation: ""
      },
      {
        swahili: "wa wa wa",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "expresion of being surprised",
        answer: [],
        explanation: ""
      },
      {
        swahili: "Kwenda uko",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "get outta here",
        answer: [],
        explanation: ""
      }
    ]
  },
  {
    name: "shopping",
    swahili: 'Ku-shop',
    luganda: 'Category Luganda',
    lugbara: 'Category Lugbara',
    english: 'Shopping',
    gridPosition: "a",
    phrases: [
      {
        swahili: "[fish] ni how much?",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "how much is the [fish]?",
        answer: [],
        explanation: "yes, it is really kind english"
      },
      {
        swahili: "[fish] ina uzwa ngapi?",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "how much is the [fish]?",
        answer: [],
        explanation: ""
      },
      {
        swahili: "[fish] ni expe sana",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "That [fish] is way too expensive?",
        answer: [],
        explanation: ""
      }
    ]
  },
  {
    name: "pickup",
    swahili: 'Mambo m-super',
    luganda: 'Category Luganda',
    lugbara: 'Category Lugbara',
    english: 'Pickup lines',
    gridPosition: "b",
    phrases: [
      {
        swahili: "Mambo m-super",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "Hey gorgeous",
        answer: [],
        explanation: "Only when adressing girls!"
      },
      {
        swahili: "Mambo m-handsome",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "Hey handsome",
        answer: [],
        explanation: "Only when adressing guys!"
      },
      {
        swahili: "We ni kuitaje?",
        luganda: "Oli otya",
        lugbara: "Mi ngoni",
        english: "How do I call you?",
        answer: [],
        explanation: "to any gender"
      }
    ]
  }]
};

Dozepoa.categories = function(language) {
  var languageCategories = [];

  _.each(Dozepoa.content.categories, function(category) {
    var languageCategory = {
      name: category.name,
      mainLanguageName: category[language],
      secondLanguageName: category['english'],
      gridPosition: category.gridPosition,
    };
    languageCategories.push(languageCategory);
  });

  return languageCategories;
};

Dozepoa.phrases = function(language, categoryName) {
  var category = _.findWhere(Dozepoa.content.categories, {name: categoryName});

  var languagePhrases = _.map(category.phrases, function(phrase) {
    return {
      mainLanguagePhrase: phrase[language],
      secondLanguagePhrase: phrase['english'],
      answer: phrase.answer,
      explanation: phrase.explanation || '...'
    };
  });

  return languagePhrases;
};

//ex1

const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];

const capitalize = function (str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase(); // first letter, capitalized
  capitalizedStr += str.slice(1); // rest of the string
  return capitalizedStr;
};
console.log(capitalize("hello")); // "Hello"

//"Guido is an Underage Bungalow Builder from Sydurn, Canaland. Guido loves to say "What a piece of wood!"."

const getAge = function (age) {
  if (age > 55) {
    return "a 55+";
  }
  if (age < 21) {
    return "an Underage";
  }
  return `a ${age} year old`;
};

const combineCityAndCountry = function (city, country) {
  //   let capCity = capitalize(city);
  //   let capCountry = capitalize(country);
  return `from ${capitalize(city)}, ${capitalize(country)}`;
};

const getSummary = function (person) {
  let summary = "";
  summary += ` ${capitalize(person.name)}`;
  summary += ` is ${getAge(person.age)}`; //Yes - you can put a function call inside the tick quotes!
  summary += ` ${capitalize(person.profession)}`;
  summary += ` ${combineCityAndCountry(person.city, person.country)}`;
  summary += ` ${capitalize(person.name)} loves to say "${capitalize(
    person.catchphrase
  )}."`;

  return summary;
};

for (p of people_info) {
  console.log(getSummary(p));
}

//ex2
const story =
  "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", '"', "'", "?", "!", ";"];
const wordCounts = {};

function cleanText(sentence) {
  let cleaned = sentence.toLowerCase();

  // Remove all special characters from the string
  for (let char of specialChars) {
    cleaned = cleaned.split(char).join("");
  }

  // Split into words and filter out empty strings
  return cleaned.split(" ").filter((word) => word.trim() !== "");
}

function addToCounter(word) {
  if (wordCounts[word]) {
    wordCounts[word]++;
  } else {
    wordCounts[word] = 1;
  }
}

function countWords(sentence) {
  const words = cleanText(sentence);
  for (let word of words) {
    addToCounter(word);
  }
}

// Run it
countWords(story);
console.log(wordCounts);

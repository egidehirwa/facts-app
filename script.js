// DATA

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

console.log(CATEGORIES.find((cat) => cat.name === "society").color);

// SELECTING DOM ELEMENTS

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// Toggle form visibility

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Sact";
  }
});

factsList.innerHTML = "";

// Load data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://tmrywsxlktedwvqzccpd.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtcnl3c3hsa3RlZHd2cXpjY3BkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ2ODQ4NzEsImV4cCI6MTk5MDI2MDg3MX0.DhouuF8HLiujnM6GbhCeIdeRmIixuSFfhXgar9jgHyc",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtcnl3c3hsa3RlZHd2cXpjY3BkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ2ODQ4NzEsImV4cCI6MTk5MDI2MDg3MX0.DhouuF8HLiujnM6GbhCeIdeRmIixuSFfhXgar9jgHyc",
      },
    }
  );
  const data = await res.json();
  console.log(data);
  // const filteredData = data.filter((fact) => fact.category === "technology");
  // console.log(filteredData);

  createFactsList(data);
}

// Adding elements dynamically to the DOM

// createFactsList(initialFacts);
function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
      <p>
        ${fact.text}
        <a class="source" href="${fact.source}" target="_blank">(Source)</a>
      </p>
      <span class="tag" style="background-color: ${
        CATEGORIES.find((cat) => cat.name === "society").color
      }">${fact.category}</span>
    </li>`
  );
  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

console.log([23, 10, 8, 38, 4, 7].filter((el) => el < 10));
console.log([23, 10, 8, 38, 4, 7].find((el) => el < 10));

/*

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return "impossible year";
}

const age1 = calcFactAge(2010);

console.log(age1);
console.log(calcFactAge(2000));
console.log(calcFactAge(2030));

// const calcFactAge2 = (year) => 2022 - year;
const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be less or equal to ${new Date().getFullYear()}`;


let votesInteresting = "";
let votesMindblowing = 40;

if (votesInteresting === votesMindblowing) {
  console.log("This is equally interesting and mindblowings");
} else if (votesInteresting > votesMindblowing) {
  console.log("This is Interesting");
} else if (votesInteresting < votesMindblowing) {
  console.log("This is Mindblowing");
}

// falsy values: 0, '', null, undefined = They are converted to false by javascript
if (votesInteresting) {
  console.log("WHATTTTT");
} else {
  console.log("Not WHATTTTT");
}

// The ternary operator - conditional
let votesFalse = 10;
const totalUpvotes = votesInteresting + votesMindblowing;

const message =
  totalUpvotes > votesFalse ? "The fact is true" : "The fact might be false";

console.log(message);

const text = "Belgium";
const upperText = text.toUpperCase();

console.log(upperText);

const str = `This is from ${upperText}. It has been true for ${calcFactAge(
  2010
)} years. The fact is probably ${totalUpvotes > votesFalse ? "True" : "False"}`;

console.log(str);

 */

/*

// ARRAYS

const fact = ["Lisbon is the capital of Portugal", 2020, true];

console.log(fact);
console.log(fact[1]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const [text, createdIn, isCorrect] = fact;
console.log(text, createdIn);

// ... These three dots are called the spread operator. They unpack the previous array and add all the elements into the new array (spreading). This operation only works inside a list.
const newFact = [...fact, "society"];
console.log(newFact);

// OBJECTS - Aggregates different values into one big value. In an array the values don't have a name as opposed to objects which have one. An object is composed of a key value pair.

const factObj = {
  text: "The capital of Belgium is Brussels", // text is a property of the factObj object
  category: "society",
  createdIn: 2010,
  isCorrect: true,
  createSummary: function () {
    return `${this.text}, it was created in ${this.createdIn}. It is reffered to as ${this.category}`;
  },
};

console.log(factObj.createSummary());
console.log(factObj["isCorrect"]); // must be declared as a string

// How to create variables from the object using destructuring

const { category, createdin } = factObj;
console.log(category);
console.log(factObj.createSummary());

// LOOPING OVER ARRAYS

[3, 6, 8, 10].forEach(function (el) {
  console.log(el);
});

const times10 = [3, 6, 8, 10].map(function (x) {
  return x * 10;
});
console.log(times10);

const times5 = [3, 6, 8, 10].map((x) => x * 5);
console.log(times5);

const onlyNames = CATEGORIES.map((y) => y.name);
console.log(onlyNames);


function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return "impossible year";
}

const factAges = initialFacts.map((el) => calcFactAge(el.createdIn));
console.log(factAges);

*/

// DOM MANIPULATION

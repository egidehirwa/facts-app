const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Sact";
  }
});

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

/* 
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

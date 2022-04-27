// You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return either:

// true if all developers in the list code in the same language; or
// false otherwise.
// For example, given the following input array:

var list1 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "JavaScript",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 65,
    language: "JavaScript",
  },
]

// your function should return true.

// My solution

function isSameLanguage(list) {
  const firstLang = list[0].language

  for (let { language } of list) {
    if (language !== firstLang) {
      return false
    }
  }
  return true
}

console.log(isSameLanguage(list1))

// Other solutions

function isSameLanguage(list) {
  return list.every((e) => e.language === list[0].language)
}

const isSameLanguage = (list) => {
  return [...new Set(list.map((el) => el["language"]))].length === 1
}

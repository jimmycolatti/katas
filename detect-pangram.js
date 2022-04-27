// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// My solution:

function isPangram(string) {
  if (typeof string !== "string") {
    return "function only receives a string"
  }

  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  let regex = /\s/g
  const lowercase = string.toLowerCase().replace(regex, "")

  for (let i = 0; i < alphabet.length; i++) {
    if (lowercase.indexOf(alphabet[i]) === -1) {
      return false
    }
  }
  return true
}

isPangram("The quick brown fox jumps over the lazy dog")

// Other solutions:

function isPangram(string) {
  string = string.toLowerCase()
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
    return string.indexOf(x) !== -1
  })
}

function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every((x) => string.toLowerCase().includes(x))
}

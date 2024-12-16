// Length of a string
const a = "MDN - Resources for developers, by developers"
a.length
// console.log(a.length)

// Retrieving a specific string character
// console.log(a[2])

// To retrieve the last character of any string
// console.log(a[a.length - 1])

// Testing if a string contains a substring
if (a.includes("ra")) {
  // console.log("ra in included")
} else {
  // console.log("ra not in included")
}

// if a string starts or ends with a particular substring
if (a.startsWith("H")) {
  // console.log("Yes it starts with H")
} else {
  // console.log("Yes it doesn't start with H")
}
if (a.endsWith("r")) {
  // console.log("Yes it ends with r")
} else {
  // console.log("Yes it doesn't ends with r")
}
//Finding the position of a substring in a string (If not present, it will return -1)
// console.log(a.indexOf("t"))

//finding subsequent occurrences
const b = a.indexOf("developers")
const c = a.indexOf("developers", b + 1)
// console.log(b)
// console.log(c)

//Extracting a substring from a string

const d = "Sristi"
// console.log(d.slice(1, 5))

//to extract all of the remaining characters in a string after a certain characters
// console.log(d.slice(3))

// Changing case

// console.log(d.toLowerCase())
// console.log(d.toUpperCase())

// Updating parts of a string
// console.log(d.replace("Sri", "xxx"))
// to change all occurrences of the substring
// console.log(d.replaceAll("i", "x"))

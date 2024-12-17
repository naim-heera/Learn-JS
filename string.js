// // Length of a string
// const a = "MDN - Resources for developers, by developers"
// a.length
// // console.log(a.length)

// // Retrieving a specific string character
// // console.log(a[2])

// // To retrieve the last character of any string
// // console.log(a[a.length - 1])

// // Testing if a string contains a substring
// if (a.includes("ra")) {
//   // console.log("ra in included")
// } else {
//   // console.log("ra not in included")
// }

// // if a string starts or ends with a particular substring
// if (a.startsWith("H")) {
//   // console.log("Yes it starts with H")
// } else {
//   // console.log("Yes it doesn't start with H")
// }
// if (a.endsWith("r")) {
//   // console.log("Yes it ends with r")
// } else {
//   // console.log("Yes it doesn't ends with r")
// }
// //Finding the position of a substring in a string (If not present, it will return -1)
// // console.log(a.indexOf("t"))

// //finding subsequent occurrences
// const b = a.indexOf("developers")
// const c = a.indexOf("developers", b + 1)
// // console.log(b)
// // console.log(c)

// //Extracting a substring from a string

// const d = "Sristi"
// // console.log(d.slice(1, 5))

// //to extract all of the remaining characters in a string after a certain characters
// // console.log(d.slice(3))

// // Changing case

// // console.log(d.toLowerCase())
// // console.log(d.toUpperCase())

// // Updating parts of a string
// // console.log(d.replace("Sri", "xxx"))
// // to change all occurrences of the substring
// // console.log(d.replaceAll("i", "x"))
// Filtering greeting messages
// const list = document.querySelector(".output ul")
// list.textContent = ""
// const greetings = [
//   "Happy Birthday!",
//   "Merry Christmas my love",
//   "A happy Christmas to all the family",
//   "You're all I want for Christmas",
//   "Get well soon",
// ]

// for (const greeting of greetings) {
//   // Your conditional test needs to go inside the parentheses
//   // in the line below, replacing what's currently there
//   if (greeting.includes("Christmas")) {
//     const listItem = document.createElement("li")
//     listItem.textContent = greeting
//     list.appendChild(listItem)
//   }
// }
// Fixing capitalization
// const list = document.querySelector(".output ul")
// list.textContent = ""
// const cities = ["lonDon", "ManCHESTer", "BiRmiNGHAM", "liVERpoOL"]

// for (const city of cities) {
//   // write your code just below here
//   const lower = city.toLowerCase()
//   const firstletter = lower.slice(0, 1)
//   const capitalized = lower.replace(firstletter, firstletter.toUpperCase())

//   const result = capitalized
//   const listItem = document.createElement("li")
//   listItem.textContent = result
//   list.appendChild(listItem)
// }
// Making new strings from old parts
const list = document.querySelector(".output ul")
list.textContent = ""
const stations = [
  "MAN675847583748sjt567654;Manchester Piccadilly",
  "GNF576746573fhdg4737dh4;Greenfield",
  "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
  "SYB4f65hf75f736463;Stalybridge",
  "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
]

for (const station of stations) {
  // write your code just below here
  const code = station.slice(0, 3)
  console.log(code)
  const semiColon = station.indexOf(";")
  console.log(semiColon)
  const name = station.slice(semiColon + 1)
  console.log(name)

  const result = `${code}: ${name}`
  console.log(result)

  const listItem = document.createElement("li")
  listItem.textContent = result
  list.appendChild(listItem)
}

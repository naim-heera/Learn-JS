// const shopping = ["bread", "milk", "cheese", "hummus", "noodles"]
// // console.log(shopping.length)
// console.log(shopping[3])
// shopping[3] = "bird"
// console.log(shopping)
// const random = ["tree", 795, [0, 1, 2]]
// // random[2][2]
// // console.log(random[2][2])
// console.log(random.indexOf(795))
// console.log(random.indexOf([0, 1, 2]))
// Note: if item doesn't exist it gives -1
// const cities = ["Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton"]
// [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]
// cities.push("Cardiff")
// cities.push("Cardiff", "Bradford", "Brighton")
// cities.unshift("Dhaka")
// const removedCity = cities.pop()
// // console.log(removedCity)
// const index = cities.indexOf("Cardiff")

// Note: In this call to splice(), the first argument says where to start removing items, and the second argument says how many items should be removed
// const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"]
// const index = cities.indexOf("Liverpool")
// console.log(index)

// console.log(index)
// if (index !== -1) {
//   cities.splice(index, 1)
// }
// console.log(cities)
// Accessing every item
// const birds = ["Parrot", "Falcon", "Owl"]
// for (const bird of birds) {
//   console.log(bird)
// }
// Doubling number with map
// function double(number) {
//   return number * 2
// }
// const numbers = [1, 2, 3, 4]
// const doubled = numbers.map(double)
// console.log(doubled)
// Filter returns a new arrary of the function returns true
// function isLong(city) {
//   return city.length > 8
// }
// const cities = ["London", "Liverpool", "Totnes", "Edinburgh"]
// const cityLength = cities.filter(isLong)
// console.log(cityLength)
// Converting between strings and arrays
// const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle"
// const cities = data.split(",")
// console.log(cities)
// const commaSeperated = cities.join(",")
// console.log(commaSeperated)
// const toString = cities.toString()
// console.log(toString)

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
const cities = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"]
const index = cities.indexOf("Liverpool")
console.log(index)

console.log(index)
if (index !== -1) {
  cities.splice(index, 1)
}
console.log(cities)

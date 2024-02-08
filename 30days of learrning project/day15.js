// class Person {
//     constructor(firstName, lastName, age, country = 'Turkiye', city) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age= age
//     this.country = country
//     this.city = city        
//     this.skills = []
// }
// getFullName() {
//     return this.firstName + ' ' + this.lastName
//     }
//     appendSkill(skill) {
//         this.skills.push(skill)
//     }
//     get getSkills(){
//         return this.skills
//     }
// set setSkills(skill) {
//     this.skills.push(skill)
// }
// }

// const person1 = new Person('tayfun', 'erbilen', 29, 'turkiye', 'eskisehir')
// const person2 = new Person('mert osman', 'basol', 30, 'turkiye', 'izmir')
// const person3 = new Person('gokhan', 'kandemir', 34, 'turkiye', 'eskisehir')

// person1.setSkills = 'javascript'
// person1.setSkills = 'react'

// person1.appendSkill('html')

// console.log(
//     person1.getSkills
// )

// class Teacher extends Person {

//     constructor(firstName, lastName, age, country, city, gender) {
//         super(this.firstName, lastName, age, country, city)
//     }
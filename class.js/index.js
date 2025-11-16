// class Eployee {
//     constructor(name, salary, position) {
//         this.name = name
//         this.salary = salary
//         this.position = position
//     }

//     getAnnualSalary() {
//         return `${this.name} yiliga ${this.salary * 12}$ yillik oladi`
//     }
// }

// let ishchi = new Eployee(`ogabek`, 9999, `yoshulli`)
// console.log(ishchi.getAnnualSalary())


// class Student {
//     constructor(name, grades){
//         this.name = name
//         this.grades = grades
// }

// addGrades() {
//     this.grades = ball
// }
// getAvarageGrade() {

// }
// }





//chatGPT

//1

// class talaba {
//     constructor(ism, yosh){
//         this.ism = ism
//         this.yosh = yosh
//     }
//     yoyilgan(){
//         return `talaba ismi(${this.ism}), talaba yoshi (${this.yosh})`
//     }
// }

// let talabalar = new talaba(`ogabek`, 16)
// console.log(talabalar.yoyilgan())


//2

// class talaba {
//     constructor(ism, yosh) {
//         this.ism = ism
//         this.yosh = yosh

//     }

//     get info() {
//         return `ishqingda man ${this.ism} bolaman`
//     }
//     set yangiIsm(yangiIsm) {
//         this.ism = yangiIsm
//     }
//     yoyilgan() {
//         return `salom mening ismim ${this.ism}`
//     }
// }
// let salom = new talaba(`Anvar`, 14)
// let salom1 = new talaba(`Anvar`, 14)
// salom1.yangiIsm = `ado`
// console.log(salom1.info)
// salom.yangiIsm = `ogabek`


// console.log(salom.yoyilgan())


//yuzani hisoblash


// class tortburchak {
//     constructor(eni, boyi){
//         this.eni = eni
//         this.boyi = boyi
//     }

//     yuzaniHisoblash(){
//         return `${this.eni * this.boyi}m**`
//     }
// }

// let hisoblash = new tortburchak(12, 12)
// console.log(hisoblash.yuzaniHisoblash())


// 4

// class oquvchi {
//     constructor(ismi, baholari){
//         this.name = ismi
//         this.ball = baholari 
//     }
//     qabulQilinadimi() { 
//         if(this.ball >= 70){
//     return `qabul qilindingiz`
//         } else {
//             return `ymrtogo gul girib bilmabsan yenam topshirib gor😁(${this.name}!)`
//         }
//     }
// }

// let tekshiruvchi = new oquvchi(`Anvarbek`, 24)
// console.log(tekshiruvchi.qabulQilinadimi())


//5

// class mashina {
//     constructor(nomi, rangi, tezligi){
//        this.nomi = nomi
//        this.rangi = rangi
//        this.tezligi = tezligi 
//     }

//     set yangiTezlik(tezlik){
//     this.tezligi = tezlik
//   }

//   gazBer() {
//     return `${this.tezligi + 10}km/h`
//   }  
//   get info(){
//     return `mashinaning nomi ${this.nomi}. Mashinaning rangi ${this.rangi}da boladi. Tezligi esa ${this.tezligi}km/h gacha chiqishi mumkin`
//   }

// }

// let mashq1 = new mashina(`BMW`, `tyomny ko'k`, 210)
// console.log(mashq1.gazBer())
// console.log(mashq1.info)

// let mashq3 = new mashina(`BMW`, `tyomny ko'k`, 210)
// mashq3.yangiTezlik = 180
// console.log(mashq3)


// class BankAccount {
//   #balance = 0;

//   deposit(amount) {
//     this.#balance += amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// let account = new BankAccount();
// account.deposit(100);
// console.log(account.getBalance()); // 100
// console.log(account.#balance); ❌ Xato — private property
//withdraw() metodini qo’shing

// class Person {
//   constructor(ism, jinsi, dateBorth) {
//     this.name = ism
//     this.sex = jinsi
//     this.dateBorth = dateBorth
//   }
//   introduce() {
//     return ` Salom mening ismim ${this.name}.\n Men ${this.sex}man.\n men ${this.dateBorth}da tugilganman.`
//   }
//   getAge() {
//     const date = new Date()
//     return `men ${date.getFullYear() - this.dateBorth} yoshdaman`
//   }
// }

// let person = new Person(`ogabek`, `erkak`, 2009)
// console.log(person.getAge())
// // console.log(person.introduce())

// class parent extends Person {
//   constructor(ism, jinsi, dateBorth, work) {
//     super(ism, jinsi, dateBorth)
//     this.work = work
//   }

//   getWork() {
//     return `Name: ${this.name}\nish joyi: ${this.work}`
//   }
// }

// let Parent = new parent("ogabek", `erkak`, 2009, `bozor`)
// console.log(Parent.getAge())


//cha tGPT mashlari

// class Rectagle {
//   constructor(width, height){
//     this.with = width
//     this.height = height
//   }
//   getPerimetr() {
//     let kopaytma = this.height + this.with
//     return kopaytma * 2
//   }
// }

// const perimetr = new Rectagle(34, 35)
// console.log(perimetr.getPerimetr())

// //

// class Worker {
//   constructor(name, salary) {
//     this.name = name;
//     this.salary = salary;
//   }
//   getCenterSalary(){
//     let sum = 0
//     sum += sum + salary
//     return sum
//   }
// }


// const workers = [
//   new Worker("Ali", 800),
//   new Worker("Vali", 750),
//   new Worker("Gani", 900)
// ];

// console.log(workers.getCenterSalary())

// class Task {
//   constructor(id, name, desc, complated = false) {
//     this.id = id
//     this.name = name
//     this.desc = desc
//     this.complated = complated
//   }
//   campleteTask() {
//     this.campleted = true
//   }
// }

// let task = new Task(1, `ogabek`, `it`,)
// console.log(task1)

// class ToDoList {
//   constructor() {
//     this.tasks = []
//   }
//   addTask(task) {
//     this.tasks.push(task)
//   }
//   removeTask(task) {
//     for (let task of this.tasks) {
//       if (task.id === id) {
//         let i = this.tasks.indexOf(task)
//         this.tasks.splice(i, 1)
//       }
//     }
//   }
//   showTasks() {
//     this.tasks.forEach(task => {
//       console.log(`${task.id} ${task.name} ${task.desc} ${task.compeleted === true ? `bajarilgan` : `bajarilmagan`}`)
//     })
//   }
// }

// let task1 = new Task(1, `it`, `html don mavzusida uy ishi`)
// let task2 = new Task(2, `it`, `it don mavzusid`, `auy ishini bajarish`)

// const todoList = new ToDoList()
// todoList.addTask(task1)
// todoList.addTask(task2)
// todoList.removeTask(2)



// const elements = document.getElementsByClassName(`title`)
// console.log(elements)
// for(let i = 0; i < elements.length; i++){
//   console.log(elements[i].innerTex)
// }
// Array.from(elements).forEach((element) => {
//   element.innerText = `bir xil text`
// })


// const p1 = document.getElementsByClassName("p1")[0]
// const p2 = document.getElementsByClassName("p2")[0]
// const p3 = document.getElementsByClassName("p3")[0]
const btn = document.getElementsByClassName("tugma")[0]
const yangiP = document.createElement("p")
const p1 = document.querySelectorAll("p")
const yangiBTN = document.createElement("button")
btn.onclick = function () {
    p1.forEach((p) => {
        p.textContent = "gordingmi anni. uragtaman "
        p.style.color = "green"
        p.style.fontSize = "20px"
        yangiP.textContent = "indi buni ham bosasan"
    })
}



// btn.onclick = function () {
//   if (btn.style.backgroundColor === "red") {
//     btn.style.backgroundColor = "white"
//     btn.style.color = "red"
//   } else {
//     btn.style.backgroundColor = "red"
//     btn.style.color = "white"
//   }
// }

// btn.onclick = function () {
//   if (btn.style.backgroundColor === "blue") {
//     btn.style.backgroundColor = "white"
//     btn.style.color = "blue"
//     src = "./ChatGPT Image 2 окт. 2025 г., 21_02_14.png"
//   } else if (btn.style.backgroundColor === "white") {
//     btn.style.backgroundColor = "red"
//     btn.style.color = "black"
//       // .src = "./photo_2025-09-01_17-54-36.jpg"
//   } else {
//     btn.style.backgroundColor = "blue"
//     btn.style.color = "red"
//       // .src = "./ChatGPT Image 2 окт. 2025 г., 21_02_14.png"
//   }
// }
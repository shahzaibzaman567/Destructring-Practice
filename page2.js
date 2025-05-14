// Object
// Q 6?==>
console.log("Q6?==>")
const detail={
    name:"shahzaib"
    ,age:"25"
    ,city:"Peshawer"
}
const {name,age,}=detail
console.log(name)
console.log(age)

// Q 7?==>
console.log("Q7?==>")
const person={
    Name:"Ali"
}
const {Name:parson}=person
console.log(parson)

// Q 8?==>
console.log("Q8?==>")

const deafult= { title: "JavaScript Basics" }
const {title , rating= 5}={}=deafult
console.log(title)
console.log(rating)

// Q 9?==>
console.log("Q9?==>")
const user= { id: 1, address: { city: "Islamabad", zip: "44000" } }
const {id,address:{city}={}}=user
console.log(city)

// Q 10?==>
console.log("Q10?==>")
const laptop= { brand: "Dell", model: "XPS 13", price: 250000, color: "Silver" };
const {brand,model}=laptop
console.log( "Brand :",brand)
console.log("Model :",model)
// Q 11?==>
console.log("Q11?==>")
const greet=({NAME,role}={name:"ali"})=>console.log(NAME,role)
greet({ NAME: "Osama", role: "Teacher" })
// Q 12?==>
console.log("Q12?==>")

const add=([x,y])=> console.log([x+y])
add([7,5])
// Q 13?==>
console.log("Q13?==>")
const  userinfo=()=>["shah","shah@gmail.com"] 
const [username,email] =userinfo()
console.log(username)
console.log(email)
// Q 14?==>
console.log("Q14?==>")
const posts = [ { id: 1, title: "Hello" }, { id: 2, title: "World" } ];
const [{title:title1},{title:title2}]=posts
console.log(title1)
console.log(title2)
// Q 15?==>
console.log("Q15?==>")

const developer = {
    Uname: "Ali",
    skills: ["JavaScript", "React", "Node"]
  };
  
const {Uname,skills:[J,,]}=developer
console.log(Uname)
console.log(J)













//---TO NUMBER---

//----
//любое строчное значение to number

let value = "mav mav mav"

//1
let toNumber = Number(value)
console.log(`${value},через конструктор Number():`, toNumber)
console.log(`тип данных ${value},через конструктор  Number():`, typeof toNumber)


//2
toNumber = +value 
console.log(`${value},через унарный+:`, toNumber)
console.log(`тип данных ${value},через унарный+:`, typeof toNumber)


//----
// строчное число to number

value = "123"

//1
toNumber = Number(value)
console.log(`${value},через конструктор Number():`, toNumber)
console.log(`тип данных ${value},через конструктор  Number():`, typeof toNumber)


//2
toNumber = +value 
console.log(`${value},через унарный+:`, toNumber)
console.log(`тип данных ${value},через унарный+:`, typeof toNumber)

//----
// пустая строка   to number

value = ""

//1
toNumber = Number(value)
console.log(`пустая строка ${value},через конструктор Number():`, toNumber)
console.log(`тип данных пустая строка${value},через конструктор Number():`, typeof toNumber)


//2
toNumber = +value 
console.log(`пустая строка ${value},через унарный+:`, toNumber)
console.log(`тип данных пустая строка ${value},через унарный+:`, typeof toNumber)

//----
//строка с пробелом (не пустая) to number

value = " "

//1
toNumber = Number(value)
console.log(`строка с пробелом ${value},через конструктор Number():`, toNumber)
console.log(`тип данных строка с пробелом${value},через конструктор Number():`, typeof toNumber)


//2
toNumber = +value 
console.log(`строка с пробелом ${value},через унарный+:`, toNumber)
console.log(`тип данных строка с пробелом ${value},через унарный+:`, typeof toNumber)

//----
// Булевое(логическое) true to NUMBER
value = true

//1
toNumber = Number(value)
console.log(`${value},через конструктор Number():`, toNumber)
console.log(`тип данных ${value},через конструктор  Number():`, typeof toNumber)


//2
toNumber = +value 
console.log(`${value},через унарный+:`, toNumber)
console.log(`тип данных ${value},через унарный+:`, typeof toNumber)

//----
// Булевое(логическое) false to NUMBER
value = false

//1
toNumber = Number(value)
console.log(`${value},через конструктор Number():`, toNumber)
console.log(`тип данных ${value},через конструктор  Number():`, typeof toNumber)


//2
toNumber = +value 
console.log(`${value},через унарный+:`, toNumber)
console.log(`тип данных ${value},через унарный+:`, typeof toNumber)


//----
// undefined to NUMBER
value = undefined

//1
toNumber = Number(value)
console.log(`${value},через конструктор Number():`, toNumber)
console.log(`тип данных ${value},через конструктор  Number():`, typeof toNumber)


//2
toNumber = +value 
console.log(`${value},через унарный+:`, toNumber)
console.log(`тип данных ${value},через унарный+:`, typeof toNumber)


//----
// null to NUMBER/
value = null

//1
toNumber = Number(value)
console.log(`${value},через конструктор Number():`, toNumber)
console.log(`тип данных ${value},через конструктор  Number():`, typeof toNumber)


//2
toNumber = +value 
console.log(`${value},через унарный+:`, toNumber)
console.log(`тип данных ${value},через унарный+:`, typeof toNumber)


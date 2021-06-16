//---TO BOOLEAN---

//----
//любое строчное значение to BOOLEAN

let value = "mav mav mav"

//1
let toBoolean = Boolean(value)
console.log(`${value},через конструктор Boolean():`, toBoolean)
console.log(`тип данных ${value},через конструктор  Boolean():`, typeof toBoolean)


//2
toBoolean =!!value 
console.log(`${value},через !!:`, toBoolean)
console.log(`тип данных ${value},через !!:`, typeof toBoolean)

//----
//любое строчное число to BOOLEAN

value = "123"

//1
toBoolean = Boolean(value)
console.log(`${value},через конструктор Boolean():`, toBoolean)
console.log(`тип данных ${value},через конструктор  Boolean():`, typeof toBoolean)


//2
toBoolean =!!value 
console.log(`${value},через !!:`, toBoolean)
console.log(`тип данных ${value},через !!:`, typeof toBoolean)

//---
//пустая строка to BOOLEAN

value = ""

//1
toBoolean = Boolean(value)
console.log(`пустая строка${value},через конструктор Boolean():`, toBoolean)
console.log(`тип данных пустая строка${value},через конструктор  Boolean():`, typeof toBoolean)


//2
toBoolean =!!value 
console.log(`пустая строка${value},через !!:`, toBoolean)
console.log(`тип данных пустая строка${value},через !!:`, typeof toBoolean)

//---
// строка с пробелом  to BOOLEAN

value = " "

//1
toBoolean = Boolean(value)
console.log(`строка с пробелом${value},через конструктор Boolean():`, toBoolean)
console.log(`тип данных строка с пробелом${value},через конструктор  Boolean():`, typeof toBoolean)


//2
toBoolean =!!value 
console.log(`строка с пробелом${value},через !!:`, toBoolean)
console.log(`тип данных строка с пробелом${value},через !!:`, typeof toBoolean)

//---
//число to BOOLEAN

value = 0

//1
toBoolean = Boolean(value)
console.log(`${value},через конструктор Boolean():`, toBoolean)
console.log(`тип данных ${value},через конструктор  Boolean():`, typeof toBoolean)


//2
toBoolean =!!value 
console.log(`${value},через !!:`, toBoolean)
console.log(`тип данных ${value},через !!:`, typeof toBoolean)

//---
//число to BOOLEAN

value = 1

//1
toBoolean = Boolean(value)
console.log(`${value},через конструктор Boolean():`, toBoolean)
console.log(`тип данных ${value},через конструктор  Boolean():`, typeof toBoolean)


//2
toBoolean =!!value 
console.log(`${value},через !!:`, toBoolean)
console.log(`тип данных ${value},через !!:`, typeof toBoolean)


//---
//NaN to BOOLEAN

value = NaN

//1
toBoolean = Boolean(value)
console.log(`${value},через конструктор Boolean():`, toBoolean)
console.log(`тип данных ${value},через конструктор  Boolean():`, typeof toBoolean)


//2
toBoolean =!!value 
console.log(`${value},через !!:`, toBoolean)
console.log(`тип данных ${value},через !!:`, typeof toBoolean)

//---
//INFINITY to BOOLEAN

value = Infinity

//1
toBoolean = Boolean(value)
console.log(`${value},через конструктор Boolean():`, toBoolean)
console.log(`тип данных ${value},через конструктор  Boolean():`, typeof toBoolean)


//2
toBoolean =!!value 
console.log(`${value},через !!:`, toBoolean)
console.log(`тип данных ${value},через !!:`, typeof toBoolean)


//---
//undefined to BOOLEAN

value = undefined

//1
toBoolean = Boolean(value)
console.log(`${value},через конструктор Boolean():`, toBoolean)
console.log(`тип данных ${value},через конструктор  Boolean():`, typeof toBoolean)


//2
toBoolean =!!value 
console.log(`${value},через !!:`, toBoolean)
console.log(`тип данных ${value},через !!:`, typeof toBoolean)

//---
//null to BOOLEAN

value = null

//1
toBoolean = Boolean(value)
console.log(`${value},через конструктор Boolean():`, toBoolean)
console.log(`тип данных ${value},через конструктор  Boolean():`, typeof toBoolean)


//2
toBoolean =!!value 
console.log(`${value},через !!:`, toBoolean)
console.log(`тип данных ${value},через !!:`, typeof toBoolean)


//---TO STRING---

//----
//number to string

let value = 0

//1
let toString = String(value)
console.log(`${value},через конструктор String():`, toString)
console.log(`тип данных ${value},через конструктор String():`, typeof toString)


//2
toString = value + ''
console.log(`${value},через конкатенацию:`, toString)
console.log(`тип данных ${value},через конкатенацию:`, typeof toString)

//number to string
value = 1
//1
toString = String(value)
console.log(`${value},через конструктор String():`, toString)
console.log(`тип данных ${value},через конструктор String():`, typeof toString)


//2
toString = value + ''
console.log(`${value},через конкатенацию:`, toString)
console.log(`тип данных ${value},через конкатенацию:`, typeof toString)


//----
//значение бесконечности to string

value = Infinity

//1
toString = String(value)
console.log(`${value},через конструктор String():`, toString)
console.log(`тип данных ${value},через конструктор String():`, typeof toString)


//2
toString = value + ''
console.log(`${value},через конкатенацию:`, toString)
console.log(`тип данных ${value},через конкатенацию:`, typeof toString)

//----
//не число to string

value = NaN

//1
toString = String(value)
console.log(`${value},через конструктор String():`, toString)
console.log(`тип данных ${value},через конструктор String():`, typeof toString)

//2
toString = value + ''
console.log(`${value},через конкатенацию:`, toString)
console.log(`тип данных ${value},через конкатенацию:`, typeof toString)

//----
// Булевое(логическое) true к СТРОКЕ
value = true

//1
toString = String(value)
console.log(`${value},через конструктор String():`, toString)
console.log(`тип данных ${value},через конструктор String():`, typeof toString)

//2
toString = value + ''
console.log(`${value},через конкатенацию:`, toString)
console.log(`тип данных ${value},через конкатенацию:`, typeof toString)

// Булевое(логическое) false к СТРОКЕ
value = false

//1
toString = String(value)
console.log(`${value},через конструктор String():`, toString)
console.log(`тип данных ${value},через конструктор String():`, typeof toString)

//2
toString = value + ''
console.log(`${value},через конкатенацию:`, toString)
console.log(`тип данных ${value},через конкатенацию:`, typeof toString)


//----
// undefined к СТРОКЕ
value = undefined

//1
toString = String(value)
console.log(`${value},через конструктор String():`, toString)
console.log(`тип данных ${value},через конструктор String():`, typeof toString)

//2
toString = value + ''
console.log(`${value},через конкатенацию:`, toString)
console.log(`тип данных ${value},через конкатенацию:`, typeof toString)

//----
// null к СТРОКЕ
value = null

//1
toString = String(value)
console.log(`${value},через конструктор String():`, toString)
console.log(`тип данных ${value},через конструктор String():`, typeof toString)

//2
toString = value + ''
console.log(`${value},через конкатенацию:`, toString)
console.log(`тип данных ${value},через конкатенацию:`, typeof toString)
// Modules

const names = require('./04-names')
const sayHi = require('./05-utils')
const data = require('./06-alternative-flavor')
// mind grenade -- this will run the functionality of the the module right away and this module was not necessary to export it
require('./07-mind-grenade')

// from 4 - names
console.log(names)
console.log('what is that guys\'s name? Oh it is ' +names.john)

// object destructuring
const {john, peter} = names

// function from 5 - utils...names from 4
sayHi('Susan')
sayHi(john)
sayHi(peter)

// from 6 - alt flavor
console.log(data)

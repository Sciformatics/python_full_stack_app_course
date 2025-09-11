let spyFirstName = prompt("What is your first name?")
let spyLastName = prompt("What is your last name?")
let spyAge = prompt("What is your age?")
let spyHeight = prompt("What is your height in cm?")
let spyPetName = prompt("What is the name of your pet?")


if (
    spyFirstName[0] == spyLastName[0]
    && (spyAge > 20 && spyAge < 30)
    && spyHeight >= 170
    && spyPetName[spyPetName.length-1] == 'y'
 ) {
    console.log('Welcome ' + spyFirstName + ' ' + spyLastName)
    console.log('You now have full spy access to my machine')
} else {
    console.log('Nice try. Goodbye.')
};
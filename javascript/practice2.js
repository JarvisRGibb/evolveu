console.log("memes")
/*
	--- make me an email
	Write the function that will make this code work.
*/
console.log("Make me an Email");

// ---- put function here ----

function makeEmail(fname, lname) {

    let larryEmail = fname + "." + lname + "@evolveu.ca";

    return larryEmail
    
    //return `${fname}.${lname}@evolveu.ca`
}


const larryEmail = makeEmail('larry', 'shumlich');
const shouldBeLarryEmail = 'larry.shumlich@evolveu.ca';

if (larryEmail != shouldBeLarryEmail) {
	console.log("***** We have an error here *****",
		larryEmail,
		" is not = ",
		shouldBeLarryEmail,
		" and it should be."
	)
}

console.log("Larry:", larryEmail);

console.log("Jane:", makeEmail("jane", "lee"));
console.log("Bill:", makeEmail("jane", "lee"));
console.log("Sam:", makeEmail("jane", "lee"));
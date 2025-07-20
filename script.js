
//object profile
let myProfile ={
    Name: "Chukwuemeka Udeh",
    Age: 23,
    
    hobbies:{
        hobby1: "Coding",
        hobby2: "Music",
        hobby3: "Trading"
    }
    
};
console.log(myProfile);

//printing second hobby to console
console.log(myProfile.hobbies.hobby2)

//function
console.log(`Hi, my name is, ${myProfile.Name}`)


//call back function
let checkUp = () => {
    setTimeout(() => {
        console.log('How are you?')
    }, 1000);
}
checkUp();

let reply = () => {
setTimeout(() => {
    console.log('I am fine.')
}, 3000);
}
reply();
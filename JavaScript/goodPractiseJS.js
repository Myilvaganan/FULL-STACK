

const person1= {
    name:'myil',
    age:24,
    isMale: true
};

const person2= {
    name:'ram',
    age:24,
    isMale: true
};

const person3= {
    name:'vaganan',
    age:24,
    isMale: true
};

/* Change CSS style to the console.log -- %c key is used */

console.log('%c My Friends','color:green;font-weight: bold;')

/* Good visibility of output - using object */

console.log({person1,person2,person3});

/* Group elemets in table form */

console.table([person1,person2,person3]);


/* Tell the time Taken */
console.time('looper')

let i=0;

while(i < 1000000){
    i++
}

console.timeEnd('looper')

/* stack trace log - to avoid invoking function twice*/

const deleteMe =() => console.trace('Bye Bye DataBase');

deleteMe();

deleteMe();

/* Destructuring */

const data ={
    name: "Myil",
    age:25,
    sex: "male",
    place: "Salem"
}

function person(data){
    let {name,age,sex,place} = data;
    return  `Hi! I am ${name}, aged ${age} living in ${place}`;
}

console.log(person(data));

            /* or */

function perso({name,age,sex,place}){
    return `Hi! I am ${name}, aged ${age} living in ${place}`;
}

console.log(perso(data));


/* Object Literals */

let {name,age} = data;

let bio = `${name} is ${age} years old`;

console.log(bio);


/* string as purely functional way */

function bio3(str,age){
    const ageStr= age >30 ? 'old' : 'young';
    return `${str[0]} ${ageStr} at ${age} years `;
}
const bio2= bio3`Myil is ${data.age}`; /* first arguement is Myil is and second arguement is inside ${}---data.age */
console.log(bio2);


/* Spread SYntax in Object*/

const movie ={ name: 'Master '};
const movie_Result = { theatresReleased: 250, blockBuster: true, amazonPrime:' Available'};

const detail= {...movie, ...movie_Result};
 console.log("detail ", detail);


/* else */

const detail1= {...movie , blockBuster: true};
 console.log("detail1 ", detail1);


 /* Spread Syntax in array */

 let newMovie= ['master','paavakadhaigal','tenent'];

 let vijayMovies= ['bigil','bhairava','sarkar'];

let allMovies= [...newMovie,...vijayMovies];
 console.log("allMovies ", allMovies);

 let vijayMoviesList= [...vijayMovies,'kathi','thiupakki'];
 console.log("vijayMoviesList ", vijayMoviesList);

 vijayMoviesList=['thirupatchi',...vijayMovies,'kathi','vijay65'];
 console.log(" vijayMoviesList ",  vijayMoviesList);



 /* Loops */


 let orders= [40,500,1300,50,20,301,413,14,14441,1443,47,3,84678,4478];

 /* reduce func */
 const total= orders.reduce((acc,cur)=>acc+cur);
 console.log("total ", total);

 /* map func */
 const withTax = orders.map(element=> element*1.2);
 console.log("withTax ", withTax);

 /* filter */

 const highValue= orders.filter(v=> v>1000);
 console.log("highValue ", highValue);


 /* async and await */
/* instead of using promises .then .then .then etc.., */

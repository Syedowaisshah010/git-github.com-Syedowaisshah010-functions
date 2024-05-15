// function is block of code that use to spacific task.

// tow types of functiions.
//static function
//dynamic function


//static function

function func_static(){
    console.log("my name is muhammad owias shah");
    
}

func_static()
//this is a static function

//dynamic function 

// which function is take parameter and arguments is called dynamic function

function func_dynamic(fname:string, lName:string){
    console.log(` How are you ${fname}${lName} `);
    
}

func_dynamic("muhammad","owais shah")


//there are few types of functions

// ananymous function 
// anonymouis function is also called without name function

let fun_anonmyous=function(){

    console.log("how are you");
    
}
fun_anonmyous()

// 2nd one is naming function
// naming function is that contain name is called naming function

function fun_naming(){
    console.log("whats is your name");
    
}
fun_naming()

//arrow function

// arrow function is also called lamda or anonmyous function

let fun_arrow=(name:string,age:number)=>{

    console.log(`my name is ${name} and i am ${age} old`);
    
}
fun_arrow("muhammad owais shah",18)
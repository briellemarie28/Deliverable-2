let temp = "What is the temperature today?";
let event = "What type of event are you going to?";


let tempFahr = prompt(temp);
let eventType = prompt(event);
// let result1 = "";
// let result = result1 + result2;

console.log(tempFahr);
console.log(eventType);

 let eventResult = ["casual", "formal", "semi-formal"];
 let clothing = ["Something comfy", "A Polo", "A suit", "wear a coat", "wear a jacket", "dont wear a jacket"];

if(tempFahr <= 54) {
    console.log(clothing [4]);
} else if(tempFahr >=55 && tempFahr <= 70) {
    console.log(clothing[5]);
} else if(tempFahr > 70) {
    console.log(clothing[6]);
}

if(eventType = "Casual") {
    console.log(clothing[1]);
}else if(eventType = "Semi Formal") {
    console.log(clothing[2]);
}else if(eventType = "Formal") {
    console.log(clothing[3]);
}
   

let result = clothing[eventResult];


    let str1 = "Since it is";
    let str2 = "degrees and you are going to a";
    let str3 = "event you should wear a";
    console.log(str1.concat(tempFahr),str2.concat(eventType),str3.concat(result));
    


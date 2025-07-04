let weight=75;
let height=1.778;

let bmi = weight/(height*height);

if(bmi<18.5){
    console.log("You are underweight");
}
else if(bmi>=18.5 && bmi<=24.9){
    console.log("You're normal");
}
else if(bmi>=25&&bmi<=29.9){
    console.log("you're overweight");
}else {
    console.log("You're obese");
}
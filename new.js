var name= "Kwame".toLowerCase();
var nameHolder= name.split("");
console.log(nameHolder);
var test = new Set(nameHolder);
console.log(test.size)
if(nameHolder.length == test.size){
    console.log("this is true");
}
else{
    console.log("this is false");
}
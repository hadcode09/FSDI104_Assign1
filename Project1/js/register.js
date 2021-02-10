const salon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        number:"192-k"
    },
    hours:{
        open:"8:00 am",
        close:"5:00 pm"
    },
    pets:[
    //  {name:"Scoody", age:50, breed:"Dane", gender:"Male", owner:"Shaggy",phine:"555-555-5555"},
    //  {name:"Scrapy", age:40, breed:"Dane", gender:"Male", owner:"Shaggy",phine:"555-555-5555"},
    //  {name:"Speedy", age:60, breed:"Mixed", gender:"Male", owner:"Bugs",phine:"444-444-4444"}
    ]
}

 //name,age,breed,gender,service,owner's name, contact phone
 
 document.getElementById("footer-text").innerHTML=`<p>${salon.name}</p>
 <p>${salon.address.street}, ${salon.address.number}</p>
 <p> It opens from ${salon.hours.open} to ${salon.hours.close}</p>`;

 for(var i=0;i<salon.pets.length;i++){
     console.log(salon.pets[i]);
 }


 //create the pet class

 class Pet{
     constructor(name,age,breed,gender,service,owner,phone){
         this.name=name;
         this.age=age;
         this.breed=breed;
         this.gender=gender;
         this.service=service;
         this.owner=owner;
         this.phone=phone;
     }
 }
 //create pets using the constructor
 var scooby=new Pet("Scooby",50, "Dane", "Male", "Full Service", "Shaggy", "555-555-5555")
 var scrapy=new Pet("Scrapy",40, "Dane", "Male", "Shower", "Shaggy", "555-555-5555")
 var speedy=new Pet("Speedy",60, "Mixed", "Male", "Nails Cut", "Bunny", "333-333-3333");
 console.log(scooby,scrapy,speedy);
 /*document.write(scooby, scrapy, speedy);*/

 //push the pets into the array
 salon.pets=[scooby,scrapy,speedy];
 salon.pets.push(scooby);
 salon.pets.push(scrapy);
 salon.pets.push(speedy);
 console.log(salon.pets);

 // create the functio register
 function register(){
// get the info from the inputs
var txtName=document.getElementById("petNameTxt");
var txtAge=document.getElementById("petAgeTxt");
var txtBreed=document.getElementById("petBreedTxt");
var txtGender=document.getElementById("petGenderTxt");
var txtService=document.getElementById("petServiceTxt");
var txtOwner=document.getElementById("ownerNameTxt");
var txtPhone=document.getElementById("ownerPhoneTxt");

console.log(txtName.value);
console.log(txtAge.value);
console.log(txtBreed.value);
console.log(txtGender.value);
console.log(txtService.value);
console.log(txtOwner.value);
console.log(txtPhone.value);

function clear(){
    txtName.value="";
    txtAge.value="";
    txtBreed.value="";
    txtGender.value="";
    txtService.value="";
    txtOwner.value="";
    txtPhone.value="";
}

//crate a generic constructr
var thePet=new Pet(txtName.value, txtAge.value, txtBreed.value,txtGender.value,txtService.value,txtOwner.value, txtPhone.value)
console.log(thePet)
//push the pet ito the array
salon.pets.push(thePet);
//display the function
display();
clearInterval();

 }
function display(){
    //clear the field
    document.getElementById("pets").
    innerHTML="";

    //travel the pet's array
    for(var i=0;i<salon.pets.length;i++){
    //create a tmp
            var tmp=`<div class="pet">
            <h3> ${salon.pets[i].name}<h3>
            <p> ${salon.pets[i].age}</p>
            <p> ${salon.pets[i].gender}</p>
            <p> ${salon.pets[i].breed}</p>
            <p> ${salon.pets[i].service}</p>
            <p> ${salon.pets[i].owner}</p>
            <p> ${salon.pets[i].phone}</p>
            
            </div>`
    //display the tmp on the html
    document.getElementById("pets").innerHTML+=tmp;
    }
    document.getElementById("pt").innerHTML=`<h2>You have registered ${salon.pets.length} pets.</h2>`;

}
    //use the function
    display();

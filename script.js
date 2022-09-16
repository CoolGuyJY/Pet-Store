
let data, output, result;
function init(){
  $.ajaxSetup({async: false});
  
  let link = "https://databse-project.hongqiuqiu.repl.co/pets";
  pets = $.getJSON(link).responseJSON;
  
  link = "https://databse-project.hongqiuqiu.repl.co/petsupplies";
  supplies = $.getJSON(link).responseJSON;

  

  

  link = "https://databse-project.hongqiuqiu.repl.co/pets/cat";
  cats = $.getJSON(link).responseJSON;

  link = "https://databse-project.hongqiuqiu.repl.co/pets/dog";
  dogs = $.getJSON(link).responseJSON;

 

  link = "https://databse-project.hongqiuqiu.repl.co/pets/other";
  others = $.getJSON(link).responseJSON;

  link = "https://databse-project.hongqiuqiu.repl.co/dogsupply";
  dogsupplies = $.getJSON(link).responseJSON;
  

  
  


  


  link = "https://databse-project.hongqiuqiu.repl.co/ragdoll";
  ragdolls = $.getJSON(link).responseJSON;

  link = "https://databse-project.hongqiuqiu.repl.co/pets/persian";
  persians = $.getJSON(link).responseJSON; 

  link = "https://databse-project.hongqiuqiu.repl.co/pets/poodle";
  poodles = $.getJSON(link).responseJSON; 

  link = "https://databse-project.hongqiuqiu.repl.co/pets/domestic";
  domestics = $.getJSON(link).responseJSON; 


  link = "https://databse-project.hongqiuqiu.repl.co/gold";
  golds = $.getJSON(link).responseJSON; 



  link = "https://databse-project.hongqiuqiu.repl.co/catsupply";
  catsupplies = $.getJSON(link).responseJSON; 


  link = "https://databse-project.hongqiuqiu.repl.co/rabbitsupply";
  rabbitsupplies = $.getJSON(link).responseJSON; 
  

  


  
  



  
  

  


  
  
  //console.log(data);
  output = document.getElementById("output");
  result = document.getElementById("result");
  let build = "";
  let ct = 0;
  // get all pets
   
  for(let i = 0; i < pets.length  ; i++){
    
    
    let pet = pets[i];
    if(pet.PetCategory == "Cat"){
      build += `<div class="fitted card">`;
      build += `  <div class="flip-card-inner"`;
      build += `    <div class="flip-card-inner">`;
      //flip card front
      build += `      <div class="flip-card-front">`;
      build += `       <h2> ${pet.Petname}</h2>`;
      build += `       <div class = "productimg"><img src='cat/cat${pet.PetID}.jpg'></div>`;
      build += `      </div>`;
      //flip card back
      build += `    <div class="flip-card-back">`;
      build += `       <h4> Pet Category: ${pet.PetCategory}</h4>`;
      build += `      <p>Gender: ${pet.Gender}</p>`;
      build += `      <p> Age: ${pet.month} months </p>`;
      build += `      <p> Breed: ${pet.Breed}</p>`;
      build += `      <p class="desc"> Pet Description: ${pet.PetDes}</p>`
      build += `      <h4> Price: $${pet.PetPrice}</h4>`;
      build += `    </div>`;
      build += `  </div>`; 
      build += `</div>`;
      
    }else if(pet.PetCategory == "Dog"){
      build += `<div class="fitted card">`;
      build += `  <div class="flip-card-inner"`;
      build += `    <div class="flip-card-inner">`;
      //flip card front
      build += `    <div class="flip-card-front">`;
      build += `      <h2> ${pet.Petname}</h2>`;
      build += `      <div class = "productimg"><img src='dog/dog${pet.PetID}.jpg'></div>`;
      build += `    </div>`;
      //flip card back
      build += `    <div class="flip-card-back">`;
      build += `      <h4> Pet Category: ${pet.PetCategory}</h4>`;
      build += `      <p>Gender: ${pet.Gender}</p>`;
      build += `      <p> Age: ${pet.month} months </p>`;
      build += `      <p> Breed: ${pet.Breed}</p>`;
      build += `      <p class="desc"> Pet Description: ${pet.PetDes}</p>`
      build += `      <h4> Price: $${pet.PetPrice}</h4>`;
      build += `    </div>`;
      build += `  </div>`;
      build += `</div>`;
    }
    ct++;
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;


  
}

function getResults(){
  let breed = document.getElementById("breed").value; 
  
  
  let build = "";
  let ct=0; 
  
  if(breed == "Persian"|| breed == "persian"|| breed== "Persian Cat"|| breed =="persian cat"){
    for(let i=0; i<persians.length; i++){
      let persian = persians[i];
        build += `<div class="fitted card">`;
        build += `  <div class="flip-card-inner"`;
        build += `    <div class="flip-card-inner">`;
        //flip card front
        build += `    <div class="flip-card-front">`;
        build += `     <h2> ${persian.Petname}</h2>`;
        build += `     <div class = "productimg"><img src='cat/cat${persian.PetID}.jpg'></div>`;
        build += `    </div>`;
        //flip card back
        build += `    <div class="flip-card-back">`;
        build += `     <h4> Pet Category: ${persian.PetCategory}</h4>`;
        build += `     <p>Gender: ${persian.Gender}</p>`;
        build += `     <p> Age: ${persian.month} months </p>`;
        build += `     <p> Breed: ${persian.Breed}</p>`;
        build += `     <p class="desc"> Pet Description: ${persian.PetDes}</p>`;
        build += `     <h4> Price: $${persian.PetPrice}</h4>`;
        build += `    </div>`;
        build += `  </div>`;
        build += `</div>`; 
        ct++;
    }
  }else if(breed == "Ragdoll"|| breed == "ragdoll"|| breed== "Ragdoll Cat"|| breed =="ragdoll cat"){
    for(let i=0; i<ragdolls.length; i++){
      let ragdoll = ragdolls[i];
        build += `<div class="fitted card">`;
        build += `  <div class="flip-card-inner"`;
        build += `    <div class="flip-card-inner">`;
        //flip card front
        build += `    <div class="flip-card-front">`;
        build += `     <h2> ${ragdoll.Petname}</h2>`;
        build += `     <div class = "productimg"><img src='cat/cat${ragdoll.PetID}.jpg'></div>`;
        build += `    </div>`;
        //flip card back
        build += `    <div class="flip-card-back">`;
        build += `     <h4> Pet Category: ${ragdoll.PetCategory}</h4>`;
        build += `     <p>Gender: ${ragdoll.Gender}</p>`;
        build += `     <p> Age: ${ragdoll.month} months </p>`;
        build += `     <p> Breed: ${ragdoll.Breed}</p>`;
        build += `     <p class="desc"> Pet Description: ${ragdoll.PetDes}</p>`;
        build += `     <h4> Price: $${ragdoll.PetPrice}</h4>`;
        build += `    </div>`;
        build += `  </div>`;
        build += `</div>`; 
        ct++;
    
  }
  
  
} else if(breed == "Poodle"|| breed == "poodle"|| breed== "Poodle Dog"|| breed =="poodle dog"){
    for(let i=0; i<poodles.length; i++){
      let poodle = poodles[i];
        build += `<div class="fitted card">`;
        build += `  <div class="flip-card-inner"`;
        build += `    <div class="flip-card-inner">`;
        //flip card front
        build += `    <div class="flip-card-front">`;
        build += `     <h2> ${poodle.Petname}</h2>`;
        build += `      <div class = "productimg"><img src='dog/dog${poodle.PetID}.jpg'></div>`;
        build += `    </div>`;
        //flip card back
        build += `    <div class="flip-card-back">`;
        build += `     <h4> Pet Category: ${poodle.PetCategory}</h4>`;
        build += `     <p>Gender: ${poodle.Gender}</p>`;
        build += `     <p> Age: ${poodle.month} months </p>`;
        build += `     <p> Breed: ${poodle.Breed}</p>`;
        build += `     <p class="desc"> Pet Description: ${poodle.PetDes}</p>`;
        build += `     <h4> Price: $${poodle.PetPrice}</h4>`;
        build += `    </div>`;
        build += `  </div>`;
        build += `</div>`; 
        ct++;
      }
    
  }else if(breed == "domestic"|| breed == "Domestic"|| breed== "Domestic Cat"|| breed =="domestic cat"){
    for(let i=0; i<domestics.length; i++){
      let domestic= domestics[i];
        build += `<div class="fitted card">`;
        build += `  <div class="flip-card-inner"`;
        build += `    <div class="flip-card-inner">`;
        //flip card front
        build += `    <div class="flip-card-front">`;
        build += `     <h2> ${domestic.Petname}</h2>`;
        build += `     <div class = "productimg"><img src='cat/cat${domestic.PetID}.jpg'></div>`;
        build += `    </div>`;
        //flip card back
        build += `    <div class="flip-card-back">`;
        build += `     <h4> Pet Category: ${domestic.PetCategory}</h4>`;
        build += `     <p>Gender: ${domestic.Gender}</p>`;
        build += `     <p> Age: ${domestic.month} months </p>`;
        build += `     <p> Breed: ${domestic.Breed}</p>`;
        build += `     <p class="desc"> Pet Description: ${domestic.PetDes}</p>`;
        build += `     <h4> Price: $${domestic.PetPrice}</h4>`;
        build += `    </div>`;
        build += `  </div>`;
        build += `</div>`; 
        ct++;
    
  }

  
}else if(breed == "golden retriver"|| breed == "Golden Retriver"){
    for(let i=0; i<golds.length; i++){
      let gold= golds[i];
        build += `<div class="fitted card">`;
        build += `  <div class="flip-card-inner"`;
        build += `    <div class="flip-card-inner">`;
        //flip card front
        build += `    <div class="flip-card-front">`;
        build += `     <h2> ${gold.Petname}</h2>`;
        build += `     <div class = "productimg"><img src='dog/dog${gold.PetID}.jpg'></div>`;
        build += `    </div>`;
        //flip card back
        build += `    <div class="flip-card-back">`;
        build += `     <h4> Pet Category: ${gold.PetCategory}</h4>`;
        build += `     <p>Gender: ${gold.Gender}</p>`;
        build += `     <p> Age: ${gold.month} months </p>`;
        build += `     <p> Breed: ${gold.Breed}</p>`;
        build += `     <p class="desc"> Pet Description: ${gold.PetDes}</p>`;
        build += `     <h4> Price: $${gold.PetPrice}</h4>`;
        build += `    </div>`;
        build += `  </div>`;
        build += `</div>`; 
        ct++;
    
  }
 }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


//*        

function filterByCats(){
  let cat = document.getElementById("cat").value;
  let build = "";
  let ct = 0;
  for(let i = 0; i < cats.length; i++){
    
    let cat = cats[i];
    
      build += `<div class="fitted card">`;
      build += `  <div class="flip-card-inner"`;
      build += `    <div class="flip-card-inner">`;
      //flip card front
      build += `    <div class="flip-card-front">`;
      build += `     <h2> ${cat.Petname}</h2>`;
      build += `     <div class = "productimg"><img src='cat/cat${cat.PetID}.jpg'></div>`;
      build += `    </div>`;
      //flip card back
      build += `    <div class="flip-card-back">`;
      build += `     <h4> Pet Category: ${cat.PetCategory}</h4>`;
      build += `     <p>Gender: ${cat.Gender}</p>`;
      build += `      <p> Age: ${cat.month} months </p>`;
      build += `      <p> Breed: ${cat.Breed}</p>`;
      build += `      <p class="desc"> Pet Description: ${cat.PetDes}</p>`
      build += `      <h4> Price: $${cat.PetPrice}</h4>`;
      build += `    </div>`;
      build += `  </div>`;
      build += `</div>`; 
      ct++;
    }

  
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}



function filterByDogs(){
  let dog = document.getElementById("dog").value;
  let build = "";
  let ct = 0;
  for(let i = 0; i < dogs.length; i++){
    
    let dog= dogs[i];
      build += `<div class="fitted card">`;
      build += `  <div class="flip-card-inner"`;
      build += `    <div class="flip-card-inner">`;
      //flip card front
      build += `    <div class="flip-card-front">`;
      build += `     <h2> ${dog.Petname}</h2>`;
      build += `     <div class = "productimg"><img src='dog/dog${dog.PetID}.jpg'></div>`;
      build += `    </div>`;
      //flip card back
      build += `    <div class="flip-card-back">`;
      build += `     <h4> Pet Category: ${dog.PetCategory}</h4>`;
      build += `     <p>Gender: ${dog.Gender}</p>`;
      build += `     <p> Age: ${dog.month} months </p>`;
      build += `     <p> Breed: ${dog.Breed}</p>`;
      build += `     <p class="desc"> Pet Description: ${dog.PetDes}</p>`
      build += `     <h4> Price: $${dog.PetPrice}</h4>`;
      build += `    </div>`;
      build += `  </div>`;
      build += `</div>`;
      
      ct++;
    }

  
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


function filterByOthers(){
  let other = document.getElementById("other").value;
  let build = "";
  let ct = 0;
  for(let i = 0; i < others.length; i++){
    
    let other= others[i];
      build += `<div class="fitted card">`;
      build += `  <div class="flip-card-inner"`;
      build += `    <div class="flip-card-inner">`;
      //flip card front
      build += `    <div class="flip-card-front">`;
      build += `     <h2> ${other.Petname}</h2>`;
      build += `     <div class = "productimg"><img src='other/other${other.PetID}.jpg'></div>`;
      build += `    </div>`;
      //flip card back
      build += `    <div class="flip-card-back">`;
      build += `     <h4> Pet Category: ${other.PetCategory}</h4>`;
      build += `     <p>Gender: ${other.Gender}</p>`;
      build += `     <p> Age: ${other.month} months </p>`;
      build += `     <p class="desc"> Pet Description: ${other.PetDes}`;
      build += `     <h4> Price: $${other.PetPrice}</h4>`;
      build += `    </div>`;
      build += `  </div>`;
      build += `</div>`;
     
      ct++;
    }

  
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


function filterBySupplies(){
  let supply = document.getElementById("supply").value;
  let build = "";
  let ct = 0;
  for(let i = 0; i < supplies.length; i++){
    let supply= supplies[i];
      build += `<div class="fitted card" class="center">`;
      build += `  <div class="flip-card-inner"`;
      build += `    <div class="flip-card-inner">`;
      //flip card front
      build += `    <div class="flip-card-front">`;
      build += `     <h3> ${supply.ItemBrand}</h3>`;
      build += `     <div class = "productimg"><img src='item/item${i+1}.jpg'></div>`;
      build += `     <h4> Price: $${supply.ItemPrice}</h4>`;
      build += `    </div>`;
      //flip card back
      build += `    <div class="flip-card-back">`;
      build += `     <p> Item Category: ${supply.ItemCategory}</p>`;
      build += `     <p>Pet Category: ${supply.PetCategory}</p>`;
      build += `     <p class="desc"> Item Description: ${supply.ItemDescription}</p>`;
      build += `    </div>`;
      build += `  </div>`;
      build += `</div>`;
     
      ct++;
    }

  
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


function getdogsupply(){
  let dogsupply = document.getElementById("dogsupply").value;
  let build = "";
  let ct = 0;
  for(let i = 0; i < dogsupplies.length; i++){
    let dogsupply= dogsupplies[i];
      build += `<div class="fitted card" class="center">`;
      build += `  <div class="flip-card-inner"`;
      build += `    <div class="flip-card-inner">`;
      //flip card front
      build += `    <div class="flip-card-front">`;
      build += `     <h3> ${dogsupply.ItemBrand}</h3>`;
      build += `    <div class = "productimg"><img src='item/item${dogsupply.ItemID}.jpg'></div>`;
      build += `    <h4> Price: $${dogsupply.ItemPrice}</h4>`;
      build += `    </div>`;
      //flip card back
      build += `    <div class="flip-card-back">`;
      build += `     <p> Item Category: ${dogsupply.ItemCategory}</p>`;
      build += `    <p class="desc"> Item Description: ${dogsupply.ItemDescription}</p>`;
      build += `    </div>`;
      build += `  </div>`;
      build += `</div>`;
     
      ct++;
}
 result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;

  
}

function getcatsupply(){
  let catsupply = document.getElementById("catsupply").value;
  let build = "";
  let ct = 0;
  for(let i = 0; i < catsupplies.length; i++){
    let catsupply = catsupplies[i];
      build += `<div class="fitted card" class="center">`;
      build += `  <div class="flip-card-inner"`;
      build += `    <div class="flip-card-inner">`;
      //flip card front
      build += `    <div class="flip-card-front">`;
      build += `     <h3> ${catsupply.ItemBrand}</h3>`;
      build += `    <div class = "productimg"><img src='item/item${catsupply.ItemID}.jpg'></div>`;
      build += `    <h4> Price: $${catsupply.ItemPrice}</h4> `;
      build += `    </div>`;
      //flip card back
      build += `    <div class="flip-card-back">`;
      build += `     <p> Item Category: ${catsupply.ItemCategory}</p>`;
      build += `    <p class="desc"> Item Description: ${catsupply.ItemDescription}</p>`;
      build += `    </div>`;
      build += `  </div>`;
      build += `</div>`;
     
      ct++;
}
 result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


function getrabbitsupply(){
  let rabbitsupply = document.getElementById("rabbitsupply").value;
  let build = "";
  let ct = 0;
  for(let i = 0; i < rabbitsupplies.length; i++){
    let rabbitsupply = rabbitsupplies[i];
      build += `<div class="fitted card" class="center">`;
      build += `  <div class="flip-card-inner"`;
      build += `    <div class="flip-card-inner">`;
      //flip card front
      build += `    <div class="flip-card-front">`;
      build += `     <h3> ${rabbitsupply.ItemBrand}</h3>`;
      build += `    <div class = "productimg"><img src='item/item${rabbitsupply.ItemID}.jpg'></div>`;
      build += `    <h4> Price: $${rabbitsupply.ItemPrice}</h4>`;
      build += `    </div>`;
      //flip card back
      build += `    <div class="flip-card-back">`;
      build += `     <p> Item Category: ${rabbitsupply.ItemCategory}</p>`;
      build += `    <p class="desc"> Item Description: ${rabbitsupply.ItemDescription}</p>`;
      build += `    </div>`;
      build += `  </div>`;
      build += `</div>`;
     
      ct++;
}
 result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}









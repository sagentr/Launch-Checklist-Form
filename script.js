// Write your JavaScript code here!


window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){ 
       event.preventDefault()
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let coPilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        let faultyItemsInput = document.getElementById("faultyItems");
        let pilotStatus = document.getElementById("pilotStatus")
        let fuelStatusInput = document.getElementById("fuelStatus");
        let cargoStatusInput = document.getElementById("cargoStatus");
        let copilotStatus = document.getElementById("copilotStatus")
        let launchStatusCheckInput = document.getElementById("launchStatus");
        if (pilotNameInput.value === ""|| coPilotNameInput.value === ""|| fuelLevelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required!");
        }
        else if (isNaN(pilotNameInput.value) === false || isNaN(coPilotNameInput.value) === false || isNaN(fuelLevelInput.value) === true || isNaN(fuelLevelInput.value) === true) {
           alert("Please enter valid information for each field!")
        }
        else {
           faultyItemsInput.style.visibility = "visible"
           pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
           copilotStatus.innerHTML = `Co-pilot ${coPilotNameInput.value} is ready for launch`; 
           if (fuelLevelInput.value <10000 && cargoMassInput.value <=10000)
               {
                  fuelStatusInput.innerHTML = "Fuel level is too low for launch";
                  cargoStatusInput.innerHTML = "Cargo level is low enough for launch";
                  launchStatusCheckInput.innerHTML = "Shuttle Not Ready For Launch"
                  launchStatusCheckInput.style.color = "red";
               }
               else if (fuelLevelInput.value >=10000 && cargoMassInput.value >=10000)
               {fuelStatusInput.innerHTML = "Fuel level is high enough for launch";
               cargoStatusInput.innerHTML = "Cargo level is too high for launch";
               launchStatusCheckInput.innerHTML = "Shuttle Not Ready For Launch"
               launchStatusCheckInput.style.color = "red";
               }
               else if (fuelLevelInput.value <10000 && cargoMassInput.value >10000)
               {fuelStatusInput.innerHTML = "Fuel level is too low for launch";
               cargoStatusInput.innerHTML = "Cargo level is too high for launch";
               launchStatusCheckInput.innerHTML = "Shuttle Not Ready For Launch"
               launchStatusCheckInput.style.color = "red";
               }
               else {
                  fuelStatusInput.innerHTML = "Fuel level high enough for launch";
                  cargoStatusInput.innerHTML = "Cargo level is low enough for launch";
                  launchStatusCheckInput.innerHTML = "Shuttle is ready for launch";
                  launchStatusCheckInput.style.color = "green";
               }

           }      
      });
   });



   window.addEventListener("load", function() {
      fetch("https://handlers.education.launchcode.org/static/planets.json")
      .then(response => response.json())
      .then(data => {
         console.log(data);
         let index = Math.floor(Math.random() * 10) 
         index = (index + 1) % data.length;
         console.log(index)
         const missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = 
         `<h2>Mission Destination</h2>
         <ol>
            <li>Name: ${data[index].name}</li>
            <li>Diameter: ${data[index].diameter}</li>
            <li>Star: ${data[index].star}</li>
            <li>Distance from Earth: ${data[index].distance}</li>
            <li>Number of Moons: ${data[index].moons}</li>
            </ol>
         <img src="${data[index].image}">`
      })
   });

/* 
 {
   response.json().then(function(json) {
      const destination = document.getElementById("destination");
      let index = 0;
      destination.addEventListener("click", function(){
         destination.innerHTML =
        

* This block of code shows how to format the HTML once you fetch some planetary JSON!


<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[0].name}</li>
   <li>Diameter: ${json[0].diameter}</li>
   <li>Star: ${json[0].star}</li>
   <li>Distance from Earth[0]: ${json.earth}</li>
   <li>Number of Moons: ${json[0].moons}</li>
   </ol>
<img src="${json[0].}">
*/

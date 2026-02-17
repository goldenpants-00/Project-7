let counter = 0;

function tickUp(){
    counter++;
    document.getElementById("counter").textContent = counter;
}

function tickDown(){
    counter--;
    document.getElementById("counter").textContent = counter;
}

function runForLoop(){
    let result = ""
    for(let i = 0; i <= counter; i++){
         result += i;
    }
    document.getElementById("forLoopResult").textContent = result;
}

function showOddNumbers(){
    let result = ""
    for(let i = 0; i <= counter; i++){
        if(i % 2 == 1){
            result += i;
        }
    }
    document.getElementById("oddNumberResult").textContent = result;

}

function addMultiplesToArray(){
    let array = [];
    for (let i = counter; i>= 5; i--){
        if( i % 5 === 0){
            array.push(i);
        }
    }
    console.log(array);
}

function printCarObject(){
    let typeOfCar = document.getElementById("carType").value;
    let mpg = document.getElementById("carMPG").value;
    let colorOfCar = document.getElementById("carColor").value;

    let car = {cType: typeOfCar, cMPG: mpg, cColor: colorOfCar};
    console.log(car);
}

function loadCar(carNum){
    let carChoise;

    if(carNum == 1){
        carChoise = carObject1;
    }
    if(carNum == 2){
        carChoise = carObject2;
    }
    if(carNum == 3){
        carChoise = carObject3;
    }

    document.getElementById("carType").value = carChoise.cType;
    document.getElementById("carMPG").value = carChoise.cMPG;
    document.getElementById("carColor").value = carChoise.cColor;
}

function changeColor(color){
    let p = document.getElementById("styleParagraph");

    if(color == 1){
        p.style.color = "red";
    }
    if(color == 2){
        p.style.color = "green";
    }
    if(color == 3){
        p.style.color = "blue";
    }
}
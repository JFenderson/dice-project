

document.getElementById('diceMaker').onclick = function () {
    var ok = true;

    if (ok === true) {
        var div = document.createElement('div');
        div.id = "";
        div.style.backgroundColor = "black";
        div.style.position = "absolute";
        div.style.left = "50px";
        div.style.top = "50px";

        document.getElementById('dieContainer').appendChild(div); // add it to any dom element you want
    }
};



class die {
    constructor(value){
        this.value = 6;
    }

    onclick = function createDiv () {
        const button = document.getElementById('diceMaker');
        var ok = true;

        if (ok === true) {
            var div = document.createElement('div');
            div.id = "";
            div.style.backgroundColor = "black";
            div.style.position = "absolute";
            div.style.left = "50px";
            div.style.top = "50px";

            document.getElementById('dieContainer').appendChild(div); // add it to any dom element you want
        }
    };

    roll(){
    const randomNumber = Math.floor(Math.random()* this.value) + 1;
    return randomNumber;
    }

    printNumber(number) {
        var placeholder = document.getElementById('placeholder');
        placeholder.innerHTML = number;
    }

   

    // .onclick = function () {
    //     var result = dice.roll();
    //     printNumber(result);
    // };




}


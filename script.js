    const numberInput = document.getElementById('number');
    const convertButton = document.getElementById('convert-btn');
    const output = document.getElementById('output');
    let value = Number(numberInput.value);
    const validNumber = (value)=>{
        
        if(!value){
            output.innerText = "Please enter a valid number"
            return false;
        }
        else if(value  <= -1){
            output.innerText = "Please enter a number greater than or equal to 1"
            return false;

        }else if(value >= 4000){
            output.innerHTML = "Please enter a number less than or equal to 3999"
            return false;

        }else{
            return true;
        }
    }

    const numerals = [
        ["M",1000],
        ["CM",900],
        ["D",500],
        ["CD",400],
        ["C",100],
        ["XC",90],
        ["L",50],
        ["XL",40],
        ["X",10],
        ["IX",9],
        ["V",5],
        ["IV",4],
        ["I",1]
    ]
    const toRoman = ()=>{
        let value = Number(numberInput.value);
        if(!validNumber(value)){
            return false;
        };
        let result = "";
        for(const [roman,number]  of  numerals ){
            while(number <= value ){
                result += roman;
                value -= number; 
            }
        
        }
        output.innerText = result;
    }

    numberInput.addEventListener('keydown',e=>{
        if(e.key === "Enter"){
            convertButton.click()
        }
    })


    convertButton.addEventListener('click',toRoman)
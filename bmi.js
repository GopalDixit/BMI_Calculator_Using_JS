const form = document.querySelector('form')

// submit is an predefined event
form.addEventListener('submit',function(e){
    e.preventDefault()

    const h = parseInt(document.querySelector('#height').value) // value is used for getting input from "input" keyword. it is an string
    const w = parseInt(document.querySelector('#weight').value) 

    const result = document.querySelector('#results')

    if(h === '' || h < 0 || isNaN(h)){
        result.innerHTML = "Give Valid Input"
    }
    else if(w === '' || w < 0 || isNaN(w)){
        result.innerHTML = "Give Valid Input"
    }
    else{
        const bmi = (w/((h*h)/10000)).toFixed(2)
        // show result in bmi
        result.innerHTML = bmi
        const info = document.querySelector('#information')
        if(bmi < 18.6){
            info.innerHTML = "You are an UnderWeight Category "
        }
        else if(bmi>18.6 && bmi < 24.9){
            info.innerHTML = "You are Normal Stay Healthy"
        }
        else{
            info.innerHTML = "You are overweight Please do exercise"
        }
    }

    
})
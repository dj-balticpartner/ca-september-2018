let nr_1_input = document.getElementById("nr1");
let nr_2_input = document.getElementById("nr2");
let result_text = document.getElementById("result");

function sum(){    
    var a_string = nr_1_input.value;
    var b_string = nr_2_input.value;
    
    let a_number = Number(a_string);
    let b_number = Number(b_string);

    let result = a_number + b_number;
    // console.log(result);
    result_text.innerText = result;
}

function minus(){    
    var a_string = nr_1_input.value;
    var b_string = nr_2_input.value;
    
    let a_number = Number(a_string);
    let b_number = Number(b_string);

    let result = a_number - b_number;
    // console.log(result);
    result_text.innerText = result;
}

function devide(){    
    var a_string = nr_1_input.value;
    var b_string = nr_2_input.value;
    
    let a_number = Number(a_string);
    let b_number = Number(b_string);

    let result = a_number / b_number;
    // console.log(result);
    result_text.innerText = result;
}

function mult(){
    var a_string = nr_1_input.value;
    var b_string = nr_2_input.value;
    
    let a_number = Number(a_string);
    let b_number = Number(b_string);

    let result = a_number * b_number;
    // console.log(result);
    result_text.innerText = result;
}
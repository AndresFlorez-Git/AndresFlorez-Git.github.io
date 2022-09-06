

// Buttons
let button_encript = document.querySelector("#button-encrypt");
let button_desencript = document.querySelector("#desbutton-encrypt");
let button_copy = document.querySelector("#button-copy");


// info input
let input_text = document.querySelector("#text-in");

// info output
let output_text = document.querySelector("#text-out");

// Dictionary
let dict = {"a":"ai","e":"enter", "i":"imes", "o":"ober", "u":"ufat"};


// function to encrypt the input text
function encrypt_function(){
    let text_out = "";
    if (input_text.value!=""){
        document.getElementById("texto-salida").style.display = "none";
        document.getElementById("button-copy").style.display = "initial";   
        for (let i = 0; i < input_text.value.length; i++){
            if (dict[input_text.value[i]]==undefined){
                text_out += input_text.value[i];
            } else {
                text_out += dict[input_text.value[i]];
            }
        }
    } else {
        document.getElementById("texto-salida").style.display = "initial";
        document.getElementById("button-copy").style.display = "none"; 
    }
    output_text.textContent = text_out;
    return text_out;
}

// function to desencrypt the input text
function desencrypt_function(){
    let text_out = input_text.value;
    let key_value = "";
    if (input_text.value!=""){
        document.getElementById("texto-salida").style.display = "none";
        document.getElementById("button-copy").style.display = "initial";   
        for (let i = 0; i < input_text.value.length; i++){
            if (dict[input_text.value[i]]==undefined){
                //pass
            } else {
                key_value = dict[input_text.value[i]];
                text_out = text_out.replace(key_value,input_text.value[i]);
            }
        }
    } else {
        document.getElementById("texto-salida").style.display = "initial";
        document.getElementById("button-copy").style.display = "none"; 
    }
    output_text.textContent = text_out;
    return text_out;
}

function copy_function(){
    document.querySelector("#text-out").select();
    document.execCommand('copy');
    input_text.focus();
}

button_encript.addEventListener("click", encrypt_function)
button_desencript.addEventListener("click", desencrypt_function)
button_copy.addEventListener("click", copy_function)
function textoInput(event){
    let texto = event.keyCode;
    
    if((texto > 64 && texto < 91) || (texto === 8) || (texto === 32) || (texto ===37) || (texto ===39) || (texto ===16) ||(texto ===20) || (texto ===17) || (texto ===46) || (texto ===9)){ 
        return true;
    }else{
        return false;
    }
}

function numInput(event){
    let num = event.keyCode;
    if((num > 47 && num < 58) || (num > 95 && num < 106) || (num === 107) || (num === 37) || (num === 39) || (num === 8) || (num === 17) || (num === 16) || (num === 46)){
        return true;
    }else{
        return false;
    } 
}
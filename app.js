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

(function(){
    const listElements = document.querySelectorAll('.nav__item--show');
    const list = document.querySelector('.nav__links');
    const menu = document.querySelector('.nav__icono');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{

                
                let subnav = element.children[1];
                let height = 0;
                element.classList.toggle('nav__item--active');


                if(subnav.clientHeight === 0){
                    height = subnav.scrollHeight;
                }

                subnav.style.height = `${height}px`;

            });
        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('nav__item--active');
            }

        });
    }


    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('nav__links--show'))
                list.classList.remove('nav__links--show');

        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 800){
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('nav__links--show'));

})();
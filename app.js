const callBtn = document.querySelector('#callBtn');
callBtn.addEventListener("click",openWhatsApp);

const callBtnMobile = document.querySelector('#callBtnMobile');
callBtnMobile.addEventListener("click",openWhatsApp);



function openWhatsApp() {
    const phone = '+56965948316';
    const message = 'Hola necesito ayuda';
    window.open('https://web.whatsapp.com/send?phone='+phone+'&text='+message);
}
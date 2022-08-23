window.addEventListener('load',()=>{ //agregamos un listener para que escuche cuando se carga el html
    const display= document.querySelector('.calculator-display');//buscamos el display
    const keypadButtons = document.getElementsByClassName('keypad-button'); // con esta constante buscamos los botones

    const keypadButtonsArray = Array.from(keypadButtons);//en esta constante convertimos el HTMLCollection en array

    keypadButtonsArray.forEach((button)=>{//iteramos por el array de botones
        button.addEventListener('click',()=>{//a cada boton le agregamos un listener para escuchar cada vez q el usuario le hace click
            calculadora(button,display);
        })
    })

});

function calculadora(button,display){
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;

        case '=':
            calcular(display);
            break;
    
        default:
            actualizar(display,button);
            break;
    }
}

function calcular(display){
    display.innerHTML= eval(display.innerHTML)// la palabra reservada eval , toma el string y lo resuelve y con la constante lo guardamos en el innerHTML del display
}

function actualizar(display,button){
    if(display.innerHTML == 0){
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;// es lo mismo q escribir display.innerHTML = display.innerHTML + button.innerHTML
}

function borrar(display){
    display.innerHTML = 0 ;
}

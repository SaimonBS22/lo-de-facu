let svg = document.querySelectorAll('.svg-icon');

svg[0].addEventListener('click', parrafo);
svg[1].addEventListener('click', parrafo1);
svg[2].addEventListener('click', parrafo2);



function parrafo() {
    let divVacio = document.querySelector('.icono');
    let pExistente = divVacio.querySelector('p'); 

    if (pExistente) {
        divVacio.removeChild(pExistente);
    } else {
        
        let p = document.createElement('p');
        p.classList = 'parrafoJS';


        let span = document.createElement('span');
        span.innerText = 'Lo de Facu';
        span.classList = 'span';

        let textoRestante = document.createTextNode(' es un restaurante que ha ganado popularidad por ofrecer una experiencia culinaria auténtica y relajada en un ambiente acogedor hace más de 15 años.');
        
        p.appendChild(span);
        p.appendChild(textoRestante);
        divVacio.appendChild(p);
    }
}


function parrafo1(){
    let divVacio1 = document.querySelector('.icono1');
    let pExistente1 = divVacio1.querySelector('p');

    if(pExistente1){
        divVacio1.removeChild(pExistente1);
    }else{

    let p1= document.createElement('p');
    p1.classList = 'parrafoJS';


    let span1 = document.createElement('span');
    span1.innerText = 'Lo de Facu';
    span1.classList = 'span';
    

    let textoRestante1 = document.createTextNode(' se especializa por la variedad de platos y su abundancia, brindandoles a ustedes la oportunidad de disfrutar una buena comida.');


    
    p1.appendChild(span1);
    p1.appendChild(textoRestante1);
    divVacio1.appendChild(p1);
    }
    };

function parrafo2(){
    let divVacio2 = document.querySelector('.icono2');
    let pExistente2 = divVacio2.querySelector('p');

    if(pExistente2){
        divVacio2.removeChild(pExistente2)
    }else{

    let p2= document.createElement('p');
    p2.classList = 'parrafoJS';


    let span2 = document.createElement('span');
    span2.innerText = 'Lo de Facu';
    span2.classList = 'span';

    let textoRestante2 = document.createTextNode(' nuestro servicio suele ser atento y agradable, para asi poder brindarles la mejor experiencia posible.');
   

    
    p2.appendChild(span2);
    p2.appendChild(textoRestante2);
    divVacio2.appendChild(p2);

    }
};



let flechaDerecha = document.querySelector('#flecha-derecha');
let flechaIzquierda = document.querySelector('#flecha-izquierda');
let imagenOpinion = document.querySelectorAll('.img-opiniones');
let posicionActual = 0;

flechaDerecha.addEventListener('click', pasarImagen);
flechaIzquierda.addEventListener('click', retrocederImagen);

function pasarImagen(){
        imagenOpinion[posicionActual].style.display = 'none';
        if(posicionActual >= imagenOpinion.length -1){
            posicionActual = 0;
        }else{
            posicionActual++
        }
        renderizarImagen();
}

function retrocederImagen(){
    imagenOpinion[posicionActual].style.display = 'none';
    if(posicionActual <= 0){
        posicionActual = imagenOpinion.length -1;
    }else{
        posicionActual--;
    }
    renderizarImagen();
};

function renderizarImagen(){
    imagenOpinion[posicionActual].style.display = 'block';


imagenOpinion.forEach(img => img.style.display = 'none'); 
renderizarImagen(); 



}

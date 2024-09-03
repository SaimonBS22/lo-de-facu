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
        p.style.width = '200px';
        p.style.fontWeight = 'bold';
        p.classList = 'parrafoJS';


        let span = document.createElement('span');
        span.innerText = 'Lo de Facu';
        span.style.color = 'red';
        span.style.fontWeight = 'bold';
        span.style.alignSelf = 'center';
        span.style.textDecoration = 'underline';

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
    p1.style.width = '200px';
    p1.style.fontWeight = 'bold';
    p1.classList = 'parrafoJS';


    let span1 = document.createElement('span');
    span1.innerText = 'Lo de Facu';
    span1.style.color = 'red';
    span1.style.fontWeight = 'bold';
    span1.style.alignSelf = 'center';
    span1.style.textDecoration = 'underline';

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
    p2.style.width = '200px';
    p2.style.fontWeight = 'bold';
    p2.classList = 'parrafoJS';


    let span2 = document.createElement('span');
    span2.innerText = 'Lo de Facu';
    span2.style.color = 'red';
    span2.style.fontWeight = 'bold';
    span2.style.alignSelf = 'center';
    span2.style.textDecoration = 'underline';

    let textoRestante2 = document.createTextNode(' nuestro servicio suele ser atento y agradable, para asi poder brindarles la mejor experiencia posible.');
   

    
    p2.appendChild(span2);
    p2.appendChild(textoRestante2);
    divVacio2.appendChild(p2);

    }
};
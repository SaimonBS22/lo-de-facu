let svg = document.querySelectorAll('.svg-icon');

svg[0].addEventListener('click', parrafo);
svg[1].addEventListener('click', parrafo1);
svg[2].addEventListener('click', parrafo2);


function parrafo(){
    let divVacio = document.querySelector('.icono');


    if(!divVacio.querySelector('p')){
    let p = document.createElement('p');


    let span = document.createElement('span');
    span.innerText = 'Lo de Facu';
    span.style.color = 'red';
    span.style.fontWeight = 'bold';
    span.style.alignSelf = 'center';
    span.style.textDecoration = 'underline';

    let textoRestante = document.createElement('p');
    textoRestante.innerText = 'es un restaurante que ha ganado popularidad por ofrecer una experiencia culinaria auténtica y relajada en un ambiente acogedor hace mas de 15 años.'
    textoRestante.style.width = '175px';
    textoRestante.style.fontWeight = 'bold';
    textoRestante.style.alignSelf = 'center';

    
    p.appendChild(span);
    p.appendChild(textoRestante);
    divVacio.appendChild(p);

    }
};

function parrafo1(){
    let divVacio1 = document.querySelector('.icono1');


    if(!divVacio1.querySelector('p')){
    let p1= document.createElement('p');


    let span1 = document.createElement('span');
    span1.innerText = 'Lo de Facu';
    span1.style.color = 'red';
    span1.style.fontWeight = 'bold';
    span1.style.alignSelf = 'center';
    span1.style.textDecoration = 'underline';

    let textoRestante1 = document.createElement('p');
    textoRestante1.innerText = 'nos especializamos por nuestra variedad de platos y su abundancia, brindandoles a ustedes la oportunidad de disfrutar una buena comida.'
    textoRestante1.style.width = '175px';
    textoRestante1.style.fontWeight = 'bold';
    textoRestante1.style.alignSelf = 'center';

    
    p1.appendChild(span1);
    p1.appendChild(textoRestante1);
    divVacio1.appendChild(p1);

    }
};

function parrafo2(){
    let divVacio2 = document.querySelector('.icono2');


    if(!divVacio2.querySelector('p')){
    let p2= document.createElement('p');


    let span2 = document.createElement('span');
    span2.innerText = 'Lo de Facu';
    span2.style.color = 'red';
    span2.style.fontWeight = 'bold';
    span2.style.alignSelf = 'center';
    span2.style.textDecoration = 'underline';

    let textoRestante2 = document.createElement('p');
    textoRestante2.innerText = 'Nuestro servicio suele ser atento y agradable, para asi poder brindarles la mejor experiencia posible.'
    textoRestante2.style.width = '175px';
    textoRestante2.style.fontWeight = 'bold';
    textoRestante2.style.alignSelf = 'center';

    
    p2.appendChild(span2);
    p2.appendChild(textoRestante2);
    divVacio2.appendChild(p2);

    }
};
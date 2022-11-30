function get_character(done){
    const result= fetch("https://rickandmortyapi.com/api/character");
    result.then(response =>response.json()
    .then(data =>{
        done(data)
    }))   
}
// let personaje=[]

get_character(data=>{
    console.log("hola");
    data.results.forEach(personaje => {
        console.log(personaje)  
        var estado;
        // masculino
        if(personaje.gender=="Male"){
            if(personaje.status =="Alive"){
                estado="Vivo"
            }
            else{
                if(personaje.status =="unknown"){
                    estado="Desconocido"
                }
                if(personaje.status =="Dead"){
                    estado="Muerto"
                }
            }
        }
        // femenino
        if(personaje.gender=="Female"){
            if(personaje.status =="Alive"){
                estado="Viva"
            }
            else{
                if(personaje.status =="unknown"){
                    estado="Desconocida"
                }
                if(personaje.status =="Dead"){
                    estado="Muerta"
                }
            }
        }
        
        const article= document.createRange().createContextualFragment(/*html*/`
        <article>
            <div class="image_container">
                <img src="${personaje.image}" alt="Personaje de rick and morty">
            </div>
            <h2 class="header-title-h2">${personaje.name}</h2>
            <h3 class="color-h3"> Estado= <span class="span_medium"> ${estado}</span> </h3>
        </article>
        `);
        const main=document.querySelector("main");
        main.append(article);
    });

    
})

//buscador

// const searchInput= document.querySelector("[data-search]")



// searchInput.addEventListener("input", e =>{
//     const value= e.target.value
//     console.log("search sii")
//     console.log(personaje)
//     // personajes.forEach(persona=>{
//     //     const isVisible= persona.name.includes(value) || peser
//     // })
// })
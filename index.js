function get_character(done){
    const result= fetch("https://rickandmortyapi.com/api/character");
    result.then(response =>response.json()
    .then(data =>{
        done(data)
    }))   
}

get_character(data=>{
    console.log("hola");
    data.results.forEach(personaje => {
        console.log(personaje)  
        const article= document.createRange().createContextualFragment(/*html*/`
        <article>
            <div class="image_container">
                <img src="${personaje.image}" alt="Personaje de rick and morty">
            </div>
            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
        </article>
        `);
        const main=document.querySelector("main");
        main.append(article);
    });

    
})
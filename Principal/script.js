        // mes variables


var allsections = document.querySelectorAll ("section")
var body = document.body
var mybody = document.querySelector(".mybody")
var button = document.querySelector("button")
var src;


// fonction pour supprimer la classe select à toutes mes sections

function deselect() {
    allsections.forEach(section =>{
        section.classList.remove("select")
    })
}


    // fonction pour recuperer l'id de l'élément cliqué

function getSelected() {
    var reponse

    allsections.forEach (section =>{
        if (section.classList.contains("select")) {
        reponse = section.id
        }
    })

    return reponse
}



allsections.forEach(section =>{

    // au click d'une section 
    section.addEventListener("click" , ()=>{

        getSelected() // appeler la fonction getSelected () pour avoir l'id de la section cliquée
        deselect() // appeler la fonction deselect ()

        section.classList.add ("select")

           
var id = getSelected()



        if (id){    //si un bouton est cliqué , activer mon bouton

            button.removeAttribute ("disabled")
            button.classList.remove("disabled")
        
        // en fonction de la section cliquée changer mon bg Image
        switch (id) {
            case "A":
                
            

            src = '/Principal/imgprincip/na.jpg'
            mybody.style.backgroundImage = "url("+src+")"
                
                break;

            case "B":

            src = '/Principal/imgprincip/db.jpg'
            mybody.style.backgroundImage = "url("+src+")"
                break;

            case "C":

            src = '/Principal/imgprincip/snk.jpg'
           
            mybody.style.backgroundImage = "url("+src+")"

                break;


            case "D":

            src = '/Principal/imgprincip/jjk.jpg'
            
            mybody.style.backgroundImage = "url("+src+")"
                break;    


        }



}
        

   })


    
})



button.addEventListener ('click' , ()=>{ //lorsque mon bouton est cliqué alors

    var id=getSelected() // recuperer l'id de la section cliquée et en fonction de ça , charger la page correspondante



    switch (id) {
        case "A":
                location.href="/Naruto quiz/narutoquiz.html"
            break;
        
        case "B":
            location.href="/Db quiz/dbquiz.html"
            break;

        case "C":
                location.href="/Snk quiz/snkquiz.html"
            break;

        case "D":
                location.href="/Jjk quiz/jjkquiz.html"
            break;


        
    }

        
        
})
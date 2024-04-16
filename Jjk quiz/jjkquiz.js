document.addEventListener('DOMContentLoaded', () => {
 
 
 
 
 
    // un tableau d'objet pour contenir les différentes questions
    var quizData = [

        {
            question: "Yuji itadori est le réceptacle de ... Sukuna" ,
            a: "Ryûji" , 
            b: "Reiji" ,
            c: "Rin" ,
            d: "Ryomen",
            
            correct : "d",
    
        }   ,
    
        {
            question: "Itadori développe une technique propre à lui même qui s'appelle ..." ,
            a: "Amateratsu" , 
            b: "Rayon noir" ,
            c: "Technique de l'intervalle " ,
            d: "Orbe fléautique",
            
            correct : "c",
    
        }   ,
    
        {
            question: "Quel était le nom de l'ado que Mahito a manipulé après avoir tué sa mère ?" ,
            a: "Junpei Yoshino" , 
            b: "Dave Fushiguro" ,
            c: "Toge Uzumaki" ,
            d: "Yuto Okkotsu",
            
            correct : "a",
    
        }   ,
    
        {
            question: "Comment se nomme le sceau autour de la bouche de Toge Inumaki ?" ,
            a: "Lion et tigre" , 
            b: "Loup et Chien" ,
            c: "Renard et Serpent" ,
            d: "Serpent et Crocs",
            
            correct : "d",
    
        },
    
    
    
        {
            question: "Quel personnage a quitté le clan Zenin étant plus jeune ?" ,
            a: "Megumi Fushiguro" , 
            b: "Maki Zenin" ,
            c: "Mai Zenin" ,
            d: "Jude Zenin",
            
            correct : "b",
    
        }   ,
    
        {
            question: "Comment se nommme la technique permettant d'enfermer son adversaire dans un espace personnel ?" ,
            a: "Sort d'invasion" , 
            b: "Emprisonnement fléautique" ,
            c: "Rayon noir" ,
            d: "extension du territoire",
            
            correct : "d",
    
        }   ,
    
        {
            question: "Combien de noyaux possède Panda ?" ,
            a: "1" , 
            b: "2" ,
            c: "3" ,
            d: "4",
            
            correct : "c",
    
        }   ,
    
        {
            question: "Quel est le sort héréditaire de Satoru ?" ,
            a: "Sort d'inversion" , 
            b: "Professeur" ,
            c: "Technique des dix ombres" ,
            d: "Pouvoir de l'infini",
            
            correct : "d",
    
        },
    
    
        {
            question: "Comment s'appellent les deux amis de Yuji faisant partie du club de spiritisme ?" ,
            a: "Ayame et Kohana" , 
            b: "Akiro et Fuyuko" ,
            c: "Sasaki et Iguchi" ,
            d: "Mieko et Dai",
            
            correct : "c",
    
        }   ,
    
        {
            question: "Contre qui se bat Gojo lorsqu'il enseigne l'extension du territoire à Yuji ?" ,
            a: "Sukuna" , 
            b: "Jogo" ,
            c: "Geto" ,
            d: "Mahito",
            
            correct : "b",
    
        }   ,
    
        {
            question: "Quel est le nom du grand-père de Yuji" ,
            a: "Waji" , 
            b: "Wabi" ,
            c: "Warinto" ,
            d: "Wasuke",
            
            correct : "d",
    
        }   ,
    
        {
            question: "Combien y a t'il de doigts de Sukuna au total ?" ,
            a: "10" , 
            b: "22" ,
            c: "20" ,
            d: "11",
            
            correct : "c",
    
        },
    
        {
            question: "Combien y a t'il d'épisodes dans la saison 1 de Jujutsu Kaisen ?" ,
            a: "24" , 
            b: "21" ,
            c: "20" ,
            d: "36",
            
            correct : "a",
    
        }   ,
    
        {
            question: "Comment s'apelle l'extension du territoire de Jogo ?" ,
            a: "Cerceuil volcanique" , 
            b: "Propagation de la larve" ,
            c: "Fusion magmatique" ,
            d: "Feu suprême",
            
            correct : "a",
    
        }   ,
    
        {
            question: "Comment s'apelle l'extension du territoire de Gojo ?" ,
            a: "Cerceuil Sphérique" , 
            b: "Rayon noir" ,
            c: "Fusion infini" ,
            d: "Sphère de l'Espace Infini",
            
            correct : "d",
    
        }   ,
    
        {
            question: "Quel était la profession de Nanami avant qu'il ne revienne chez les exorcistes ?" ,
            a: "Professeur" , 
            b: "Médecin" ,
            c: "Trader" ,
            d: "Developpeur",
            
            correct : "c",
    
        }   ,
    
    
        {
            question: "Comment s'appelle le directeur de l'école Tokyo Jujutsu ?" ,
            a: "Toge Inumaki" , 
            b: "Masamichi Yaga" ,
            c: "Elisee Ijichi" ,
            d: "Kiyotaka Ijichi",
            
            correct : "b",
    
        }   ,
    
        {
            question: "Qui utilise une technique nécessitant de taper des mains pour déplacer des entités ?" ,
            a: "Panda" , 
            b: "Megumi Fushiguro" ,
            c: "Aoi Todo" ,
            d: "Evan Kugisaki",
            
            correct : "c",
    
        }   ,
    
        {
            question: "Identifie l'intrus ?" ,
            a: "Clan Zenin" , 
            b: "Clan Gojo" ,
            c: "Clan Kamo" ,
            d: "Clan Itadori",
            
            correct : "d",
    
        }   ,
    
        {
            question: "Qui est l'auteur de Jujutsu Kaisen ?" ,
            a: "David Itadori" , 
            b: "Gege Akutami" ,
            c: "Makoto Yukimura" ,
            d: "Koyoharu Gotōge",
            
            correct : "b",
    
        }
    
    
    
    ]


   
   
   
   var quiz = document.querySelector("#quiz") // la div quiz
   var quota = document.querySelector (".quota")
   var answers  = document.querySelectorAll(".answer") // les inputs
   var question = document.querySelector(".quest") // la question
   
   
           // les labels
   var a_text = document.querySelector("#a_text")
   var b_text = document.querySelector("#b_text")
   var c_text = document.querySelector("#c_text")
   var d_text = document.querySelector("#d_text")
   
   var submit = document.querySelector("#submit")
   
   // var current ;
   
   var score = 0;
   var current= current = Math.floor (Math.random() *20) // pour le nombre de question
   
   
   
   let tabAleatory = [current];
   
   var image=document.querySelector(".image")
   var ia =  Math.floor (Math.random() *38)+1; // nombre d'image
   
   let tabImg = [ia];
   
   var myscore = document.querySelector(".myscore") // monscore
   var appreciate = document.querySelector(".appreciate") // appréciation de la note
   var smiley = document.querySelector(".smiley") // emoji
   
   var allNumeror = document.querySelectorAll(".numeror") // tableau contenant toutes les erreurs
   var position  = 0;
   
   var numeror=document.querySelector(".numeror") // block d'error
   var afficherror = document.querySelector(".afficherror") // div contenant les blocks d'erreurs
   
   var error=0;
   
   
   var seror = document.querySelector(".seror") // bouton see my error
   
   var restart = document.querySelector(".restart"); 
   var back = document.querySelector(".back")
   
   
   // mes sons
   var audioFinish = new Audio("../Audios/finshed.mp3")
   
   
   
   var clicked = new Audio("../Audios/clicked.mp3")
   
   
   function loadQuiz() {
   
       unselect()
   
   
       var currentQuiz = quizData[current] ;// obtenir l'indice du tableau 
   
       // à partir de l'indice , insérer les différentes questions
   
       question.textContent = currentQuiz.question ;
       a_text.textContent = currentQuiz.a ;
       b_text.textContent = currentQuiz.b ;
       c_text.textContent = currentQuiz.c ;
       d_text.textContent = currentQuiz.d ;
   
   
   
   
       //generer un nombre entre 1 et 15 pour mes images
       var src = `/Jjk quiz/jjkImages/jjkimg (${ia}).jpg`

      
    //    var src = `Narutoimages/narutoimg${ia}.jpg`  // change direction image
       image.style.backgroundImage = `url('${src}')`
   }
   
   
   loadQuiz()
   
   
       // fonction pour déselectionner tous les boutons radio
   function unselect() {
   
       answers.forEach (answers =>{
           answers.checked=false
       })
   }
   
   
   // function qui vérifie si une réponse a été sélectionner afin de récupérer son id 
   
   function getSelected() {
       var reponse
   
       answers.forEach (answers =>{
           if (answers.checked) {
           reponse = answers.id
           }
       })
   
       return reponse
   }
   
   
   
   
        
   
   
   
   
   
   
   
   
   submit.addEventListener ("click" , ()=>{
       var reponse = getSelected() // recevoir l'id de la reponse cliquée
   
       if (reponse) {  // le submit est cliqué mais on vérifie aussi si une réponse a été émise
   
           position++
           
           clicked.play()
   
           if (reponse == quizData[current].correct) { // si reponse correct , incrementer l'indice du tableau et incrementer le score
           
               score ++
   
               // audioSuccess.play()
           }
   
           else if (reponse != quizData[current].correct) { // dans le cas user coche la mauvaise reponse
   
               error++
               
               // audioFailed.play()
   
                   // à chaque fausse réponse :
   
   
               falseAnswer()
   
   
   
               
               function falseAnswer() {
                   
   
                   var newError = numeror.cloneNode(true) // cloner la div .numeror 
               newError.style.display ="block" // la rendre visible
   
               afficherror.appendChild(newError) // la mettre dans son élément parent .afficherror
   
               var thequestion = newError.querySelector(".thequestion"); // cibler la question faussée dans le clone
   
               thequestion.textContent= quizData[current].question; // recuperer la question dans l'objet et la mettre dans .thequestion
   
               var num = newError.querySelector(".num") // cibler le numéro de la question
               num.textContent=position // inserer la position de question
   
   
               var ide=document.getElementById (reponse) // cibler de nouveau l'id de l'input coché
   
               var asso= ide.labels // faire un tableau pour receuillir les labels associés à l'input coché
              
               var associateLabel=asso[0] // sélectionner le premier label rattaché (dans mon cas unique)
   
               var yourfalse = newError.querySelector(".yourfalse") // cibler la valeur du label càd la reponse fausse
   
               yourfalse.textContent=associateLabel.textContent // inserer dans reponse fausse la valeur du label
   
   
               }
   
               
             
              
   
   
   
   
   
               
               
   
   
   
   
   
           }
   
        // generer des nombres aleatoires sans repetition du nombre
   
                   do {
                           current = Math.floor (Math.random() *20)
                   } 
                   
                   
                   while (tabAleatory.includes(current));
   
                   tabAleatory.push(current)
               
   
   // cas de l'image
   
                   do {
                       ia = Math.floor (Math.random() *38)+1
               } 
               
               
               while (tabImg.includes(ia));
   
               tabImg.push(ia)
           
   
   
                   
   
   
                   if (position < 5) { // si on est pas encore à la fin des questons du tableau , continuer d'appeler loadQuiz à chaque click
                       loadQuiz()
                       // loadError()
                       
                   }
   
                   else { // quiz terminé
   
                       setTimeout (finished,900)
   
                       function finished(){
                           audioFinish.play() //jouer le son de fin
                           quiz.style.display="none" // masquer le quiz
                       quota.style.display="block" // afficher quota
                       }
                       
   
                       
   
   
                       myscore.textContent=`${score}/5` // mettre le score
   
                       if (score<=2) {
                           
                           appreciate.textContent="C'est mauvais "
                           smiley.style.backgroundImage = "url('../quizimg/sad.png')"
                       }
   
                       else if (score==3) {
                           appreciate.textContent="Pas mal "
                           smiley.style.backgroundImage = "url('../quizimg/neutral.png')"
                       }
   
                       else if (score>=4) {
                           appreciate.textContent="Félicitations "
                           smiley.style.backgroundImage = "url('../quizimg/happy.png')"
                       }
   
   
   
                   }
   
   
   
   
   
                   
                   if (error==0) {
                       afficherror.style.display="none"
                       seror.style.display="none"
                   
                   }
                   
                   else{
                       afficherror.style.display="block"
                       seror.style.display="block"
   
                       seror.addEventListener("click", ()=>{
   
                           afficherror.classList.add ("montreror")
   
   
                       })
                   }
   
   
   
   
           restart.addEventListener("click",()=>{
               location.reload()
           })
   
   
           
   
   
   
   
   
   
   
       }
   })
   
   
   
   
   
   
   
   })
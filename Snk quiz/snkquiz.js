document.addEventListener('DOMContentLoaded', () => {
 
 
 
 
 
    // un tableau d'objet pour contenir les différentes questions
    var quizData = [

        {
            question: "Quels étaient les noms des frères et soeurs de Conny ?" ,
            a: "Sonny et Martin" , 
            b: "Sunny et Martina" ,
            c: "Sonny et Martina" ,
            d: "Sunny et Martin",
            
            correct : "d",
    
        }   ,
    
        {
            question: "Comment est mort le titan souriant ?" ,
            a: "Tué par Mikasa" , 
            b: "Tué par Hannes" ,
            c: "Dévoré par les autres titans " ,
            d: "Tué par Eren sous sa forme de titan",
            
            correct : "c",
    
        }   ,
    
        {
            question: "À quel moment est utilisé un fumigène de signalisation Jaune ?" ,
            a: "Opération finie" , 
            b: "Titan répéré" ,
            c: "Ordre de retrait" ,
            d: "Un titan tué",
            
            correct : "a",
    
        }   ,
    
        {
            question: "Quel était le rêve d'Armin ?" ,
            a: "Se transformer en titan" , 
            b: "Vivre sans les titans" ,
            c: "Voyager" ,
            d: "Voir la mer",
            
            correct : "d",
    
        },
    
    
    
        {
            question: "Comment s'appellent les deux peuples ennemis dans SNK ?" ,
            a: "Paradis et Mahr" , 
            b: "Eldiens et Mahr" ,
            c: "Marley et Hizuru" ,
            d: "Hizuru et Mahr",
            
            correct : "b",
    
        }   ,
    
        {
            question: "Quel est le nom de famille de Sasha ?" ,
            a: "Braus" , 
            b: "Brown" ,
            c: "Brou" ,
            d: "Bran",
            
            correct : "a",
    
        }   ,
    
        {
            question: "Sous quel nom Eren s'infiltre à Revelio ?" ,
            a: "Rene" , 
            b: "Jearen" ,
            c: "Kruger" ,
            d: "Djeager",
            
            correct : "c",
    
        }   ,
    
        {
            question: "Quel était la profession du père d'Eren ?" ,
            a: "Inventeur" , 
            b: "Professeur" ,
            c: "Médecin" ,
            d: "Commerçant",
            
            correct : "c",
    
        },
    
    
        {
            question: "Dans quelle ville se trouve la maison d'Eren ?" ,
            a: "Yarkel" , 
            b: "Trost" ,
            c: "Krolva" ,
            d: "Shiganshina",
            
            correct : "d",
    
        }   ,
    
        {
            question: "Quel était le premier mur à ceder face aux titans ?" ,
            a: "Sina" , 
            b: "Maria" ,
            c: "Rose" ,
            d: "Ymir",
            
            correct : "b",
    
        }   ,
    
        {
            question: "Quelle partie du corps des titans faut-il sectionner pour les tuer ?" ,
            a: "Le front" , 
            b: "Les molets" ,
            c: "La machoire" ,
            d: "La nuque",
            
            correct : "d",
    
        }   ,
    
        {
            question: "Comment Hansi nomme t-elle les deux titans capturés par le bataillon d'exploration ?" ,
            a: "Joachim et Kroll" , 
            b: "Albert et Fish" ,
            c: "Jeffrey et Dahmer" ,
            d: "Sawney et Bean",
            
            correct : "d",
    
        },
    
        {
            question: "Qui commandait le bataillon d'exploration avant Erwin ?" ,
            a: "Keith" , 
            b: "Hansi" ,
            c: "Pixis" ,
            d: "Zacky",
            
            correct : "a",
    
        }   ,
    
        {
            question: "Qui succède à Erwin en tant que commandant du bataillon d'exploration ?" ,
            a: "Hansi" , 
            b: "Livai" ,
            c: "Eren" ,
            d: "Younouss",
            
            correct : "a",
    
        }   ,
    
        {
            question: "Combien y a t'il de titans primordiaux ?" ,
            a: "6" , 
            b: "7" ,
            c: "8" ,
            d: "9",
            
            correct : "d",
    
        }   ,
    
        {
            question: "Qui est Kenny pour Livai ?" ,
            a: "Son père" , 
            b: "Son frère" ,
            c: "Son oncle" ,
            d: "Son cousin",
            
            correct : "c",
    
        }   ,
    
    
        {
            question: "Qui a tué Rod Reiss ?" ,
            a: "Mikasa Ackerman" , 
            b: "Eren Yeager" ,
            c: "Armin Arlert" ,
            d: "Historia",
            
            correct : "d",
    
        }   ,
    
        {
            question: "Que réprésente le fumigène bleu ?" ,
            a: "Titan anormal" , 
            b: "Titan répéré" ,
            c: "Ordre de retraite" ,
            d: "Titan tué",
            
            correct : "c",
    
        }   ,
    
        {
            question: "Qui est l'auteur de SNK ?" ,
            a: "Jude Isayama" , 
            b: "Hajime Aganesuka" ,
            c: "Hajime Isayama" ,
            d: "Kemeto Yeager",
            
            correct : "c",
    
        }   ,
    
        {
            question: "Quel est le nom de la mère de Livai ?" ,
            a: "Kucchel" , 
            b: "Orne" ,
            c: "Samir" ,
            d: "Kanie",
            
            correct : "a",
    
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
   var ia =  Math.floor (Math.random() *54)+1; // nombre d'image
   
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
       var src = `/Snk quiz/snkImages/snkimg (${ia}).jpg`

      
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
                       ia = Math.floor (Math.random() *54)+1
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
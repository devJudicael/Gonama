document.addEventListener('DOMContentLoaded', () => {
 
 
 
 
 
    // un tableau d'objet pour contenir les différentes questions
    var quizData = [
   
       {
           question: "Par qui Son Goku est recueilli lorsqu'il arrive sur terre ?" ,
           a: "Bulma" , 
           b: "Mr satan" ,
           c: "Son Gohan" ,
           d: "Tortue Géniale",
           
           correct : "c",
   
       }   ,
   
       {
           question: "Parmi les personnages suivants , lequel est capable de se régénérer ?" ,
           a: "Broly" , 
           b: "Trunks" ,
           c: "David " ,
           d: "Piccolo",
           
           correct : "d",
   
       }   ,
   
       {
           question: "Lequel de ces cyborgs fut le premier à être absorbé par cell ?" ,
           a: "C16" , 
           b: "C17" ,
           c: "C18" ,
           d: "C19",
           
           correct : "b",
   
       }   ,
   
       {
           question: "Qui est le premier à tuer Freezer ?" ,
           a: "Trunks" , 
           b: "Goku" ,
           c: "Gohan" ,
           d: "Piccolo",
           
           correct : "a",
   
       },
   
   
   
       {
           question: "Lequel des personnages suivants fut le premier rencontré par Son Goku ?" ,
           a: "Yamcha" , 
           b: "Bulma" ,
           c: "Krilin" ,
           d: "Vegeta",
           
           correct : "b",
   
       }   ,
   
       {
           question: "Combien de fois Vegeta est il mort ?" ,
           a: "1" , 
           b: "2" ,
           c: "3" ,
           d: "4",
           
           correct : "b",
   
       }   ,
   
       {
           question: "Qui est beerus ?" ,
           a: "Un dieu kaio" , 
           b: "Un dieu de la création" ,
           c: "Un dieu de la destruction" ,
           d: "Un ange",
           
           correct : "c",
   
       }   ,
   
       {
           question: "Quelle était la cause du premier combat entre beerus et Vegeta ?" ,
           a: "Vegeta voulait mesurer sa force" , 
           b: "Pour devenir le prochain dieu de la destruction" ,
           c: "Beerus avait giflé Bulma" ,
           d: "Beerus avait mangé le dernier flan",
           
           correct : "c",
   
       },
   
   
       {
           question: "Comment s'appelle le père de Bulma ?" ,
           a: "Dr. Gero" , 
           b: "Dr. Zeno" ,
           c: "Dr. Yann" ,
           d: "Dr. Brief",
           
           correct : "d",
   
       }   ,
   
       {
           question: "Qui entraîne la technique de la fusion à Goten et Trunks ?" ,
           a: "Piccolo" , 
           b: "Vegeta" ,
           c: "Son Judi" ,
           d: "Jiraya",
           
           correct : "a",
   
       }   ,
   
       {
           question: "Identifie l'intru " ,
           a: "Vegeta" , 
           b: "Goku" ,
           c: "Alphonse" ,
           d: "Goten",
           
           correct : "c",
   
       }   ,
   
       {
           question: "Comment s'appelle le tournoi qui fait affronter tous les univers ?" ,
           a: "Tournoi de la destruction" , 
           b: "Tournoi du pouvoir" ,
           c: "Tournoi du guerier" ,
           d: "Tournoi de l'univers",
           
           correct : "b",
   
       },
   
       {
           question: "Quel numéro de cyborg porte le Dr. Gero ?" ,
           a: "C-17" , 
           b: "C-18" ,
           c: "C-19" ,
           d: "C-20",
           
           correct : "d",
   
       }   ,
   
       {
           question: "Qui est le premier à atteindre le stade de Super Saiyan 2 ?" ,
           a: "Gohan" , 
           b: "Goten" ,
           c: "Vegeta" ,
           d: "Goku",
           
           correct : "a",
   
       }   ,
   
       {
           question: "Comment s'appelle le père de Freezer ?" ,
           a: "Frost" , 
           b: "Cooler" ,
           c: "Kiwi" ,
           d: "Cold",
           
           correct : "d",
   
       }   ,
   
       {
           question: "Comment s'appelle le guerrier résultant de la fusion par Potalas de Vegeta et Goku ?" ,
           a: "Kakageta" , 
           b: "Vegeku" ,
           c: "Vegetto" ,
           d: "Gogeta",
           
           correct : "c",
   
       }   ,
   
   
       {
           question: "Comment s'appellent les sbires de Babidi envoyés pendant le tournoi d'arts martiaux" ,
           a: "Yann et Ivanovitch" , 
           b: "Gabi et Payou" ,
           c: "Yamu et Bamitch" ,
           d: "Yamu et Spopovitch",
           
           correct : "d",
   
       }   ,
   
       {
           question: "Lequel de ces Kaios s'est fait absorber par Bou ?" ,
           a: "Kaio Shin de l'Ouest" , 
           b: "Kaio Shin de l'Est" ,
           c: "Kaio Shin du Sud" ,
           d: "Kaio Shin du Centre",
           
           correct : "c",
   
       }   ,
   
       {
           question: "Qui sont les antagonistes de l'arc Trunks du futur ?" ,
           a: "Freezer et Cell" , 
           b: "Jiren et Topo" ,
           c: "Zamasu et Goku Black" ,
           d: "Babidi et Mr Satan Black",
           
           correct : "c",
   
       }   ,
   
       {
           question: "Quel est l'univers jumeau de l'univers 10 ?" ,
           a: "L'univers 4" , 
           b: "L'univers 3" ,
           c: "L'univers 2" ,
           d: "L'univers 1",
           
           correct : "b",
   
       },
   
       {
           question: "Quel est le premier univers éliminé lors du tournoi du pouvoir ?" ,
           a: "L'univers 3" , 
           b: "L'univers 9" ,
           c: "L'univers 5" ,
           d: "L'univers 2",
           
           correct : "b",
   
       }   ,
   
       {
           question: "Où Beerus rencontra Goku pour la première fois ?" ,
           a: "Sur la planète du dieu kaio" , 
           b: "À la fête d'anniversaire de Bulma" ,
           c: "Au tournoi du pouvoir" ,
           d: "Chez Piccolo",
           
           correct : "a",
   
       }   ,
   
       {
           question: "De quel univers est Goku ?" ,
           a: "Univers 5" , 
           b: "Univers 6" ,
           c: "Univers 7" ,
           d: "Univers 8",
           
           correct : "c",
   
       }   ,
   
       {
           question: "Trouve l'intru : " ,
           a: "Super Saiyen devint" , 
           b: "Super saiyen bleu" ,
           c: "Super Saiyen 3" ,
           d: "Super Saiyen Rosé",
           
           correct : "c",
   
       }   ,
   
       {
           question: "Qui est l'auteur de Dragon Ball ?" ,
           a: "Akira Kishimoto" , 
           b: "Akira  Kaneshiro" ,
           c: "Akira Toriyama" ,
           d: "Akira Koyama",
           
           correct : "c",
   
       }   ,
   
      
   
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
   var current= current = Math.floor (Math.random() *25)
   
   
   
   let tabAleatory = [current];
   
   var image=document.querySelector(".image")
   var ia =  Math.floor (Math.random() *50)+1;
   
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
   
       var src = `Dbimages/dbimg${ia}.jpg`  // change direction image
       image.style.backgroundImage = "url("+src+")"
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
                           current = Math.floor (Math.random() *25)
                   } 
                   
                   
                   while (tabAleatory.includes(current));
   
                   tabAleatory.push(current)
               
   
   // cas de l'image
   
                   do {
                       ia = Math.floor (Math.random() *50)+1
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
   
   
           back.addEventListener("click",()=>{
            location.href="/Principal/Index.html"
           })
   
   
   
   
   
   
   
       }
   })
   
   
   
   
   
   
   
   })
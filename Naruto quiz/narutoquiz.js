document.addEventListener('DOMContentLoaded', () => {
 
 
 
 
 
    // un tableau d'objet pour contenir les différentes questions
    var quizData = [

        {
            question: "Comment s'apellent les enfants de Kaguya Ôtsutsuki ?" ,
            a: "Ashura Ôtsutsuki et Hagoromo Ôtsutsuki" , 
            b: "Hamura Ôtsutsuki et Indra Ôtsutsuki" ,
            c: "Hagoromo Ôtsutsuki et Hamura Ôtsutsuki" ,
            d: "Indra Ôtsutsuki et Hagoromo Ôtsutsuki",
            
            correct : "c",
    
        }   ,
    
        {
            question: "Comment est mort Itachi Ûchiwa ?" ,
            a: "Vaincu par Sasuke Ûchiwa" , 
            b: "Pendu" ,
            c: "Suite à la possession de son corps par Orochimaru " ,
            d: "Vaincu par sa maladie",
            
            correct : "d",
    
        }   ,
    
        {
            question: "Qui a inventé la technique du rasengan ?" ,
            a: "Jiraya" , 
            b: "Minato namikaze" ,
            c: "Kakashi Hatake" ,
            d: "Naruto Uzumaki",
            
            correct : "b",
    
        }   ,
    
        {
            question: "Comment se nomme le 2eme Tsuchikage ?" ,
            a: "Mû" , 
            b: "Onoki" ,
            c: "Ishikawa" ,
            d: "Gengetsu Hôzuki",
            
            correct : "a",
    
        },
    
    
    
        {
            question: "Comment s'appelle le petit frère de Madara Ûchiwa' ?" ,
            a: "Tajima Ûchiwa" , 
            b: "Izuna Ûchiwa" ,
            c: "Obito Ûchiwa" ,
            d: "Kagami Ûchiwa",
            
            correct : "b",
    
        }   ,
    
        {
            question: "Quel est le nom du père de Hashirama Senju ?" ,
            a: "Judicael Senju" , 
            b: "Kawarama Senju" ,
            c: "Itama Senju" ,
            d: "Butsuma Senju",
            
            correct : "d",
    
        }   ,
    
        {
            question: "Que signifie Kiri ?" ,
            a: "Village caché par la brume" , 
            b: "Village du son" ,
            c: "Village de l'eau" ,
            d: "Village perdu",
            
            correct : "a",
    
        }   ,
    
        {
            question: "Comment est mort Shisui Ûchiwa ?" ,
            a: "Tué par Danzo" , 
            b: "Vaincu par sa maladie" ,
            c: "En se suicidant" ,
            d: "Tué par Itachi",
            
            correct : "c",
    
        },
    
    
        {
            question: "De quel village vient Hanzô de la salamandre ?" ,
            a: "Village d'Ame" , 
            b: "Village d'Iwa" ,
            c: "Village de la brume" ,
            d: "Village de Konoha",
            
            correct : "a",
    
        }   ,
    
        {
            question: "Quel est l'intrus ?" ,
            a: "Dojutsu" , 
            b: "Taijutsu" ,
            c: "Bamijutsu" ,
            d: "Ninjutsu",
            
            correct : "c",
    
        }   ,
    
        {
            question: "Identifie l'intru " ,
            a: "Hanabi" , 
            b: "Ethan" ,
            c: "Izashi" ,
            d: "Iroha",
            
            correct : "b",
    
        }   ,
    
        {
            question: "Quel est le prénom du père de Shino Aburame ?" ,
            a: "Shinji" , 
            b: "Shibi" ,
            c: "Donji" ,
            d: "Marcji",
            
            correct : "b",
    
        },
    
        {
            question: "Parmi ces personnages , lequel est mort en affrontant les Pain ?" ,
            a: "Kiler bee" , 
            b: "Neji Hyuga" ,
            c: "Obito Ûchiwa" ,
            d: "Jiraya",
            
            correct : "d",
    
        }   ,
    
        {
            question: "Qui a crée la techinique des milles oiseaux ?" ,
            a: "Malick Uzumaki" , 
            b: "Minato Namikaze" ,
            c: "Itachi Ûchiwa" ,
            d: "Kakashi Hatake",
            
            correct : "d",
    
        }   ,
    
        {
            question: "De quelle clan est propre la technique de l'entrelacement des ombres ?" ,
            a: "Clan Nara" , 
            b: "Clan hyuga" ,
            c: "Clan Jachi" ,
            d: "Clan Namikaze",
            
            correct : "a",
    
        }   ,
    
        {
            question: "Qui est l'auteur de Naruto ?" ,
            a: "Eloge Kishimoto" , 
            b: "Masahi Toriyama" ,
            c: "Masashi Kishimoto" ,
            d: "Haijme Isayama",
            
            correct : "c",
    
        }   ,
    
    
        {
            question: "Trouve l'intrus" ,
            a: "Byakugan" , 
            b: "Tourbillon divin du Hakke" ,
            c: "soixante quatre points du Hakke" ,
            d: "Décuplement partiel du Hakke",
            
            correct : "d",
    
        }   ,
    
        {
            question: "De quel clan est tenten ?" ,
            a: "Clan Haruno" , 
            b: "Clan Mitashi" ,
            c: "Clan Yamanaka" ,
            d: "Clan Tenji",
            
            correct : "b",
    
        }   ,
    
        {
            question: "Parmi les techniques suivantes laquelle est un Dojutsu ?" ,
            a: "Rasengan" , 
            b: "La panthère de Jade" ,
            c: "Sharingan" ,
            d: "dodgan",
            
            correct : "c",
    
        }   ,
    
        {
            question: "Parmi les personnages suivants lequel n'appartient pas au clan Otsosuki ?" ,
            a: "Elisee" , 
            b: "Kaguya" ,
            c: "Hamura" ,
            d: "Hagoromo",
            
            correct : "a",
    
        },


        {
            question: "Quel est le numéro de l'équipe composée de Naruto , Sasuke et Sakura ?" ,
            a: "3" , 
            b: "5" ,
            c: "7" ,
            d: "10",
            
            correct : "c",
    
        }   ,
    
    
        {
            question: "Parmi les personnages suivants , lequel fut le premier de sa génération à passer au rang de Chunin ?" ,
            a: "Naruto" , 
            b: "Ten Ten" ,
            c: "Lee" ,
            d: "Shikamaru",
            
            correct : "d",
    
        }   ,
    
        {
            question: "Combien de coeur à Kakuzu ?" ,
            a: "5" , 
            b: "9" ,
            c: "4" ,
            d: "2",
            
            correct : "a",
    
        }   ,
    
        {
            question: "Combien de temps dure l'entrainement de Naruto avec Jiraya ?" ,
            a: "1 an" , 
            b: "5 ans" ,
            c: "2 ans et demi" ,
            d: "2 ans",
            
            correct : "c",
    
        }   ,
    
        {
            question: "Combien y a t'il de Pain ?" ,
            a: "5" , 
            b: "6" ,
            c: "7" ,
            d: "8",
            
            correct : "c",
    
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
   var current= current = Math.floor (Math.random() *25)
   
   
   
   let tabAleatory = [current];
   
   var image=document.querySelector(".image")
   var ia =  Math.floor (Math.random() *15)+1;
   
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
   
       var src = `Narutoimages/narutoimg${ia}.jpg`  // change direction image
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
                       ia = Math.floor (Math.random() *15)+1
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
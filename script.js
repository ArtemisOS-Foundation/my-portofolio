const verifyButton = document.getElementById("verifyBtn");

const verifyScreen = document.getElementById("verifyScreen");

const loadingText = document.getElementById("loading");

const mainPage = document.getElementById("mainPage");



verifyButton.addEventListener("click", function(){


    verifyButton.style.display = "none";


    loadingText.style.display = "block";


    let messages = [

        "Initializing Nyxen16 environment...",

        "Checking human status...",

        "Loading ArtemisOS profile...",

        "Access granted."

    ];


    let index = 0;


    let interval = setInterval(()=>{


        loadingText.innerHTML = messages[index];


        index++;


        if(index >= messages.length){


            clearInterval(interval);



            setTimeout(()=>{


                verifyScreen.style.opacity = "0";


                verifyScreen.style.transition = "0.5s";



                setTimeout(()=>{


                    verifyScreen.style.display="none";


                    mainPage.style.display="block";


                },500);



            },700);


        }



    },700);



});






function showSection(section){


    const cards = document.querySelectorAll(".card");


    cards.forEach(card=>{


        if(card.id === section){


            card.classList.toggle("hidden");


        }

        else{


            card.classList.add("hidden");


        }


    });



}
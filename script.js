/* =====================================================
   BIRTHDAY ADVENTURE
   PART 3A
===================================================== */

// =======================================
// SCENES
// =======================================

const scenes = document.querySelectorAll(".scene");

const dots = document.querySelectorAll(".dot");

let currentScene = 0;

function showScene(index){

    scenes.forEach(scene=>{

        scene.classList.remove("active");

    });

    dots.forEach(dot=>{

        dot.classList.remove("active");

    });

    scenes[index].classList.add("active");

    dots[index].classList.add("active");

    currentScene=index;

}

// =======================================
// ELEMENTS
// =======================================

const startBtn=document.getElementById("startBtn");

const gift=document.getElementById("gift");

const giftMessage=document.getElementById("giftMessage");

const giftNext=document.getElementById("giftNext");

const hearts=document.getElementById("hearts");

const confetti=document.getElementById("confetti");

// =======================================
// START
// =======================================

startBtn.addEventListener("click",()=>{

    showScene(1);

});

// =======================================
// GIFT
// =======================================

let giftOpened=false;

gift.addEventListener("click",()=>{

    if(giftOpened) return;

    giftOpened=true;

    gift.classList.add("open");

    gift.innerHTML="💝";

    giftMessage.innerHTML=`

    The greatest gift

    <br><br>

    in my life...

    <br><br>

    is having you

    as my sister ❤️

    `;

    createConfetti();

    createHearts();

    giftNext.style.display="block";

});

// =======================================
// CONTINUE
// =======================================

giftNext.addEventListener("click",()=>{

    showScene(2);

});

// =======================================
// HEARTS
// =======================================

function createHearts(){

    for(let i=0;i<20;i++){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.bottom="0px";

        heart.style.animationDuration=

            (2+Math.random()*2)+"s";

        hearts.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },4000);

    }

}

// =======================================
// CONFETTI
// =======================================

function createConfetti(){

    const colors=[

        "#FFD166",

        "#EF476F",

        "#06D6A0",

        "#118AB2",

        "#FFFFFF"

    ];

    for(let i=0;i<120;i++){

        const piece=document.createElement("div");

        piece.className="confetti-piece";

        piece.style.left=Math.random()*100+"vw";

        piece.style.background=

            colors[Math.floor(

                Math.random()*colors.length

            )];

        piece.style.animationDuration=

            (2+Math.random()*2)+"s";

        piece.style.transform=

            `rotate(${Math.random()*360}deg)`;

        confetti.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },4500);

    }

}

// =======================================
// SHOOTING STAR
// =======================================

function shootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.top=

        Math.random()*250+"px";

    star.style.left="-150px";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },1600);

}

setInterval(shootingStar,7000);

// =======================================
// FLOATING TITLE
// =======================================

document.querySelector("h1")
.classList.add("float");

/* =====================================================
   BIRTHDAY ADVENTURE
   PART 3B
===================================================== */

// =======================================
// LETTER SCENE
// =======================================

const letter=document.getElementById("letter");

const letterNext=document.getElementById("letterNext");

const letterMessage=

`Dear Didi,

Thank you for every smile,
every lesson,
and every sacrifice.

You have always believed in me,
even when I doubted myself.

I hope today brings you
as much happiness
as you have given to everyone around you.

Happy Birthday ❤️

Love,
Anand`;

let typingStarted=false;

function typeLetter(){

    if(typingStarted) return;

    typingStarted=true;

    let i=0;

    letter.innerHTML="";

    const timer=setInterval(()=>{

        if(i>=letterMessage.length){

            clearInterval(timer);

            letterNext.style.display="block";

            return;

        }

        const ch=letterMessage.charAt(i);

        if(ch=="\n"){

            letter.innerHTML+="<br>";

        }else{

            letter.innerHTML+=ch;

        }

        i++;

    },35);

}

// =======================================
// START LETTER
// =======================================

const observer=new MutationObserver(()=>{

    if(currentScene===2){

        typeLetter();

    }

});

observer.observe(

document.getElementById("letterScene"),

{

attributes:true,

attributeFilter:["class"]

}

);

// =======================================
// LETTER NEXT
// =======================================

letterNext.addEventListener("click",()=>{

    showScene(3);

});

// =======================================
// CAKE
// =======================================

const cake=document.getElementById("cake");

const cakeNext=document.getElementById("cakeNext");

let cakeCut=false;

cake.addEventListener("click",()=>{

    if(cakeCut) return;

    cakeCut=true;

    cake.classList.add("cut");

    cake.innerHTML="🍰";

    createConfetti();

    createHearts();

    cakeNext.style.display="block";

});

// =======================================
// NEXT TO STAR SCENE
// =======================================

cakeNext.addEventListener("click",()=>{

    showScene(4);

});

// =======================================
// SMALL SPARKLES
// =======================================

function createSparkles(x,y){

    for(let i=0;i<15;i++){

        const s=document.createElement("div");

        s.className="sparkle";

        s.style.left=

            x+(Math.random()*80-40)+"px";

        s.style.top=

            y+(Math.random()*80-40)+"px";

        document.body.appendChild(s);

        setTimeout(()=>{

            s.remove();

        },1500);

    }

}

// =======================================
// CLICK SPARKLES
// =======================================

document.addEventListener("click",(e)=>{

    createSparkles(

        e.clientX,

        e.clientY

    );

});

/* =====================================================
   BIRTHDAY ADVENTURE
   PART 3C
===================================================== */

// =======================================
// STAR WISHES
// =======================================

const wishes=document.querySelectorAll(".wish");

const wishText=document.getElementById("wishText");

const wishNext=document.getElementById("wishNext");

const wishMessages=[

"✨ I hope every dream you have comes true.",

"🌸 May your smile always shine this brightly.",

"💖 You deserve endless happiness and success.",

"🎉 Wishing you love, laughter and good health."

];

let openedStars=0;

wishes.forEach((star,index)=>{

    star.addEventListener("click",()=>{

        if(star.classList.contains("opened")) return;

        star.classList.add("opened");

        wishText.innerHTML=wishMessages[index];

        createSparkles(

            star.getBoundingClientRect().left+30,

            star.getBoundingClientRect().top+20

        );

        openedStars++;

        if(openedStars===4){

            setTimeout(()=>{

                wishText.innerHTML=

                "🌌 Every wish has been unlocked.<br><br>The Final Surprise awaits... ❤️";

                wishNext.style.display="block";

            },600);

        }

    });

});

// =======================================
// GO TO FINAL SCENE
// =======================================

wishNext.addEventListener("click",()=>{

    showScene(5);

    startFireworks();

});

// =======================================
// FIREWORKS
// =======================================

const canvas=document.getElementById("fireworks");

const ctx=canvas.getContext("2d");

function resizeCanvas(){

    canvas.width=window.innerWidth;

    canvas.height=window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize",resizeCanvas);

const particles=[];

function launchFirework(){

    const x=Math.random()*canvas.width;

    const y=Math.random()*canvas.height*0.55+60;

    const colors=[

        "#FFD166",

        "#EF476F",

        "#06D6A0",

        "#118AB2",

        "#FFFFFF"

    ];

    const color=

    colors[Math.floor(Math.random()*colors.length)];

    for(let i=0;i<70;i++){

        particles.push({

            x:x,

            y:y,

            dx:(Math.random()-0.5)*8,

            dy:(Math.random()-0.5)*8,

            alpha:1,

            color:color

        });

    }

}

function drawFireworks(){

    ctx.clearRect(

        0,

        0,

        canvas.width,

        canvas.height

    );

    for(let i=particles.length-1;i>=0;i--){

        const p=particles[i];

        p.x+=p.dx;

        p.y+=p.dy;

        p.dy+=0.03;

        p.alpha-=0.015;

        if(p.alpha<=0){

            particles.splice(i,1);

            continue;

        }

        ctx.globalAlpha=p.alpha;

        ctx.fillStyle=p.color;

        ctx.beginPath();

        ctx.arc(

            p.x,

            p.y,

            2,

            0,

            Math.PI*2

        );

        ctx.fill();

    }

    ctx.globalAlpha=1;

    requestAnimationFrame(drawFireworks);

}

let fireworksStarted=false;

function startFireworks(){

    if(fireworksStarted) return;

    fireworksStarted=true;

    drawFireworks();

    setInterval(launchFirework,800);

}

// =======================================
// REPLAY
// =======================================

document.getElementById("restart")

.addEventListener("click",()=>{

    location.reload();

});
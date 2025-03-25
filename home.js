let menubutton = document.getElementById("menubar");
let menufunction = document.getElementById("menubox");


menubutton.addEventListener("click", function () {
    menufunction.style.display="block"
});

let closebutton = document.getElementById("close")

closebutton.addEventListener("click", function(){
    menufunction.style.display="none"
    
})


let somebutton = document.getElementById("hear")
let somecontent = document.getElementById("some")
let closebutton2 = document.getElementById("close2")

somebutton.addEventListener("click", function(){
    somecontent.style.display="block"

})
closebutton2.addEventListener("click", function(){
   
    somecontent.style.display="none"
})
// Select elements
const audio = document.querySelector("audio");
const playBtn = document.getElementById("play");
const progressBar = document.getElementById("songrange");

// Toggle Play/Pause on button click
playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playBtn.classList.remove("fa-play");
        playBtn.classList.add("fa-pause");
    } else {
        audio.pause();
        playBtn.classList.remove("fa-pause");
        playBtn.classList.add("fa-play");
    }
});

// Update progress bar as audio plays
audio.addEventListener("timeupdate", () => {
    let progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
});

// Allow user to seek by moving the slider
progressBar.addEventListener("input", () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Prevent horizontal scrolling
window.addEventListener("scroll", function () {
    if (window.scrollX !== 0) {
        window.scrollTo(0, window.scrollY);
    }
});

// Ensure body width does not exceed viewport
document.documentElement.style.overflowX = "hidden";




// second....................................................................................................

let catbutton = document.getElementById("catimg")
let catphonk = document.getElementById("catlayout")

catbutton.addEventListener("click", function(){
    catphonk.style.display="block"
})

let closebutton3 = document.getElementById("close3")
closebutton3.addEventListener("click", function(){
   
    catphonk.style.display="none"
})


const audio1 = document.getElementById("audio1");  // Corrected selector
const playBtn1 = document.getElementById("play1");
const progressBar1 = document.getElementById("songrange1");

// Toggle Play/Pause on button click
playBtn1.addEventListener("click", () => {
    if (audio1.paused) {
        audio1.play();
        playBtn1.classList.remove("fa-play");
        playBtn1.classList.add("fa-pause");
    } else {
        audio1.pause();  // Corrected 'audio' to 'audio1'
        playBtn1.classList.remove("fa-pause");
        playBtn1.classList.add("fa-play");
    }
});

// Update progress bar as audio plays
audio1.addEventListener("timeupdate", () => {
    let progress1 = (audio1.currentTime / audio1.duration) * 100;
    progressBar1.value = progress1;
});

// Allow user to seek by moving the slider
progressBar1.addEventListener("input", () => {
    audio1.currentTime = (progressBar.value / 100) * audio.duration;
});


//..................................3........................


let ghostbutton = document.getElementById("ghost");
let ghostphonk = document.getElementById("ghostlayout");
let closebutton4 = document.getElementById("close4");

if (ghostbutton && ghostphonk && closebutton4) {
    ghostbutton.addEventListener("click", function () {
        ghostphonk.style.display = "block";
    });

    closebutton4.addEventListener("click", function () {
        ghostphonk.style.display = "none";
    });
}

// Select audio elements correctly
const audio2 = document.getElementById("audio2");
const playBtn2 = document.getElementById("play2");
const progressBar2 = document.getElementById("songrange2");

// Ensure all required elements exist before adding event listeners
if (audio2 && playBtn2 && progressBar2) {
    // Toggle Play/Pause on button click
    playBtn2.addEventListener("click", () => {
        if (audio2.paused) {
            audio2.play();
            playBtn2.classList.remove("fa-play");
            playBtn2.classList.add("fa-pause");
        } else {
            audio2.pause(); // Corrected from `audio1.pause()`
            playBtn2.classList.remove("fa-pause");
            playBtn2.classList.add("fa-play");
        }
    });

    // Update progress bar as audio plays
    audio2.addEventListener("timeupdate", () => {
        let progress2 = (audio2.currentTime / audio2.duration) * 100;
        progressBar2.value = progress2;
    });

    // Allow user to seek by moving the slider
    progressBar2.addEventListener("input", () => {
        audio2.currentTime = (progressBar2.value / 100) * audio2.duration;
    });
}

//..................................4...........................

let moonbutton = document.getElementById("moonimg");
let moonphonk = document.getElementById("moonlayout");
let closebutton5 = document.getElementById("close5");

if (moonbutton && moonphonk && closebutton5) {
    moonbutton.addEventListener("click", function () {
        moonphonk.style.display = "block";
    });

    closebutton5.addEventListener("click", function () {
        moonphonk.style.display = "none";
    });
}

// Select audio elements correctly
const audio3 = document.getElementById("audio3");
const playBtn3 = document.getElementById("play3");
const progressBar3 = document.getElementById("songrange3");

// Ensure all required elements exist before adding event listeners
if (audio3 && playBtn3 && progressBar3) {
    // Toggle Play/Pause on button click
    playBtn3.addEventListener("click", () => {
        if (audio3.paused) {
            audio3.play();
            playBtn3.classList.remove("fa-play");
            playBtn3.classList.add("fa-pause");
        } else {
            audio3.pause(); // Corrected from `audio1.pause()`
            playBtn3.classList.remove("fa-pause");
            playBtn3.classList.add("fa-play");
        }
    });

    // Update progress bar as audio plays
    audio3.addEventListener("timeupdate", () => {
        let progress3 = (audio3.currentTime / audio3.duration) * 100;
        progressBar3.value = progress3;
    });

    // Allow user to seek by moving the slider
    progressBar3.addEventListener("input", () => {
        audio3.currentTime = (progressBar3.value / 100) * audio3.duration;
    });
}


//............................................5...............................................

let sukunabutton = document.getElementById("sukunaimg");
let sukunaphonk = document.getElementById("sukunalayout");
let closebutton6 = document.getElementById("close6");

if (sukunabutton && sukunaphonk && closebutton6) {
    sukunabutton.addEventListener("click", function () {
        sukunaphonk.style.display = "block";
    });

    closebutton6.addEventListener("click", function () {
        sukunaphonk.style.display = "none";
    });
}
// Select audio elements correctly
const audio4 = document.getElementById("audio4");
const playBtn4 = document.getElementById("play4");
const progressBar4 = document.getElementById("songrange4");

// Ensure all required elements exist before adding event listeners
if (audio4 && playBtn4 && progressBar4) {
    // Toggle Play/Pause on button click
    playBtn4.addEventListener("click", () => {
        if (audio4.paused) {
            audio4.play();
            playBtn4.classList.remove("fa-play");
            playBtn4.classList.add("fa-pause");
        } else {
            audio4.pause(); // Corrected from `audio1.pause()`
            playBtn4.classList.remove("fa-pause");
            playBtn4.classList.add("fa-play");
        }
    });

    // Update progress bar as audio plays
    audio4.addEventListener("timeupdate", () => {
        let progress4 = (audio4.currentTime / audio4.duration) * 100;
        progressBar4.value = progress4;
    });

    // Allow user to seek by moving the slider
    progressBar4.addEventListener("input", () => {
        audio4.currentTime = (progressBar4.value / 100) * audio4.duration;
    });
}
//.......................................6.............................

let aizenbutton = document.getElementById("aizenimg");
let aizenphonk = document.getElementById("aizenlayout");
let closebutton7 = document.getElementById("close7");

if (aizenbutton && aizenphonk && closebutton7) {
    aizenbutton.addEventListener("click", function () {
        aizenphonk.style.display = "block";
    });

    closebutton7.addEventListener("click", function () {
        aizenphonk.style.display = "none";
    });
}
// Select audio elements correctly
const audio5 = document.getElementById("audio5");
const playBtn5 = document.getElementById("play5");
const progressBar5 = document.getElementById("songrange5");

// Ensure all required elements exist before adding event listeners
if (audio5 && playBtn5 && progressBar5) {
    // Toggle Play/Pause on button click
    playBtn5.addEventListener("click", () => {
        if (audio5.paused) {
            audio5.play();
            playBtn5.classList.remove("fa-play");
            playBtn5.classList.add("fa-pause");
        } else {
            audio5.pause(); // Corrected from `audio1.pause()`
            playBtn5.classList.remove("fa-pause");
            playBtn5.classList.add("fa-play");
        }
    });

    // Update progress bar as audio plays
    audio5.addEventListener("timeupdate", () => {
        let progress5 = (audio5.currentTime / audio5.duration) * 100;
        progressBar5.value = progress5;
    });

    // Allow user to seek by moving the slider
    progressBar5.addEventListener("input", () => {
        audio5.currentTime = (progressBar5.value / 100) * audio5.duration;
    });
}
//...........................................7..................................
let ichigobutton = document.getElementById("ichigoimg");
let ichigophonk = document.getElementById("ichigolayout");
let closebutton8 = document.getElementById("close8");

if (ichigobutton && ichigophonk && closebutton8) {
    ichigobutton.addEventListener("click", function () {
        ichigophonk.style.display = "block";
    });

    closebutton8.addEventListener("click", function () {
        ichigophonk.style.display = "none";
    });
}
// Select audio elements correctly
const audio6 = document.getElementById("audio6");
const playBtn6 = document.getElementById("play6");
const progressBar6 = document.getElementById("songrange6");

// Ensure all required elements exist before adding event listeners
if (audio6 && playBtn6 && progressBar6) {
    // Toggle Play/Pause on button click
    playBtn6.addEventListener("click", () => {
        if (audio6.paused) {
            audio6.play();
            playBtn6.classList.remove("fa-play");
            playBtn6.classList.add("fa-pause");
        } else {
            audio6.pause(); // Corrected from `audio1.pause()`
            playBtn6.classList.remove("fa-pause");
            playBtn6.classList.add("fa-play");
        }
    });

    // Update progress bar as audio plays
    audio6.addEventListener("timeupdate", () => {
        let progress6 = (audio6.currentTime / audio6.duration) * 100;
        progressBar6.value = progress6;
    });

    // Allow user to seek by moving the slider
    progressBar6.addEventListener("input", () => {
        audio6.currentTime = (progressBar6.value / 100) * audio6.duration;
    });
}

//........................................................8..................................................

let bakorubutton = document.getElementById("bakoruimg");
let bakoruphonk = document.getElementById("bakorulayout");
let closebutton9 = document.getElementById("close9");

if (bakorubutton && bakoruphonk && closebutton9) {
    bakorubutton.addEventListener("click", function () {
        bakoruphonk.style.display = "block";
    });

    closebutton9.addEventListener("click", function () {
        bakoruphonk.style.display = "none";
    });
}
// Select audio elements correctly
const audio7 = document.getElementById("audio7");
const playBtn7 = document.getElementById("play7");
const progressBar7 = document.getElementById("songrange7");

// Ensure all required elements exist before adding event listeners
if (audio7 && playBtn7 && progressBar7) {
    // Toggle Play/Pause on button click
    playBtn7.addEventListener("click", () => {
        if (audio7.paused) {
            audio7.play();
            playBtn7.classList.remove("fa-play");
            playBtn7.classList.add("fa-pause");
        } else {
            audio7.pause(); // Corrected from `audio1.pause()`
            playBtn7.classList.remove("fa-pause");
            playBtn7.classList.add("fa-play");
        }
    });

    // Update progress bar as audio plays
    audio7.addEventListener("timeupdate", () => {
        let progress7 = (audio7.currentTime / audio7.duration) * 100;
        progressBar7.value = progress7;
    });

    // Allow user to seek by moving the slider
    progressBar7.addEventListener("input", () => {
        audio7.currentTime = (progressBar7.value / 100) * audio7.duration;
    });
}

//...............................9...............................................
let phonkbutton = document.getElementById("phonkimg");
let phonkphonk = document.getElementById("phonklayout");
let closebutton10 = document.getElementById("close10");

if (phonkbutton && phonkphonk && closebutton10) {
    phonkbutton.addEventListener("click", function () {
        phonkphonk.style.display = "block";
    });

    closebutton10.addEventListener("click", function () {
        phonkphonk.style.display = "none";
    });
}
// Select audio elements correctly
const audio8 = document.getElementById("audio8");
const playBtn8 = document.getElementById("play8");
const progressBar8 = document.getElementById("songrange8");

// Ensure all required elements exist before adding event listeners
if (audio8 && playBtn8 && progressBar8) {
    // Toggle Play/Pause on button click
    playBtn8.addEventListener("click", () => {
        if (audio8.paused) {
            audio8.play();
            playBtn8.classList.remove("fa-play");
            playBtn8.classList.add("fa-pause");
        } else {
            audio8.pause(); // Corrected from `audio1.pause()`
            playBtn8.classList.remove("fa-pause");
            playBtn8.classList.add("fa-play");
        }
    });

    // Update progress bar as audio plays
    audio8.addEventListener("timeupdate", () => {
        let progress8 = (audio8.currentTime / audio8.duration) * 100;
        progressBar8.value = progress8;
    });

    // Allow user to seek by moving the slider
    progressBar8.addEventListener("input", () => {
        audio8.currentTime = (progressBar8.value / 100) * audio8.duration;
    });
}
//............................................11...............................
let slayerbutton = document.getElementById("demonimg");
let slayerphonk = document.getElementById("slayerlayout");
let closebutton11 = document.getElementById("close11");

if (slayerbutton && slayerphonk && closebutton11) {
    slayerbutton.addEventListener("click", function () {
        slayerphonk.style.display = "block";
    });

    closebutton11.addEventListener("click", function () {
        slayerphonk.style.display = "none";
    });
}
// Select audio elements correctly
const audio10 = document.getElementById("audio10");
const playBtn10 = document.getElementById("play10");
const progressBar10 = document.getElementById("songrange10");

// Ensure all required elements exist before adding event listeners
if (audio10 && playBtn10 && progressBar10) {
    // Toggle Play/Pause on button click
    playBtn10.addEventListener("click", () => {
        if (audio10.paused) {
            audio10.play();
            playBtn10.classList.remove("fa-play");
            playBtn10.classList.add("fa-pause");
        } else {
            audio10.pause(); // Corrected from `audio1.pause()`
            playBtn10.classList.remove("fa-pause");
            playBtn10.classList.add("fa-play");
        }
    });

    // Update progress bar as audio plays
    audio10.addEventListener("timeupdate", () => {
        let progress10 = (audio10.currentTime / audio10.duration) * 100;
        progressBar10.value = progress10;
    });

    // Allow user to seek by moving the slider
    progressBar10.addEventListener("input", () => {
        audio10.currentTime = (progressBar10.value / 100) * audio10.duration;
    });
}



//.......................profile.................................

let profilebutton = document.getElementById("profile")
let yourprofile = document.getElementById("yourprofile")

profilebutton.addEventListener("click", function(){
    yourprofile.style.display="block"
})
let backbutton = document.getElementById("back")
backbutton.addEventListener("click", function(){
    yourprofile.style.display="none"
})

let songbutton = document.getElementById("song1")
songbutton.addEventListener("click",function(){
    somecontent.style.display="block"
})

let playlitbutton = document.getElementById("playlist")
let forplaylistlayout = document.getElementById("forplaylist")
playlitbutton.addEventListener("click", function(){
    forplaylistlayout.style.display="block"
})

let back1button = document.getElementById("back1")
back1button.addEventListener("click", function(){
    forplaylistlayout.style.display="none"
})

let helpbutton = document.getElementById("help")
let help11 = document.getElementById("help1")
helpbutton.addEventListener("click", function(){
    help11.style.display="block"
})
let back2button = document.getElementById("back2")
back2button.addEventListener("click", function(){
    help11.style.display="none"
})





/* ==========================================================
    HOLLOWMIND
    ui.js
    PART 1

    User Interface Controller
========================================================== */

"use strict";

/* ==========================================================
    DOM ELEMENTS
========================================================== */

const clickScreen =
    document.getElementById("clickScreen");

const bootScreen =
    document.getElementById("bootScreen");

const warningScreen =
    document.getElementById("warningScreen");

const terminalScreen =
    document.getElementById("terminalScreen");

const instructionScreen =
    document.getElementById("instructionScreen");

const gameScreen =
    document.getElementById("gameScreen");

const cameraScreen =
    document.getElementById("cameraScreen");

const gameOverScreen =
    document.getElementById("gameOverScreen");

const winScreen =
    document.getElementById("winScreen");

/*extra*/
let bootRunning = false;

/* ==========================================================
    BOOT SEQUENCE
========================================================== */

async function startBootSequence() {

    if (bootRunning)
        return;
    GameState.gameStarted = false; 

    bootRunning = true;

    initAudio();

    showScreen("bootScreen");

    playGlitch();

    await sleep(1200);

    await playBootText();

    await sleep(5200);

    showUnauthorizedAccess();

    bootRunning = false;

}
/* ==========================================================
    WARNING SCREEN
========================================================== */

async function showUnauthorizedAccess() {

    showScreen("warningScreen");

    playAlarm();

    jumpScare();

    await sleep(4500);

    openRecoveryTerminal();

}

/* ==========================================================
    RECOVERY TERMINAL
========================================================== */

function openRecoveryTerminal() {

    showScreen("terminalScreen");

}

/* ==========================================================
    ENTER KEY
========================================================== */

document.addEventListener("keydown", async (event) => {

    if (event.key !== "Enter")
        return;

    if (!terminalScreen.classList.contains("active"))
        return;

    playGlitch();

    jumpScare();

    await sleep(1200);

    showScreen("operatorScreen");

});

/* ==========================================================
    SHOW INSTRUCTIONS
========================================================== */

function showInstructions() {

    showScreen("instructionScreen");

}

/* ==========================================================
    OPERATOR LOGIN
========================================================== */

let operatorName = "";

let previousScreen = "";

function submitOperatorName() {

    const input = document.getElementById("operatorName");

    operatorName = input.value.trim();

    if(operatorName==="")
    {
        input.focus();
        return;
    }

    localStorage.setItem("operatorName",operatorName);

    const display = document.getElementById("operatorDisplay");

if(display){

    display.textContent = operatorName.toUpperCase();

}

    showInstructions();

}

/* ==========================================================
    HOLLOWMIND
    ui.js
    PART 2

    UI Events & Navigation
========================================================== */

"use strict";

/* ==========================================================
    BUTTONS
========================================================== */

const startMissionButton =
    document.getElementById("startMission");

const restartButton =
    document.getElementById("restartGame");

const replayButton =
    document.getElementById("replayGame");

const newOperatorGameOver =
    document.getElementById("newOperatorGameOver");

const newOperatorWin =
    document.getElementById("newOperatorWin");

const closeInstructionsButton =
    document.getElementById("closeInstructions");

const operatorInput =
    document.getElementById("operatorName");

const operatorSubmit =
    document.getElementById("operatorSubmit");

const leaderboardWin =
document.getElementById("leaderboardWin");

const leaderboardGameOver =
document.getElementById("leaderboardGameOver");

const closeLeaderboard =
document.getElementById("closeLeaderboard");

/* ==========================================================
    START GAME
========================================================== */

async function beginMission() {

    if (GameState.gameStarted)
        return;

    GameState.gameStarted = true;

    await fadeToScreen("gameScreen");

    await sleep(300);

    startLevel();

}
/* ==========================================================
    CLOSE INSTRUCTIONS
========================================================== */

if (closeInstructionsButton) {

    closeInstructionsButton.addEventListener("click", () => {

        showScreen("terminalScreen");

    });

}

/* ==========================================================
    BEGIN BUTTON
========================================================== */

if (startMissionButton) {

    startMissionButton.addEventListener("click", () => {

        beginMission();

    });

}

/* ==========================================================
    OPERATOR SUBMIT
========================================================== */

if(operatorSubmit){

    operatorSubmit.addEventListener("click",submitOperatorName);

}

if(operatorInput){

    operatorInput.addEventListener("keydown",(e)=>{

        if(e.key==="Enter"){

            submitOperatorName();

        }

    });

}

/* ==========================================================
    GAME OVER RESTART
========================================================== */

if (restartButton) {

    restartButton.addEventListener("click", () => {

    stopAllSounds();

    GameState.gameStarted = false;

    resetGame();

    beginMission();

    });

}

/* ==========================================================
    WIN REPLAY
========================================================== */

if (replayButton) {

    replayButton.addEventListener("click", () => {

    stopAllSounds();

    GameState.gameStarted = false;

    resetGame();

    beginMission();

    });

}

/* ==========================================================
    CAMERA RESTORE TRANSITION
========================================================== */

async function cameraRestoreTransition(nodeNumber) {

    showScreen("cameraScreen");

    const node =
        document.getElementById("cameraNumber");

    node.textContent =
        "NODE " + nodeNumber;

    if (typeof cameraRestoreEffect === "function") {
    await cameraRestoreEffect();
    }

    await sleep(3500);

}

/* ==========================================================
    SCREEN HELPERS
========================================================== */

function fadeToScreen(screenId){

    const container =
        document.getElementById("gameContainer");

    container.classList.add("fadeOut");

    setTimeout(()=>{

        showScreen(screenId);

        container.classList.remove("fadeOut");

        container.classList.add("fadeIn");

        setTimeout(()=>{

            container.classList.remove("fadeIn");

        },500);

    },500);

}

/* ==========================================================
    GAME OVER UI
========================================================== */

function displayGameOver() {

    fadeToScreen("gameOverScreen");

}

/* ==========================================================
    WIN UI
========================================================== */

function displayMissionComplete() {

    fadeToScreen("winScreen");

}

/* ==========================================================
    ESC KEY

    Close instructions
========================================================== */

document.addEventListener("keydown", (event) => {

    if (event.key !== "Escape")
        return;

    if (!instructionScreen.classList.contains("active"))
        return;

    showScreen("terminalScreen");

});

/* ==========================================================
    CLICK TO START
========================================================== */

clickScreen.addEventListener("click", () => {


    startBootSequence();

});

/* ==========================================================
    NEW OPERATOR
========================================================== */
/* ==========================================================
    NEW OPERATOR
========================================================== */

function newOperator(){

    stopAllSounds();

    clearInterval(GameState.timerInterval);

    resetGame();

    GameState.gameStarted = false;

    bootRunning = false;

    localStorage.removeItem("operatorName");

    document.getElementById("operatorName").value = "";

    document.getElementById("operatorDisplay").textContent = "UNKNOWN";

    showScreen("clickScreen");

}

if(newOperatorGameOver){

    newOperatorGameOver.addEventListener("click", newOperator);

}

if(newOperatorWin){

    newOperatorWin.addEventListener("click", newOperator);

}

/* ==========================================================
    UI READY
========================================================== */

console.log("UI Loaded Successfully");

function formatLeaderboardTime(seconds){

    const m = Math.floor(seconds/60);

    const s = seconds%60;

    return String(m).padStart(2,"0")+":"+
           String(s).padStart(2,"0");

}

if (leaderboardWin) {

    leaderboardWin.addEventListener("click", async () => {

        previousScreen = "winScreen";

        const leaderboardScreen =
            document.getElementById("leaderboardScreen");

        /* Reset leaderboard scroll position */
        if (leaderboardScreen) {

            leaderboardScreen.scrollTop = 0;

        }

        /* Open leaderboard */
        showScreen("leaderboardScreen");

        /* Load database entries */
        await loadLeaderboard();

        /* Make sure it stays at the top */
        if (leaderboardScreen) {

            leaderboardScreen.scrollTop = 0;

        }

    });

}


if (leaderboardGameOver) {

    leaderboardGameOver.addEventListener("click", async () => {

        previousScreen = "gameOverScreen";

        const leaderboardScreen =
            document.getElementById("leaderboardScreen");

        /* Reset leaderboard scroll position */
        if (leaderboardScreen) {

            leaderboardScreen.scrollTop = 0;

        }

        /* Open leaderboard */
        showScreen("leaderboardScreen");

        /* Load database entries */
        await loadLeaderboard();

        /* Make sure it stays at the top */
        if (leaderboardScreen) {

            leaderboardScreen.scrollTop = 0;

        }

    });

}

if(closeLeaderboard){

    closeLeaderboard.addEventListener("click",()=>{

        showScreen(previousScreen);

    });

}

/* ==========================================================
    LEADERBOARD SORTING
========================================================== */

function sortLeaderboard(leaderboard) {

    leaderboard.sort((a, b) => {

        // ==========================================
        // 1. MORE LEVELS COMPLETED = BETTER
        // ==========================================

        const levelA = Number(a.level) || 0;
        const levelB = Number(b.level) || 0;

        if (levelA !== levelB) {
            return levelB - levelA;
        }


        // ==========================================
        // 2. MORE LIVES SAVED = BETTER
        // ==========================================

        const livesA = Number(a.lives) || 0;
        const livesB = Number(b.lives) || 0;

        if (livesA !== livesB) {
            return livesB - livesA;
        }


        // ==========================================
        // 3. LESS TOTAL TIME = BETTER
        // ==========================================

        const timeA = Number(a.time) || 0;
        const timeB = Number(b.time) || 0;

        return timeA - timeB;

    });

    return leaderboard;
}


/* ==========================================================
    LOAD LEADERBOARD
========================================================== */

async function loadLeaderboard() {

    const body =
        document.getElementById("leaderboardBody");

    if (!body) return;

    body.innerHTML = `
        <tr>
            <td colspan="7">LOADING...</td>
        </tr>
    `;


    const { data, error } = await supabaseClient
        .from("leaderboard")
        .select("*")
        .order("level", { ascending: false })
        .order("lives", { ascending: false })
        .order("time", { ascending: true });


    if (error) {

        console.error(
            "Supabase leaderboard error:",
            error
        );

        body.innerHTML = `
            <tr>
                <td colspan="7">
                    DATABASE CONNECTION ERROR
                </td>
            </tr>
        `;

        return;
    }


    body.innerHTML = "";


    data.forEach((player, index) => {

        const operator =
            player.operator || "UNKNOWN";

        const level =
            Number(player.level) || 0;

        const lives =
            Number(player.lives) || 0;

        const accuracy =
            Number(player.accuracy) || 0;

        const time =
            Number(player.time) || 0;

        const status =
            player.status || "FAILED";


        body.innerHTML += `

        <tr>

            <td>${index + 1}</td>

            <td>${operator}</td>

            <td>${level}/4</td>

            <td>${lives}/12</td>

            <td>${accuracy}%</td>

            <td>${formatLeaderboardTime(time)}</td>

            <td>${status}</td>

        </tr>

        `;

    });

}

/* ==========================================================
    SAVE LEADERBOARD
========================================================== */

async function saveLeaderboard(
    status,
    lives = GameState.savedLives
) {

    /* ==========================================
        CALCULATE ACCURACY
    ========================================== */

    const totalAttempts =
        GameState.correctMatches +
        GameState.wrongMatches;


    const accuracy =
        totalAttempts === 0
            ? 100
            : Math.round(
                (GameState.correctMatches /
                totalAttempts) * 100
            );


    /* ==========================================
        CREATE PLAYER RECORD
    ========================================== */

    const playerRecord = {

        operator:
            localStorage.getItem("operatorName")
            || "UNKNOWN",

        level:
            Number(GameState.completedLevels),

        lives:
            Number(lives),

        accuracy:
            Number(accuracy),

        time:
            Number(GameState.totalPlayTime),

        status:
            status

    };


    console.log(
        "Saving leaderboard record:",
        playerRecord
    );


    /* ==========================================
        INSERT INTO SUPABASE
    ========================================== */

    const { data, error } = await supabaseClient
        .from("leaderboard")
        .insert([playerRecord])
        .select();


    if (error) {

        console.error(
            "Supabase save error:",
            error
        );

        return false;
    }


    console.log(
        "Leaderboard record saved:",
        data
    );

    return true;

}
# HOLLOWMIND
### SURVEILLANCE RECOVERY PROTOCOL

**A horror-themed memory and survival game where every mistake costs a life, every second matters, and restoring the cameras is your only way out.**

---

## About the Game

HollowMind is a browser-based horror memory game built around a surveillance recovery mission.

You enter a corrupted recovery system, register as an operator, and attempt to restore four surveillance camera nodes by matching hidden memory fragments.

What starts as a simple memory challenge gradually becomes more difficult. More cards, longer sequences, limited lives, countdown timers and unpredictable horror events keep the pressure increasing throughout the mission.

Your objective is simple: restore all four camera nodes and survive the recovery protocol.

## GAMEPLAY

### Mission Briefing

The game begins with a cinematic system boot sequence, followed by an unauthorized access warning and a recovery terminal.

Players enter an Operator ID before receiving their mission instructions.

### Memory Matching System

Each level presents a set of matching image pairs. Cards are initially revealed for a limited period. Once they flip over, players must remember their positions and match every pair.

- Correct match: Progress towards restoring the camera.
- Incorrect match: Lose one life.
- Timer reaches zero: Mission failure.
- All pairs matched: Camera node restored.

### Four Levels of Difficulty

| Level | Matching pairs | Initial reveal | Time limit |
|---|---:|---:|---:|
| Camera 01 | 3 | 6 seconds | 30 seconds |
| Camera 02 | 5 | 8 seconds | 60 seconds |
| Camera 03 | 8 | 12 seconds | 120 seconds |
| Camera 04 | 12 | 18 seconds | 120 seconds |

Players start each level with three lives.

Threat intensity increases from LOW to MODERATE, HIGH and EXTREME as the mission progresses.

## KEY FEATURES

- **Immersive Horror Interface:** CRT overlays, scanlines, glitch animations, screen flashes and a dark surveillance-themed environment.
- **Progressive Memory Challenges:** Four levels with increasing numbers of matching pairs.
- **Random Horror Events:** Unexpected whispers, breathing sounds, screen shakes and visual disturbances.
- **Atmospheric Audio:** Dedicated sound effects for card flips, correct and incorrect matches, heartbeat, alarms, whispers and mission outcomes.
- **Mission Progression:** Four surveillance camera nodes that must be restored to complete the mission.
- **Operator System:** Players register using an Operator ID, which is retained locally between visits.
- **Mission Report:** Displays operator name, total play time, lives saved, restored cameras, match accuracy and final rank.
- **Global Leaderboard:** Stores and displays player performance using Supabase.

## SCORING AND RANKING

The final mission report calculates accuracy using correct and incorrect matching attempts.

Final ranks are assigned according to total lives saved:

| Rank | Requirement |
|---|---|
| LEGEND | 12 lives saved |
| SURVIVOR | 9–11 lives saved |
| ESCAPED | 6–8 lives saved |
| CRITICAL | Below 6 lives saved |

The leaderboard prioritizes completed levels, lives saved and lower completion time.

## TECHNOLOGY STACK

| Technology | Purpose |
|---|---|
| HTML5 | Game structure and screens |
| CSS3 | Interface, animations and visual effects |
| JavaScript | Gameplay, game logic and interactions |
| Supabase | Leaderboard database |
| LocalStorage | Remembering operator identity |

The Supabase JavaScript client is loaded through CDN.

## PROJECT STRUCTURE

```text
HollowMind/
│
├── audio/
│   ├── alarm.wav
│   ├── heartbeat.mp3
│   ├── game over.mp3
│   ├── mission complete.mp3
│   └── ...other sound effects
│
├── image/
│   ├── main.png
│   ├── card back.png
│   └── img1.png - img12.png
│
├── js/
│   ├── audio.js
│   ├── effects.js
│   ├── game.js
│   ├── levels.js
│   ├── script.js
│   ├── supabase.js
│   ├── ui.js
│   └── utils.js
│
├── index.html
├── style.css
├── red_sky.mp4
└── README.md
```

## RUN LOCALLY

1. Clone the repository:

```bash
git clone https://github.com/sumitki2357b/-HollowMind-Game.git
```

2. Open the project folder in VS Code.

3. Install the Live Server extension.

4. Open `index.html` using Live Server.

5. Click anywhere on the opening screen to begin the experience.

## DATABASE CONFIGURATION

HollowMind uses Supabase for its global leaderboard.

The application expects a table named `leaderboard` containing:

- `operator`
- `level`
- `lives`
- `accuracy`
- `time`
- `status`

Configure the Supabase project URL and publishable key in `js/supabase.js`.

The database must allow the required leaderboard read and insert operations through appropriate Row Level Security policies.

Never expose a Supabase service-role key or other private credentials in frontend code.

## FUTURE IMPROVEMENTS

- Additional surveillance missions and levels.
- More complex memory mechanics.
- New enemy encounters and horror events.
- Enhanced operator statistics.
- Additional leaderboard and performance features.

## DEVELOPER

**Sumit Kumar Singh**

GitHub: https://github.com/sumitki2357b

---

*Restore the cameras. Recover the fragments. Complete the mission.*

**WELCOME TO HOLLOWMIND.**
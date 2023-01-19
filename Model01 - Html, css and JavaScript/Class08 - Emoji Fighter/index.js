let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let firstFighter = Math.floor(Math.random()*fighters.length)
    let secondFighter = Math.floor(Math.random()*fighters.length)
    stageEl.textContent = fighters[firstFighter] + " vs " + fighters[secondFighter]
})

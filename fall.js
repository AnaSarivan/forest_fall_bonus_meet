
const randomPercent = () => { return parseInt(Math.random() * 100)}
const randomTurns = () => {return parseInt(Math.random() * 5)}
const randomTime = () => {return parseInt(Math.random() * 50)}
const randomLeaf = () => {return parseInt(Math.random() * 4 + 1)}
const randomDuration = () => {return 10 + parseInt(Math.random() * 12)}
const randomEnd = () => { return parseInt(Math.random() * 100)}



const addLeaf = (number) => {
    let parent = document.querySelector(`.layer-${number}`)
    let leftPercent = randomPercent()
    let turnX = randomTurns()
    let delay = randomTime()
    let turnY = randomTurns()
    let duration = randomDuration()
    let leafEnd = randomEnd()
    let scale = 0.3 / number

    parent.innerHTML += `
        <div class="leaf leaf-${randomLeaf()} fall"
             style="
               --fall-start-s: ${scale};
               --fall-end-s: ${scale + 0.3};
               --fall-start-left: ${leftPercent}%;
               --fall-end-rx: ${turnX}turn;
               --fall-delay: ${delay}s;
               --fall-end-ry: ${turnY}turn;
               --fall-duration: ${duration}s;
               --fall-end-left: ${leafEnd}%;
             
        "></div>
    `
}

const addLeaves = () => {
    for (let i=0; i<100; i++) {
        let number = parseInt(Math.random() * 2 +1)
        addLeaf(number)
    }
}

addLeaves()


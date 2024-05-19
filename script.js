document.addEventListener('DOMContentLoaded', () => {
    // console.log('ok')


    let grid = document.getElementById('grid')
    // console.log(grid)

    let largeur = 25;
    let total = largeur * largeur


    for (let i = 0; i < total; i++) {

        let square = document.createElement('div')
        grid.appendChild(square)
        square.classList.add('square')

        square.noir = false


        square.addEventListener('pointermove', () => {
            if (square.noir) {
                square.style.backgroundColor = 'white'
                square.style.borderColor = 'blue'
            } else {
                square.style.backgroundColor = 'pink'
                square.style.borderColor = 'red'
            }
            square.noir = !square.noir
        })
    }



})
let currentColor = 'black'

window.onload = () => {

  const rows = Array.from({length: 8}, (v,k) => k+1)
  const columns = Array.from({length: 8}, (v,k) => k+1)

  for (row of rows) {
    for (column of columns) {
      document.querySelector('.grid-container').insertAdjacentHTML(
        'beforeend',
        `<div class="grid-item" data-row="${row}" data-column="${column}"></div>`
      )
    }
  }

  




  Array.from(document.getElementsByClassName('grid-item')).forEach(element =>{
    element.addEventListener('click', (e) => {
      e.target.dataset.color = currentColor

      const row = e.target.dataset.row
      const column = e.target.dataset.column
      squares = getUpLine(row, column)


      currentColor = enemyColor()


    })
  })
}


const enemyColor = () => {
  return (currentColor == 'black') ? 'white' : 'black'
}

/**
 * 
 * @param {integer} row 
 * @param {integer} column 
 * @return {array}
 */
const getUpLine = (row, column) => {
  result = []
  for (i = row - 1; i > 0; i--) {
    result.push(document.querySelector(`[data-row="${i}"][data-column="${column}"]`))
  }
  return result
}
console.log('The house always wins!')

let id = document.getElementById('idInput')
let color = document.getElementById('colorInput')

console.log(id)
console.log(color)


function setCard(){
  const card = document.getElementById(idInput.value)
  console.log(card)

  card.style.color = color.value
}


//Black Diamond
function reset(){
  document.getElementById('diamonds').style.color = 'grey'
  document.getElementById('clubs').style.color = 'grey'
  document.getElementById('hearts').style.color = 'grey'
  document.getElementById('spades').style.color = 'grey'

}
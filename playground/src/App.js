import React from 'react'
import box from './components/box'
import BoxComponent from './components/BoxComponent'

function App(props){
  const [squares, SetSquares] = React.useState(box)
const styles ={
  backgroundColor: props.darkMode ? styles.backgroundColor = 'black' : styles.backgroundColor = 'red'
}


  const squareElements =  squares.map(square =>(
    <BoxComponent on={square.on}  style={styles} key={square.id}/> 
))

  return (
    <main>
    {squareElements}
    </main> 
  )
}
export default App

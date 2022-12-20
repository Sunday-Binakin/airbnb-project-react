import React from 'react'
import box from './components/box'
import BoxComponent from './components/BoxComponent'

const App = (props) => {
  const [squares, SetSquares] = React.useState(box)

  const squareElements = squares.map(square => (
    <BoxComponent on={square.on} key={square.id} />
  ))

  return (
    <main>
      {squareElements}
      <br />
      <div>it working but.......</div>

      <BoxComponent/>
    </main>
  )
}
export default App

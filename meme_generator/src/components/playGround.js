// import React from 'react'

// const playGround = () => {
//     const thingsArray = ["Thing1", "Thing2", "Thing3", "Thing4", "Thing5"]
//     const thingsList = thingsArray.map(thing=> <p>thing</p>)
// }
// const addItem=()=>{
//     const newThingText = `Thing${thingsArray.length+1} 
//     thingsArray.push(newThingText)`
// }
//   return (
//     <div>
//         <button onClick={addItem}>Add Item</button>
//     </div>
//   )
// }

// export default playGround
// const date = new Date();
// const timeOfDay = date.getHours();


// const greeting = (name) => {
//     if (timeOfDay == 4 && timeOfDay < 12) {
//         console.log(`Good Morning ${name}`)
//     else if (timeOfDay >= 12 && timeOfDay < 17) {
//         console.log(`Good Afternoon ${name}`)
//     }
//     else if (timeOfDay >= 17 && timeOfDay < 21) {
//         console.log(`Good Evening ${name}`)
//     } else if (timeOfDay >= 21 && timeOfDay < 4) {
//         console.log(`Good Night ${name}`)
//     }

// }
// console.log(greeting('John'))

// import React,{useState} from 'react'
import React from 'react'

const PlayGround = () => {
  let [count, setCount] = React.useState(0);
  

  const add = () => {
  setCount(prevCount =>prevCount+1)
  }
  const subtract = () => {
    setCount(prevCount=>prevCount-1   ) 
  }
  return (
    <div className='counter'>
      <button className='counter--minus' onClick={subtract}>-</button>
      <div className='counter--count'>
       <h1>{count}</h1>
      </div>
      <button className='counter--plus' onClick={add}>+</button>
    </div>
  )
  // 5:53:45
  // return (
  //   <div className='state'>
  //     <h1 className='state--title'>Is State important to know</h1>
  //     <div className='state--value' onClick={handleClick}>
  //       {/* <h1>{result[0]}</h1> */}
  //     </div>
  //   </div>
  // )
}

export default PlayGround
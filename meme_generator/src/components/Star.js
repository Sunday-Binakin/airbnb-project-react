import React from 'react'

const Star = (props) => {
    let starIcon = props.isFilled  ? "../images/star-filled.png" : "../images/star.png"
  return (
    <div>
          <img src={starIcon} alt="" className='card--favorite'onClick={props.handleClick}/>

    </div>
  )
}

export default Star
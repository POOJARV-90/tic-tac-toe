import React from 'react'

const Squares = (props) => {
  return (
    <div className='Square'
    onClick={props.onClick}
    >
        <h5>{props.value}</h5>
    </div>
  )
}

export default Squares
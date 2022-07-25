import React from 'react'

const Button = ( { btnBig, bgcolor, textcolor, text, outline } ) => {
  return (
    <button className='btn' id={{ btnBig }}  style={{ fontSize: "10px", backgroundColor: bgcolor, color: textcolor, border: outline }}>{text}</button>
  )
}

export default Button
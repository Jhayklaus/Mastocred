import React from 'react'

const ButtonBig = ( { bgcolor, textcolor, text, outline, icon } ) => {
    return (
      <button className='btnBig' style={{ fontSize: "8px", backgroundColor: bgcolor, color: textcolor, border: outline }}>
        <p className='btnContext'>
        {text}
        {icon}
        </p>
      </button>
    )
  }

export default ButtonBig
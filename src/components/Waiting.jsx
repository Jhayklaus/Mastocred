import React from 'react'
import Button from './Button'
import ButtonBig from './ButtonBig'
import Form from './Form'

const Waiting = () => {
  return (
    <div className='waiting-list-wrapper'>
      <div className="form-wrapper">
        <h1>Kindly join the waiting list!</h1>
        <div className="form-container">
          <div className="waiting-ctas">
            <p>Business</p>
            <p className='active'>Individual</p>
          </div>
          <Form/>
        </div>
        <Button bgcolor='#94C146' text='Submit' textcolor='#fff' outline='none'/>
      </div>
    </div>
  )
}

export default Waiting

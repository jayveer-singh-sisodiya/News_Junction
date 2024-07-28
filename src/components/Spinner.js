import React, { Component } from 'react'
import spinner from './Spinner.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='position-absolute top-50 start-50 translate-middle   '>
        <img src={spinner} alt="Loading" />
      </div>
    )
  }
}

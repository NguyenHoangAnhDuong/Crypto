import React, { Component } from 'react'
import obj from '../asset/styleWelcome/styleWelcome.module.css'

export default class ImageWelcome extends Component {
  render() {
    return (
      <div className={`${obj.imageWelcome}`}>
        <img className={`${obj.backgroudImageWelcome}`} src="https://templates.microweber.com/crypto/userfiles/media/default/crypto-header.jpg" alt="" />
      </div>
    )
  }
}

import React, { Component } from 'react'
import obj from'../asset/styleAboutBitcoin/styleAboutBitcoin.module.css'


export default class Image extends Component {
  render() {
    return (
      <div>
        <img className={`${obj.Image_Bitcoin}`} src="https://templates.microweber.com/crypto/userfiles/media/default/andre-francois-mckenzie-tiop03zzogc-unsplash.jpg" alt="" />
      </div>
    )
  }
}

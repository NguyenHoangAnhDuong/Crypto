import React, { Component } from 'react'
import Content from './Content'
import Image from './Image'
import obj from'../asset/styleAboutBitcoin/styleAboutBitcoin.module.css'

export default class AboutBitcoin extends Component {
  render() {
    return (
      <div className={`${obj.AboutBitcoin}`}>
        <Content/>
        <Image/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import obj from '../asset/styleWelcome/styleWelcome.module.css'

export default class ContentWelcome extends Component {
  state = {
    name : 'Crypto',
    content1: 'Invest in',
    content2: 'Currencies',
    content3: 'Use modern blockchain technologies and Bitcoin to earn money.',
    buttonContent: 'Create Wallet'
  }
  render() {
    return (
      <div className={`${obj.contentWelcome}`}>
        <h2 className={`${obj.contentBiggest}`}>{this.state.content1} <span className={`${obj.nameWeb}`}>{this.state.name}</span></h2>
        <h2 className={`${obj.contentBiggest}`}>{this.state.content2}</h2>
        <p className={`${obj.introWelcome}`}>{this.state.content3} </p>
        <button className={`${obj.btnCreate}`}>{this.state.buttonContent}</button>
      </div>
    )
  }
}

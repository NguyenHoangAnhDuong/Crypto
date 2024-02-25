import React, { Component } from 'react'
import obj from '../asset/styleListObject/styleListObject.module.css'


export default class CardResult extends Component {
  render() {
    let {card} = this.props
    return (
      <div className={`${obj.cardObject}`}>
        <i className={`${card.icon} ${obj.iconCardObj}`}></i>
        <span className={`${obj.titleCard}`}>{card.number}</span>
        <span className={`${obj.contentCard}`}>{card.content}</span>
      </div>
    )
  }
}

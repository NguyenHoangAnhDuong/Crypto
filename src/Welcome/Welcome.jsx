import React, { Component } from 'react'
import ContentWelcome from './ContentWelcome'
import ImageWelcome from './ImageWelcome'
import obj from '../asset/styleWelcome/styleWelcome.module.css'

export default class Welcome extends Component {
  render() {
    return (
      <div className={`${obj.Welcome}`}>
        <ContentWelcome/>
        <ImageWelcome/>
      </div>
    )
  }
}

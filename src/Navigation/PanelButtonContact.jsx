import React, { Component } from 'react'
import obj from '../asset/styleNav/styleNavigation.module.css'

export default class PanelButtonContact extends Component {
  render() {
    return (
      <div className={`${obj.panelContact}`}>
        <button className={`${obj.buttonContact}`} >Contact us</button>
      </div>
    )
  }
}

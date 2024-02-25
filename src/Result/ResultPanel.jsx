import React, { Component } from 'react'
import obj from '../asset/styleListObject/styleListObject.module.css'
import PanelCardResult from './PanelCardResult'
import format from '../asset/styleResult/styleResult.module.css'

export default class ResultPanel extends Component {
  render() {
    return (
      <div className={`${obj.panelListObject} ${format.panelListObject}`}>
        <h1 className={`${obj.Title}`}>Our Activity and Results</h1>
        <PanelCardResult/>
      </div>
    )
  }
}

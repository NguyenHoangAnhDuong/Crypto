import React, { Component } from 'react'
import CardResult from './CardResult'
import results from './DataCardResult'
import format from '../asset/styleResult/styleResult.module.css'
export default class PanelCardResult extends Component {
  render() {
    return (
      <div  className={`${format.panelResult}`}>
        {results.map((obj) => {
          return <div key={obj.id}>
            <CardResult card={obj} />
          </div>
        })}
      </div>
    )
  }
}

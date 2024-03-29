import React, { Component } from 'react'
import PanelButtonContact from './Navigation/PanelButtonContact'
import TaskBar from './Navigation/TaskBar'
import Welcome from './Welcome/Welcome'
import AboutBitcoin from './AboutBitcoin/AboutBitcoin'
import ListObject from './ListObject/ListObject'
import ResultPanel from './Result/ResultPanel'



export default class App extends Component {
  render() {
    return (
      <div>
        <PanelButtonContact/>
        <TaskBar/>
        <Welcome/>
        <AboutBitcoin/>
        <ListObject/>
        <ResultPanel/>
      </div>
    )
  }
}


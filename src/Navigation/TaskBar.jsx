import React, { Component } from 'react'
import obj from '../asset/styleNav/styleTaskBar.module.css'

export default class TaskBar extends Component {
  
  render() {
    const items = ['Home', 'News', 'Features', 'About', 'Contact'];
    return (
      <div className={`${obj.taskBar}`}>
        <h1 className={`${obj.Logo}`}>Crypto</h1>
        <ul className={`${obj.Menu}`}>
        {items.map((item, index) => (
          <li className={`${obj.MenuItem}`} key={index}>{item}</li>
        ))}
  
        </ul>
      </div>
    )
  }
}

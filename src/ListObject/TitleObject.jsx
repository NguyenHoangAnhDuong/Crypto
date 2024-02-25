import React, { Component } from 'react'
import obj from '../asset/styleListObject/styleListObject.module.css'

export default class TitleObject extends Component {
    state = {
        title: 'Our Features',
        content_1: 'I can change any and everything in my life by simply changing myself.',
        content_2:'This puts me in the driving seat of my life and makes'
    }
  render() {
    return (
      <div>
        <h1 className={`${obj.Title}`}>{this.state.title}</h1>
        <span className={`${obj.contentOfTitle}`}>{this.state.content_1}</span>
        <p className={`${obj.contentOfTitle}`}>{this.state.content_2}</p>
      </div>
    )
  }
}

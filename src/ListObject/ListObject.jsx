import React, { Component } from 'react'
import TitleObject from './TitleObject'
import ObjectPanel from './ObjectPanel'
import obj from '../asset/styleListObject/styleListObject.module.css'

export default class ListObject extends Component {
  render() {
    return (
      <div className={`${obj.panelListObject}`}>
        <TitleObject/>
        <ObjectPanel/>
      </div>
    )
  }
}

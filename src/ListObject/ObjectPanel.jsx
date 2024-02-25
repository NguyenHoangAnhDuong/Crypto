import React, { Component } from 'react'
import dataCards from './DataObj'
import CardObject from './CardObject'
import obj from '../asset/styleListObject/styleListObject.module.css'

export default class ObjectPanel extends Component {

render() {
    return (
        <div className={`${obj.objectPanel}`}>
            {dataCards.map((obj)=>{
                return <div key={obj.id}>
                    <CardObject card={obj}/>
                </div>
            })}
        </div>
    )
}
}

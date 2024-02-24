import React, { Component } from 'react'
import obj from'../asset/styleAboutBitcoin/styleAboutBitcoin.module.css'


export default class Content extends Component {
    state = {
        title_1: 'What is ',
        title_2: 'Bitcoin',
        content_1: 'Bitcoin is an innovative payment network and a new kind of digital currency money.',
        content_2: `Bitcoin is one of the most important inventions in all of human history. 
                    For the first time ever, anyone can send or receive any amount of money with anyone else, 
                    anywhere on the planet, conveniently and without restriction. It's the dawn of a better, more free world.`,
        btn_content: 'Get Started'
    }
    render() {
        return (
            <div className={`${obj.cotentPanel}`}>
                <h2 className={`${obj.Title_1}`}>{this.state.title_1}<span className={`${obj.Title_2}`}>{this.state.title_2}</span></h2>
                <span className={`${obj.Content}`}>{this.state.content_1}</span>
                <p className={`${obj.Content}`}>{this.state.content_2}</p>
                <button className={`${obj.btnStarted}`}>{this.state.btn_content}</button>
            </div>
        )
    }
}

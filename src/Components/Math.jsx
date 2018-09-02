import React, {Component} from 'react'
import {soma} from './Functions'

export default class Math extends Component {
    soma(a,b){
        return a+b
    }
    render(){
        return(
            <h1>{this.soma(2,8)}</h1>
        )
    }
}
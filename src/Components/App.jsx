
import React, {Component} from 'react'

import BoaNoite, {BomDia, BoaTarde} from './Day.jsx'
import Saudation from './Saudation'
import Father from './Father'
import Son from './Son'


export default class App extends Component {
    render(){
        return(
            <div>
                <Father nome='Grijalba' sobrenome='Linhares'>
                    <Son nome='Nicollas' />
                    <Son nome='Nicollas' sobrenome='Carvlaho' />
                    <Son nome='Nicollas' sobrenome='Carvlaho' />
                </Father>
                <Saudation type={'bomdia'} name={'joao'} />
                <BomDia nome={'Nicollas'}/>
                <BoaTarde nome={'Julie'}/>
                <BoaNoite nome={'Julie'}/>
            </div>
        )
    }
}
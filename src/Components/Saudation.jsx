import React, {Component} from 'react'

export default class Saudation extends Component{
    constructor(props){
        super(props)
            this.state = {
                typeValue: '',
                nameValue: ''
            }
            this.changeTypeValue = this.changeTypeValue.bind(this)
    }

    changeTypeValue(event){
        this.setState({
            typeValue: event.target.value,
        })
    }

    changeNameValue(event){
        this.setState({
            nameValue: event.target.value
        })
    }
    render(){
        const {type, name} = this.props
        return(
            <div>   
                <h1>{type}{name}</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={this.state.typeValue}  
                        onChange={this.changeTypeValue}/>
                <input type="text" placeholder="Name..." value={this.state.nameValue}
                        onChange={event => this.changeNameValue(event)} />
            </div>
        )
    }
}
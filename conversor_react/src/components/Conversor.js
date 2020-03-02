import React, { Component } from 'react'
import { render } from "@testing-library/react";
import './Conversor.css'

export default class Conversor extends Component {

    constructor(props){
        super(props);

        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }
    
        this.converter = this.converter.bind(this);
    }

    converter(){

        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url= `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=2e5b02f6ac583e948ed4`

        fetch(url)
        .then(res =>{
            return res.json()
        })
        .then(json =>{
            let cotacao = json[de_para];
            let moedaB_valor = parseFloat((this.state.moedaA_valor)*cotacao).toFixed(3);
            this.setState({moedaB_valor});
            console.log(this.state.moedaB_valor);
            console.log(cotacao);
            console.log(this.state)
        })
            
    }

    render() {
        return(
            <div className="programa">
                <div className="conversor">
                    <h2>{this.props.moedaA} to {this.props.moedaB}</h2>
                    <input className="text" type="text" onChange= {(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>
                    <input className="btn" type="button" value="⇆" onClick= {this.converter}></input>
                    <h3 className="resultado">$ {this.state.moedaB_valor}</h3>
                </div>
            </div>
        )
    }
}
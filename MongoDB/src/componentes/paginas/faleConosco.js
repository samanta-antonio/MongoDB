import React, {lazy, Suspense} from 'react';
import {connect} from 'react-redux';
import {inserir} from './../../actions/mensagens';
import {passeLivre, passeNegado} from './../../actions/passe';

const Contatos = lazy(()  => import('./../contatos'))

const estados = (states) => {
    return {
        mensagens: states.mensagens,
        passe: states.passe,
    }
}

const funcoes = () => {
    return {
        inserir,
        passeLivre,
        passeNegado
    }
}

class FaleConosco extends React.Component{

    constructor(props){
        super(props);
       this.enviarMensagem =  this.enviarMensagens.bind(props);
    }

    async componentDidMount(){
        if (this.props.passe){
            const resposta = await fetch ("http://localhost:8081/pegarMensagens")
            const json = await resposta.json();
            this.props.inserir(json)
            this.props.passeNegado()
    
        }
       
    
       
       
    }
    async enviarMensagens(elemento){
        elemento.preventDefault();
        const url = "http://localhost:8081/faleConosco";
        const dado = new FormData(elemento.target);
        let json = {};
        dado.forEach((valor,chave) =>{
            json[chave] = valor;
        })
        const cabecalho = {
            method: 'POST',
            body: JSON.stringify(json),
            headers: { 
                'Content-Type': 'application/json'
            }
        };
         fetch (url,cabecalho)
         .then(document.getElementById("formulario").reset())
        .then( alert ("Mensagem Enviada"));
        
    }
    render(){
      
        return(
        <Suspense fallback={<h1> Carregando, aguarde ..</h1>}>
            <Contatos enviarMensagens={this.enviarMensagens} passeLivre={this.props.passeLivre} mensagens={this.props.mensagens}/>
        </Suspense>
        );
    }
            
        
};
export default connect (estados, funcoes())(FaleConosco)
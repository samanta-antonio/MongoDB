import React, {lazy, Suspense} from 'react';
import * as Script from './../../JavaScript/funcoes';
const MenuProdutos = lazy(() => import ('./../menuProdutos'))


  export default class Produtos extends React.Component{
      constructor(props){
          super(props);
          this.state = {
              BD: []
          }
      }
      async componentDidMount(){
        let resposta = await fetch("http://localhost:8081/produtos");
        let dados = await resposta.json();
        this.setState({BD: dados});
    }

      render(){
          return(
          <div className="container-fluid text-white bg-secondary">
          <header>
          <div className = "container-fluid text-white bg-secondary text-warning">
           <h2>Produtos</h2>
           <hr/>
          </div>
          </header>
          
        <Suspense fallback = {<h1> Anunakis!</h1>}>
          <MenuProdutos/>
        </Suspense>
          
          
          {this.state.BD && this.state.BD.map((item, id)=>
            
            <div className="box_produtos" id={item['categoria']}>
            <img className="Imagens" src={require('./../../' + item['imagens']).default} alt=""/>
            <br/>
            <p className="descricao">{item['descricao']}</p>
            <hr/>
            <p className="descricao">de  <strike> {parseInt(item['preco_antigo']).toLocaleString('pt-br',{style:'currency', currency: 'BRL'})} </strike>  por </p><br/>
            <p className="precos">   <strong>{parseInt(item['preco_promo']).toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}</strong> à vista</p><br/>
            <input type="button" onClick={() => Script.comprar()} value="Comprar"/>
            </div>
            
          )}
               
                
          </div>
            
            
                
          );
      }
      
  }
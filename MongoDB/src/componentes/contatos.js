export default function contato (props){
    return (
        <div className = "container-fluid text-dark bg-secondary">
            <h2>Contato</h2>
            <hr/>
            <center>
            
            <br/><br/>
            
            <h2>Atendimento via e-mail</h2>
            <p>Entre em contato conosco através de nosso formulário. O preenchimento é muito prático e lhe responderemos rapidamente! </p>
            <br/>
        
            <div id="area">
            <form id="formulario" autoComplete="off" onSubmit = {props.enviarMensagens}>
                <fieldset/>
                <h4>Nome completo: </h4>
                <input type="text" name="nome" style={{width: "400px"}}/>
                <h4>E-mail:</h4>
                <input type="text" name="email" style={{width: "400px"}}/>
                <h4>Mensagem: </h4>
                <textarea name="msg" style={{width: "400px"}}></textarea>
                <input type="submit" value="Enviar" onClick = {props.passeLivre}/>
            </form>

            <div className= "container-fluid">
                    <div className="row">
                        <div className="col">
                            <h3>Comentários de nossos clientes:</h3>
                                 <div  className=  "list-group">
                                {props.mensagens.slice(0).reverse().map((msg, index) =>{
                                   if(index < 3){
                                       return (
                                        <div key = {index} className = "list-group-item text-primary">
                                        <h5>{msg.nome_cliente}</h5>
                                        <p>{msg.msg}</p>
                                        </div>
                                       )
                                   }
                                 } )}

                                </div>
                        </div>
                
                    </div>
                 
            </div> 
           
            </div>
            </center>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>   
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>  
            <br/><br/><br/><br/><br/><br/><br/><br/><br/> 
            
            
             <hr/>
            </div>
          
    );
}
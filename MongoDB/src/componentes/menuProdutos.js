import * as Script from './../JavaScript/funcoes';

export default function menuProduto (){
    return (
        <div className = "container-fluid text-white">
        <section className="categorias bg-secondary">
         <div className="categorias">
             <h3 style={{color:"black"}}><b>Categorias</b></h3>
             <ul>
                <li onClick={Script.exibir_todos}>Todos(12)</li>
                  <li onClick={() => Script.exibir_categoria('monoculos')}>Monóculos(2)</li>
                  <li onClick={() => Script.exibir_categoria('binoculos')}>Binóculos(2)</li>
                  <li onClick={() => Script.exibir_categoria('lunetas')}>Lunetas(1)</li>
                  <li onClick={() => Script.exibir_categoria('refletores')}>Telescópios Refletores(2)</li>
                  <li onClick={() => Script.exibir_categoria('refratores')}>Telescópios Refrator(1)</li>
                  <li onClick={() => Script.exibir_categoria('acessorios')}>Acessorios(4)</li>
              </ul>
        </div>
        </section>
        </div> 
    )
}
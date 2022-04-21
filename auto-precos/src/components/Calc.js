import styles from './calc.module.css'

const Calc = ({text}) => {
    function calcular(){ /* aqui eu vou fazer uma calculadora, primeiro seleciono cada item  */  
        let custo = document.getElementById('Preço de Custo')
        let comissão = document.getElementById('Comissão')
        let imposto = document.getElementById('imposto')
        let margem = document.getElementsByName('Margem de lucro')[0]
        let frete = document.getElementById('frete')
        let embalagem = document.getElementById('embalagem')
       
        /*Aqui eu transformo os valores que eu peguei em numeros inteiros */
        let custoInt = Number(custo.value)
        let comiInt = Number(comissão.value)
        let margemInt = Number(margem.value)
        let impostoInt = Number(imposto.value)
        let freteInt = Number(frete.value)
        let embalagemInt = Number(embalagem.value) 
        let res = document.getElementById('res')
        /* aqui eu tranformo alguns valores em % dividindo eles por 100 */
        let comiP = comiInt / 100 /*Comissão*/        
        let margP = margemInt / 100 /*margem de lucro*/
        let impP = impostoInt /100 /*imposto*/
        /* e aqui eu mostro o total*/
        let tot = custoInt + (custoInt * comiP) + freteInt + embalagemInt + (impP * custoInt)
        res.innerHTML = tot.toFixed(2)

    }
    return ( 
        <div >
            <h1> Calculadora do {text}</h1>
            <form className={styles.content}>
            <label forhtml='Preço de Custo'> Preço de Custo </label>
            <input type='Number' name='Preço de Custo'  id='Preço de Custo' placeholder="Insira o preço de Custo" />
            <label forhtml='Comissão'> Comissão (apenas coloque o numero sem o %) </label>
            <input type='Number' name='Comissão' id='Comissão' placeholder="Insira a comissão do Mercado Livre" />
            <label forhtml='Margem de lucro'> Margem de lucro (apenas coloque o numero sem o %)</label>
            <input type='Number' name='Margem de lucro' placeholder="Insira a margem de lucro" />
            <label forhtml='frete'> Frete</label>
            <input type='Number' name='frete' id='frete' placeholder="Insira o frete" />
            <label forhtml='Embalagem'> Embalagem </label>
            <input type='Number' name='Embalagem' id='embalagem' placeholder="Valor da embalagem" />
            <label forhtml='Imposto'> Imposto </label>
            <input type='Number' name='Imposto'  id='imposto' placeholder="Valor do imposto" />
            </form>
            <button type='submit' onClick={() => calcular()} value ='calcular'> Calcular</button>
            <h2>Valor de venda: <span id='res'>0</span></h2>
        </div>
     );
}
 
export default Calc;
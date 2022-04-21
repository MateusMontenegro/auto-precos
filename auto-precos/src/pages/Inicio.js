import styles from './inicio.module.css'
import mercadolivre from '../imagens/ML.png'
import magalu from '../imagens/Magalu.png'
import via from '../imagens/Via.png'

const Inicio = () => {
    return ( 
        <div className={styles.content}>
        <h1>Automatização de Preços</h1>
        <h2> Como funciona?</h2>
        <p>Calculadora para calcular preços de vendas, é levado em consideração a comissão cobrada por cada marketplace, as despezas (frete/embalagem) e a margem de lucro   </p> 
        <div >
            <ul className={styles.mkts}>
                <li><a href='http://localhost:3000/mercadolivre'><img src={mercadolivre}/></a></li>
                <li><a href='http://localhost:3000/magalu'><img src={magalu}/></a></li>
                <li> <a href='http://localhost:3000/via'><img src={via}/></a></li>
            </ul>
        </div>
        </div>
      

     );
}
 
export default Inicio;

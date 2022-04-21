import styles from './inicio.module.css'

const Inicio = () => {
    return ( 
        <div className={styles.content}>
        <h1>Automatização de Preços</h1>
        <h2> Como funciona?</h2>
        <p> é usada a seguinte formula: Preço*(preço*margem de lucro)+despezas*imposto*(preço*comissão</p> 
        </div>
     );
}
 
export default Inicio;

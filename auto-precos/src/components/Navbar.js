import {Link} from  'react-router-dom'
import Container from './Container';
import styles from './navbar.module.css'

const NavBar = () => {
    return ( 
        <nav className={styles.nav}>
        <Container>
           <ul>
                <li ><Link to='/'>Inicio</Link></li>
                <li><Link to='/mercadolivre'>Mercado Livre</Link></li>
                <li><Link to='/magalu'>Magalu</Link></li>
                <li><Link to='via'>Via Varejo</Link></li>
            </ul>
        </Container>
        </nav>
    );
}
export default NavBar;
import styles from './Navbar.module.css'
import {Link} from 'react-router-dom'
import logo from '../../img/costs_logo.png'
import Container from './Container';

function Navbar(){
    return(
    //     <nav>
    //     <div className={styles.menubtn}>
    //         <i class="fa fa-bars fa-2x" onclick="menuShow()"></i>
    //     </div>

    //     <ul>
    //         <li className='li active' > 
    //             <Link className='link active ' to="/" > Home </Link>
    //           </li>
    //         <li>
    //         <Link className='link' to="/newproject" >Projetos</Link>
    //           </li>
    //           <li> 
    //         <Link className='link' to="/company" >Empresa</Link>
    //            </li>
    //         <li>     
    //         <Link className='link' to="/contact" >Contato</Link>
    //            </li>
               
    //     </ul>
    // </nav>


      <nav>
      <Link className=' logo' to="/" > <img src={logo} alt="Costs" /> </Link>
      <ul> 
           <li className='li active' > 
             <Link className='link active ' to="/" > Home </Link>
               </li>
             <li>
             <Link className='link' to="/project" >Projetos</Link>
               </li>
               <li> 
             <Link className='link' to="/company" >Empresa</Link>
                </li>
             <li>     
             <Link className='link' to="/contact" >Contato</Link>
                </li>
           
               
        </ul>
      </nav>
    )
}

export default Navbar;
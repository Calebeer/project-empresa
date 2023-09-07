import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton';


function Home(){
    return(
        <div  className={styles.containerhome} >
            <h1 className={styles.frase} >Bem-vindo ao <a className={styles.palavra} >Costs</a> </h1>
            <p className={styles.subtitulo} >Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar projeto"/>
            <img className={styles.imagem} src={savings} alt="Savings" />
        </div>
        
    )
}

export default Home;
import { CgTrash } from 'react-icons/cg';
import styles from '../project/ProjectCard.module.css'

function ServiceCard({id, name, cost, description, handleRemove}){
    
    const remove = (e)=>{
        e.preventDefault()
        handleRemove(id,cost)
        console.log('teste');
    }   
    
    return(
        <div className={styles.project_card} >
            <h4>{name}</h4>
            <p>Valor do serviço: R${cost}</p>
            <p>Descrição: {description}</p>
            <button onClick={remove}  >
                    <CgTrash/> Excluir
            </button>
        </div>
    )
}

export default ServiceCard;
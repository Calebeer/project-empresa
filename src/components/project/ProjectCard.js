import LinkButton from '../layout/LinkButton';
import styles from './ProjectCard.module.css'
import {AiFillEdit } from 'react-icons/ai';
import { CgTrash } from 'react-icons/cg'
import { Link } from 'react-router-dom'



function ProjectCard({id, name, budget, category, handleRemove}){ 

    const remove = (e)=>{
        e.preventDefault()
        handleRemove(id)
        console.log('asdsa');
    }   


    
    return(
        <div className={styles.project_card} >
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className={styles.category_text} >
                <span className={`${styles[category]}`} ></span> {category}
            </p>

            <div className={styles.project_card_actions} >
            {/* <LinkButton to="/"  text={ <AiFillEdit/>  }  /> */}
            <Link to={`/project/${id}`}>
                <AiFillEdit/> editar
            </Link>
                <button onClick={remove}  >
                    <CgTrash/> excluir
                </button>
            </div>
        </div>
    )
}

export default ProjectCard;
import styles from '../project/ProjectCard.module.css'

function ServiceCard({id, name, cost, description, handleRemove}){
    return(
        <div className={styles.project_card} >
            <h4>{name}</h4>
            <p>Valor do serviço: R${cost}</p>
            <p>Descrição: {description}</p>
            {/* <h4>{name}</h4>
            <h4>{cost}</h4>
            <h4>{description}</h4>
            <h4>{handleRemove}</h4> */}
        </div>
    )
}

export default ServiceCard;
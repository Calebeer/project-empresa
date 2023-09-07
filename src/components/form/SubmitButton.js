import styles from './SubmitButton.module.css'

function SubmitButton({text}){
    return(
        <div className={styles.btn} >
           <button  > <p>{text}</p> </button>
        </div>
    )
}

export default SubmitButton;
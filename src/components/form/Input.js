import styles from './Input.module.css'

function Input({type, text, name, placeholder, handleOnChange, value}){
    return(
        <div className={styles.form_control} >
            <label htmlFor={name} >{text}:</label>
            <input 
            placeholder={placeholder} 
            id={name}
            type={type}
            value={value}
            name={name}
            onChange={handleOnChange}
             />
        </div>
    )
}

export default Input;
import styles from './NotProject.module.css'
import img_sad from '../../img/SADNESS_Fullbody_Render.webp'



function NotProject() {
    return (
      <div className={styles.not_project} >

        <h1>Você não tem nenhum projeto!</h1>
        <img src={img_sad} alt='carinha triste' ></img>

      </div>
    )
  }
  

export default NotProject;
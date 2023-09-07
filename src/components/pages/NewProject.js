import Footer from "../layout/Footer";
import styles from './NewProjects.module.css'
import ProjectForm from "../project/ProjectForm";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function NewProject(){
    
    const navigate = useNavigate();

    function creatPost(project){
        
    //initialize const and services
    project.cost = 0
    project.services = []
    
    fetch("http://localhost:5000/projects",{
        method:"POST",
        headers:{
            'Content-type': 'application/json',
        },
        //Aqui eu uso o Json.stringfy para encaminhar as informações para o project
        body:JSON.stringify(project)
    })
    .then((resp) => resp.json())
    .then((data) =>{
        console.log(data);
        navigate('/project', {state: {message:'Projeto criado com sucesso!'}})
    })
    .catch((err)=> console.log(err))

    }  
    
    return(
        <div className={styles.newproject_container} >
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p> 
            <p>Formulário</p>
            <ProjectForm handleSubmit={creatPost} btnText="Criar Projeto" /> 
        </div>
        
    )   
}

export default NewProject;
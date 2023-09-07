import styles from './Projects.module.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {useState, useEffect} from 'react'
import Loading from '../layout/Loading';
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton';
import Teste from '../layout/Teste';
import ProjectForm from '../project/ProjectForm';
import Message from '../layout/Message';
import ServiceForm from '../service/ServiceForm';
import {parse, v4 as uuidv4} from 'uuid'
import ServiceCard from '../service/ServiceCard'
import ProjectCard from '../project/ProjectCard';


function Projects(){
    
    const navigate = useNavigate();

    const {id} = useParams()

    const [project, setProject]= useState([])
    const [services, setServices]= useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(()=>{
        fetch(`http://localhost:5000/projects/${id}`,{
            method:'GET',
            headers:{
                'Content-type': 'application/json'
            },
        })
        .then(resp => resp.json())
        .then((data) =>{
            setProject(data)
            console.log(data);
        })
        .catch((err) =>console.log(err))
        
    },[id])


    function createService(project){
        const lastService = project.services[project.services.length-1]  

        lastService.id =  uuidv4()

        const lastServiceCost = lastService.cost;
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        if(newCost > parseFloat(project.budget)){
            setMessage('Orçamento ultrapassado, verifique o valor do serviço')
            setType('error')
            project.services.pop()
            return false
        }
        //add service cost to project total cost
        project.cost =  newCost

        //update project
        fetch(`http://localhost:5000/projects/${project.id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(project)
        }).then((resp) => resp.json() )
        .then((data)=>{
            setProject(data)
            setServices(data.services)
            console.log(services);
        })
        .catch(err => console.log(err ))
    }

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
        console.log(showProjectForm);
    }

    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }

    function removeService(){

    }

    function editPost(project){
        setMessage('')


        if(project.budget < project.cost) {
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }
        


        fetch(`http://localhost:5000/projects/${project.id}`,{
            method:'PATCH',
            headers:{
                'Content-type': 'application/json'
            },
            body:JSON.stringify(project), 
        })
        .then(resp => resp.json())
        .then((data) =>{
            setProject(data) 
            setShowProjectForm(false)
            setMessage('Projeto atualizado!')
            setType('success')
        })
        .catch((err) =>console.log(err))
    }


    return(<>
    
       {project.name ?
       <div className={styles.project_details} >
        <Container customClass="column">
            {message && <Message type={type} msg={message} /> }
           <div  className={styles.details_container} >
            <h1>Projeto: {project.name}</h1>
            <button onClick={toggleProjectForm} className={styles.botao}  >
                {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                </button>
                {!showProjectForm ? (
                    <div className={styles.project_info}>
                        <p>
                            <span>Categoria: </span>{project.category.name}
                        </p>
                        <p>
                            <span>Total de orçamento: </span>{project.budget}
                        </p>
                        <p>
                            <span>Total utilizado: </span>R${project.cost}
                        </p>
                        
                    </div>
 
                ) : ( 
                    <div className={styles.project_info}>
                        <ProjectForm handleSubmit={editPost} btnText={'Concluir edição'} projectData={project} />
                    </div>
                )}
                </div>
                <div className={styles.service_form_container}>
                    <h2>Adicione um serviço:</h2>
                    <button  onClick={toggleServiceForm} className={styles.botao}  >
                    {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
                    </button>
                    <div className={styles.project_info} >
                          {showServiceForm &&(
                            <ServiceForm 
                            handleSubmit={createService}
                            btnText={'Enviar '}
                            projectData={project}
                            />
                          )
                          } 
                    </div>
                </div> 
                <h2>Serviços</h2>
            
                    {project.services.length > 0 && 
                    project.services.map((service)=>(
                        <ServiceCard
                        id={service.id}
                        name={service.name}
                        cost={service.cost}
                        description={service.descricao}
                        key={service.id}
                        handleRemove={removeService}
                        />
                    )
                        
                    )}
                    {project.services.length === 0 && <p>Não há serviços cadastrados.</p>}

        </Container>
       </div>
       :(
        <Loading/>
       )}
    </>)
}

export default Projects;
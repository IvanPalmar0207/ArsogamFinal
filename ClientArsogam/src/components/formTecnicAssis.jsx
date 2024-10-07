//Styles
import './style/formTecnic.css'
//UseForm
import { useForm } from 'react-hook-form'
//MaterialIU
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Swal from 'sweetalert2'
//Form Method
import { postTecnicAssistance } from '../api/sendEmail';

function FormTecnicAssis(){

    const {register, handleSubmit, formState : {errors}} = useForm()

    const refreshPage = () => {    
        window.location.reload()   
    }

    const onSubmitForm = handleSubmit((data) => {
        const validData = {
            ...data
        }        
        
        postTecnicAssistance(validData)        
        refreshPage()    

    })

    return(
        <div className='containerForm'>
            <h2>
                Dejanos tus datos
                <br />
                y nosotros te contactaremos
            </h2>            

            <form className='formTecnic' onSubmit={onSubmitForm}>
                <label htmlFor="fullName">Nombres y Apellidos:</label>
                <br />
                <input type="text" autoFocus
                    {...register("fullName",{required : true, minLength : 5})}
                />                            

                {
                    errors.fullName && <Alert severity="error">El nombre completo debe de tener más de 8 caracteres</Alert>
                }   

                <br />

                <label htmlFor="phoneUser">Celular:</label>
                <br />
                <input type="text" 
                {...register("phoneUser",{required : true, minLength : 10, maxLength : 10})}
                />

                {
                    errors.phoneUser && <Alert severity="error">El número de telefono debe de tener 10 digitos</Alert>
                }

                <br />

                <label htmlFor="emailUser">Correo:</label>
                <br />
                <input type="text" 
                {...register("emailUser", {
                    required : true, 
                    pattern : {
                        value : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message : 'Por favor ingresa un correo electronico correcto'
                    }
                })}
                />
                
                {
                    errors.emailUser && <Alert severity="error">{errors.emailUser.message}</Alert>
                }

                <br />

                <label htmlFor="requestUser">Solicitud:</label>
                <br />
                <textarea rows={3}
                 {...register("requestUser", {required : true, minLength : 20},)}></textarea>
                 {
                    errors.requestUser && <Alert severity="error">La solicitud debe de tener almenos 20 caracteres</Alert>
                 }

                <div className='containerButtonSubmit'>
                    <Button type='submit' variant="contained">Enviar</Button>
                </div>

            </form>
        </div>
    )
}

export default FormTecnicAssis
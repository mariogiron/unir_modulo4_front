import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import classes from './styles/Form.module.css';

const Form = () => {

    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.createdAt = new Date();
        console.log(data);
        fetch('http://localhost:3000/api/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(json => {
                if (!json.error) {
                    alert('Se ha insertado el nuevo Post');
                    navigate('/');
                }
            });
    }

    return <>
        <h1>Formulario</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.form_group}>
                <label>Título</label>
                <input {...register('title')} />
            </div>
            <div className={classes.form_group}>
                <label>Descripción</label>
                <textarea {...register('body')}></textarea>
            </div>
            <div className={classes.form_group}>
                <label>Autor</label>
                <input {...register('author')} />
            </div>
            <div className={classes.form_group}>
                <label>Category</label>
                <select {...register('category')}>
                    <option value="naturaleza">Naturaleza</option>
                    <option value="aventura">Aventura</option>
                    <option value="tecnologia">Tecnología</option>
                    <option value="ingenieria">Ingeniería</option>
                </select>
            </div>
            <input type="submit" />
        </form>
    </>;
}

export default Form;
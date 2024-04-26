import React from "react";
import { getCountries, postForm} from '../../redux/actions';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import validate from "./Validate";
import './Create.css'

function Create(){
    const allCountries = useSelector((state)=>state.allCountries);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formulario, setFormulario] = useState({
        name: '',
        difficulty: '',
        duration:'',
        season:'',
        country:[]
      });

    const [errors, setErrors] = useState({});
    const [disable, setDisable] = useState(true);
    

      const handleChange = (event) => {

        const { name, value, type, checked } = event.target;
          if (type === 'checkbox') {
            
            if (checked) {
              setFormulario({
                ...formulario,
                [name]: [...formulario[name], value],
              });
            } else {
              setFormulario({
                ...formulario,
                [name]: formulario[name].filter((country) => country !== value),
              });
            }
          } else {
          
            setFormulario({ ...formulario, [name]: value });
          }

          if(formulario.country.length > 0){
            setDisable(false);
          }

         setErrors(validate(formulario))
      };
    
      const handleSubmit = (event) => {
        
        event.preventDefault();
        const aux = {name: "futbol",difficulty: 1, duration: 1, season: "summer", country: ["KEN","ARG"]}
        alert("actividad creada con exito");
        dispatch(postForm(formulario));
        navigate('/Home');
      };

      useEffect(()=>{
        dispatch(getCountries());
      },[]);

      
    return(

        <div>

            <form className="formStyles" onSubmit={handleSubmit}>
                <div className="container">
                <label>
                    Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={formulario.name}
                        onChange={handleChange}
                        placeholder="Ingrese nombre de la Actividad"
                    />
                    {errors.nombre1 && <p>{errors.nombre1}</p>}
                    {errors.nombre2 && <p>{errors.nombre2}</p>}
                
                <br />
                <label>
                    Difficulty:
                    <input
                        name="difficulty"
                        value={formulario.difficulty}
                        onChange={handleChange}
                        placeholder="Ingrese un numero del 1 al 5"
                        
                    />
                    {errors.difficulty1 && <p>{errors.difficulty1}</p>}
                    {errors.difficulty2 && <p>{errors.difficulty2}</p>}
                </label>
                <br />
                <label>
                    Duration:
                    <input
                        name="duration"
                        value={formulario.duration}
                        onChange={handleChange}
                        placeholder="Ingrese las horas de duracion"
                    />
                  {errors.duration1 && <p>{errors.duration1}</p>}
                  {errors.duration2 && <p>{errors.duration2}</p>}

                </label>
                <br />
                <div>
                <label> Season:  </label>
                <select name= 'season'  onChange={handleChange}>
                    <option value=''hidden></option>
                    <option value='summer'>Summer</option>
                    <option value='autumn'>Autumn</option>
                    <option value='winter'>Winter</option>
                    <option value='spring'>Spring</option>
                    
                </select>

                {errors.season1 && <p>{errors.season1}</p>}
                {errors.season2 && <p>{errors.season2}</p>}
          
        </div>
                </div>

                <fieldset className="fieldsetStyles">
                    <legend>Selecionar Paises:</legend>
                    <div style={{ overflowY: 'scroll', maxHeight: '200px', display: 'flex', flexDirection: 'column' }}>
                        { allCountries.map((elemento, index)=>{
                            return(
                                <div key= {elemento.name}>
                                <input 
                                    className="checkboxContainer" 
                                    type="checkbox"  
                                    id={index} 
                                    value={elemento.id}
                                    name= 'country' 
                                    onChange={handleChange}
                                    checked={formulario.country.includes(elemento.id)}
                                />
                                <label>{elemento.name}</label>
                                </div>
                            )
                        })}
                    </div>
                </fieldset>

                {errors.country && <p>{errors.country}</p>}
                {errors.country && <p>{errors.country}</p>}
                
                <br />
                <button className="rounded bg-sky-700 w-full text-white px-4 py-2" type="submit" disabled={disable}> Enviar </button>
            </form>
        </div>
    )
}

export default Create;
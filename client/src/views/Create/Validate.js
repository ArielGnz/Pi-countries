
const validate = (data) => {
    let errors = {};

    if(!data.name){
        errors.nombre1 = 'Campo Obligatorio';
    } else if(data.name.length > 20){
        errors.nombre2 = 'Nombre muy largo';
    }

    if(!data.difficulty){
        errors.difficulty1 = 'Campo Obligatorio';
    } else if(isNaN(data.difficulty) || data.difficulty < 1 || data.difficulty > 5){
        errors.difficulty2 = 'Debe ser un numero del 1 al 5';
    }

    if(!data.duration){
        errors.duration1 = 'Campo Obligatorio'
    } else if(isNaN(data.duration) || data.duration < 1 || data.duration > 24){
        errors.duration2 = 'Debe ser un numero entre 1 y 24';
    }

    if(!data.season){
        errors.season1 = 'Campo Obligatorio';
    }

    if(!data.country || data.country.length === 0){
        errors.selectCountry = 'Debe seleccionar al menos un Pais'
    }

    return errors;

}

export default validate;
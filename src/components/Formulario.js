import React, {Fragment, useState} from "react";

const Formulario = () => {

    // crear state de Citas

    const[cita,actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha:'',
        hora:'',
        sintomas:''
    })
    const[ error, actualizarError] = useState(false);

    // función que se ejecuta cada vez que el usuario escribe en el input
    const actualizarState= e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }
    const { mascota, propietario, fecha, hora, sintomas} = cita;

    // Cuando el usuario presione "agregar cita"
    const submitCita = e => {
        e.preventDefault();

        // validar
        if(mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === "" ){
            actualizarError(true);
            return;
        }
        
        // asignar un ID


        // crear una cita


        // reinciar el form


    }

    return(
        <Fragment>
            <h2>Crear Cita</h2>
                {error ? <p className="alerta-error">Todos los campos son requeridos</p> : null }
            <form
                onSubmit={submitCita}
            >
                <label>Nombre de la Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState} //o handleChange
                    value={mascota}
                />
                <label>Dueño de la Mascota</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño de la Mascota"
                    onChange={actualizarState} //o handleChange
                    value={propietario}
                />
                <label>fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState} //o handleChange
                    value={fecha}
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState} //o handleChange
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarState} //o handleChange
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;
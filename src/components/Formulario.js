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

    // función que se ejecuta cada vez que el usuario escribe en el input
    const actualizarState= () => {
        console.log('escribiendo...');
    }

    return(
        <Fragment>
            <h2>Crear Cita</h2>

            <form>
                <label>Nombre de la Mascota</label>
                <input 
                    type="text"
                    name="Mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState} //o handleChange
                />
                <label>Dueño de la Mascota</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño de la Mascota"
                    onChange={actualizarState} //o handleChange
                />
                <label>fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState} //o handleChange
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState} //o handleChange
                />
                <label>Síntomas</label>
                <textarea
                    name="sintomas"
                    className="u-full-width"
                    onChange={actualizarState} //o handleChange
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
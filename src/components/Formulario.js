import React, {Fragment} from "react";

const Formulario = () => {
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
                />
                <label>Dueño de la Mascota</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del dueño de la Mascota"
                />
                <label>fecha</label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                />
                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                />
                <label>Síntomas</label>
                <textarea
                    name="hora"
                    className="u-full-width"
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
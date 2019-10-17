import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Formulario extends Component {

    // Refs
    categoriaRef = React.createRef(); 
    
    obtenerCategoria= (e) => {
        e.preventDefault();

        this.props.consulta(this.categoriaRef.current.value)
    } 

    render() { 
        return ( 

            <div className="row">
                <form onSubmit={this.obtenerCategoria}>
                    <div className="input-field col s12 m6 offset-m2">
                        <select ref={this.categoriaRef} id="select">
                            <option value={""} disabled>Seleccione una categoria de noticias</option>
                            <option value={"general"}>Interés General</option>
                            <option value={"entertainment"}>Entretenimiento</option>
                            <option value={"business"}>Negocios</option>
                            <option value={"science"}>Ciencia</option>
                            <option value={"technology"}>Tecnologia</option>
                            <option value={"health"}>Salud</option>
                            <option value={"sports"}>Deportes</option>
                        </select>
                        <label>Categorias</label>
                    </div>
                    <div className="input-field col s12 m2">
                        <button type="submit" className="waves-effect btn block" value="buscar">Buscar</button>
                    </div>
                </form>
            </div>
         );
    }
}

Formulario.propTypes = {
    consulta: PropTypes.func.isRequired
}
 
export default Formulario;
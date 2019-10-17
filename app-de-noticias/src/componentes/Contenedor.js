import React, { Component } from 'react'
import Titulo from './Titulo'
import Formulario from './Formulario'
import Noticias from './Noticias'
import PropTypes from 'prop-types'

class Contenedor extends Component {
  
    render() { 
        return ( 
            <div className="card contenedor">
                <div className="card-title">
                    <Titulo
                        titulo_categoria="Categoria de noticias"
                    />
                </div>
                <div className="card-body">
                    <Formulario
                        consulta={this.props.consultarNoticias}
                    />
                    <Noticias
                        datos={this.props.noticias} 
                    />
                   
                </div>
            </div>
         );
    }
}

Contenedor.propTypes = {
    consultarNoticias: PropTypes.func.isRequired
}

 
export default Contenedor;
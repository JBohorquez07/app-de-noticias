import React, {Component} from 'react'
import Header from './componentes/Header'
import Contenedor from './componentes/Contenedor'

class App extends Component {

    state = {
        noticias: []
    }

    componentDidMount(){
        this.consultarNoticias();
    }

    consultarNoticias = (categoria='general') => {
        console.log(categoria)
       
        let url = `https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=7b1d1646e0ff42f6b30cc830e8f0a77d`
        
        fetch(url)
            .then( respuesta => {
                return respuesta.json()
            })
            .then(noticias => {
            this.setState({
                noticias: noticias.articles
            })
            })
    }

    render(){
        return(
            <div className="full-width">
                <Header
                    titulo="Noticias"
                />
                <div className="container">
                    <Contenedor
                        noticias={this.state.noticias}
                        consultarNoticias={this.consultarNoticias}
                    />
                </div>
            </div>
        )
    }
}

export default App;

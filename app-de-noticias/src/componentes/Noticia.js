import React from 'react';
import moment from 'moment'
import PropTypes from 'prop-types';


const Noticia = (props) => {

    const {urlToImage, title, description, author, publishedAt, url, source } = props.noticia


    return (
        
        <div className="col s12 m6 l4 noticia">
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage} alt=""/>
                    <span className={source.name}></span>
                </div>
                <div className="card-content">
                    <h5 className="card-title">{title}</h5>
                    <p className="descripcion">{description}</p>
                    <br/>
                    <span>{author}- {moment(publishedAt).format("ll")}</span>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank"rel='noreferrer noopener' className="waves-effect waves-block btn">Ver noticia completa</a>
                </div>
            </div>
        </div>
    );
};

Noticia.propTypes = {
    noticia: PropTypes.shape({
        urlToImage: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        author: PropTypes.string,
        publishedAt: PropTypes.string,
        url: PropTypes.string,
        source: PropTypes.object

    })
}

export default Noticia;


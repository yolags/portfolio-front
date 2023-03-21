import React from 'react';
import axios from 'axios';
import '../assets/styles/proyectos.css'
import Menu from './menu';

class Proyectos extends React.Component {
    state = {
        proyectos: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/apiproject/')
        .then(response => {
            this.setState({ proyectos: response.data });
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        return ( 
        <section>
          <Menu />
          <div>
            <h1 className='title'>Mis proyectos</h1>
            <p className='content'>Esta lista está por crecer...</p>
          </div>  
          <div className='container-items'>
            {this.state.proyectos.map(proyecto => (
              <div className='item' key={proyecto.id}>
                <figure>
                  <img src={proyecto.imagen} alt={proyecto.nombre} />
					      </figure>
                <div className='info-project'>
                  <h2 className='project-name'>{proyecto.nombre}</h2>
                  <p className='date'>{proyecto.fecha}</p>
                  <p className='description'>{proyecto.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </section> 
        );
    }
}

export default Proyectos
import React from 'react';
import '../App.css';
import '../assets/styles/home.css';
import Menu from './menu';
import Footer from './footer';
import { Icon } from '@iconify/react';


function Home() {
    return (
    <section>
        <Menu />
        <div>
            <h1 className='title im-title'>Hola, soy Yola García</h1>
            <p className='content im-content'>Bienvenida/o a mi espacio. Soy estudiante de desarrollo web full-stack y quiero ayudarte dar vida a tus ideas. Con la tecnología de React y Symfony, puedo convertir tus requisitos en un sitio web chulo y funcional :)
            </p>
        </div>
        <div className='icon-heart'>
            <Icon icon="noto:laptop" color="#f24e1e" width="40" height="40" />
            <Icon icon="mdi:heart" color="#f24e1e" width="40" height="40" />
        </div>
        <Footer />
    </section>
    )
}

export default Home

import '../assets/styles/menu.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Menu() {
    const [showMenu, setShowMenu] = useState(false);
    
    return (
    <div>
        <header id="header">
            <nav className="nav">
                <button className={showMenu ? 'toggle-menu active' : 'toggle-menu'} onClick={() => setShowMenu(!showMenu)}>
                    <span></span>
                </button>
            </nav>
        </header>
        <div id="menu" className={showMenu ? 'open' : ''}>
            <nav className="main-nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/proyectos">Proyectos</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contacto</Link>
                    </li>
                </ul>
            </nav>

            <footer className="menu-footer">
                <nav className="footer-nav">
                    <ul>
                        <li>
                            <a className="footer-cv" href="https://doc-10-8s-prod-02-apps-viewer.googleusercontent.com/viewer2/prod-02/pdf/8r2chkldefrdfqulkdb3cnbonf5l8348/cl4vqho96r30tk9kr6ic9d5rfh522u61/1679397750000/3/115647966709994447564/APznzaaeIJGq7RP_eQD2FF40GkpK_Ubv6yreg0FWPlFokYyjuMOxenAQmKCbMT4G_O8d97jy8pfcxDQJ8HAuWErMxuh_tvjGzbZJowy532-IbGTefVGcECxZgp9UJngiQA9oewta-SFzOIQkc5CdapPvXzHxjh5GB2UnqgIllbRq2YhI4XmCYAl-h58hXbdgPi1rIBMN7POg9sPhxpXY_909XDBvWmj_F4OwkUFvNicQhICsI69JhlDG_fKGHTiWeY3Buvnq6GIyItz2mDmVz5p_7ua_foD0bP0qEHXlzo_J_B0dcqmAtT-NP-nTcVqDRhbMaxkDyp1b9dDtKk7sLxaDxvVq6vVeKj2CPANwZthk0kTGXLsxkApWNtuccOI25eH8kfTcWmXE7AP8UcUmVJjEjMPOlOtI2Q==?authuser=0&nonce=tji9u25edjulg&user=115647966709994447564&hash=kqme364de0umiai6qeh3918lov2a1l7k">
                                Ver mi CV
                            </a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    </div>
    );
}

export default Menu;
import React from 'react';
import { Menubar } from 'primereact/menubar';
import Home from './Home'
import Login from './Login'
import About from './About';
import ReactDOM from 'react-dom';
import styles from './Menu.module.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Contact from './Contact';

const items = [
    {
        label: 'Strona główna',
        icon: 'pi pi-home',
        url: '/'
    },
    {
        label: 'O nas',
        icon: 'pi pi-star',
        url: '/about'
    },


    {
        label: 'Contact',
        icon: 'pi pi-envelope',
        url: '/contact'
    },

    {
        label: 'Logowanie',
        icon: 'pi pi-sign-in',
        url: '/login'
    },
    {
        label: 'Rejestracja',
        icon: 'pi pi-sign-in'
    },
];
export default function (props) {
    return <div className="card"  >
        <Menubar model={items} style={{marginBottom:  '10px'}} />
        <Router>
            <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />

                <Route path="/login" element={<Login/>} />

            </Routes>
        </Router>
    </div>
}
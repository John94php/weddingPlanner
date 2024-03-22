import React from 'react';
import { Menubar } from 'primereact/menubar';
import Home from './Home/Home.js'
import CheckList from './Home/CheckList.js'
import Guests from './Home/Guests.js'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";


const items = [
    {
        label: 'Strona główna',
        icon: 'pi pi-home',
        url: '/home'
    },
    {
        label: 'Checklista',
        icon: 'pi pi-star',
        url: '/checlist'
    },


    {
        label: 'Lista gości',
        icon: 'pi pi-envelope',
        url: '/guests'
    },
];
export default function (props) {
    return <div className="card"  >
        <Menubar model={items} style={{marginBottom:  '10px'}} />
        <Router>
            <Routes>
                <Route path="/home"  element={<Home/>} />
                <Route path="/checklist" element={<CheckList/>} />
                <Route path="/guests" element={<Guests/>} />
            </Routes>
        </Router>
    </div>
}
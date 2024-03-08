import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './MainPage'
import {BrowserRouter} from "react-router-dom"


const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <BrowserRouter>
        <MainPage />
    </BrowserRouter>

)
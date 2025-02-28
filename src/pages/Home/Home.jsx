import './Home.css'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const Home = () => {
    useEffect(() => {
        document.title = "Enrutamiento en React";
    }, []);

    return (<h1>Menú Principal</h1>)
}
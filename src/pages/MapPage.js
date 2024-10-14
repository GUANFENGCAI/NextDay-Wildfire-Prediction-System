import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/MapPageStyle.css';
import Footer from '../components/Footer'
import Header from '../components/Header'
import MapComponent from '../components/MapComponent';
import LegendBox from '../components/LegendBox'; 

function MapPage(){
    return(
        <>
        <Header />
        <div className="map-container">
        <MapComponent />
        <LegendBox />
        </div>
        <Footer />
        </>

    );
}

export default MapPage;
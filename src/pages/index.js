import React from "react";
import Layout from '../components/layout';
import ImagenHotel from '../components/imagenHotel';
import ContenidoInicio from '../components/ContenidoInicio';
import useHabitaciones from '../hooks/use-habitaciones';

const IndexPage = () => {

  useHabitaciones();

  

  return (
    <Layout>
        <ImagenHotel />
  
        <ContenidoInicio />
  
  
        
    </Layout>
    
  )
}

export default IndexPage

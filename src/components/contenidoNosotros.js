import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const ContenidoNosotros = () => {

    const resultado = useStaticQuery(graphql`
    query {
        allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
              nodes {
              titulo
              contenido
              imagen {
                fluid( maxWidth: 1200 ) {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
        }
      }
    `);

    const { titulo, contenido, imagen } = resultado.allDatoCmsPagina.nodes[0];

    return ( 
        <>
            <h2>{titulo}</h2>
            <div>
                <p> {contenido} </p>
                <Image 
                    fluid={imagen.fluid}
                />
            </div>

        </>
     );
}
 
export default ContenidoNosotros;
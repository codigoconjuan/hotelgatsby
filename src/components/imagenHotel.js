import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage)`
    height: 700px;
`

const ImagenHotel = () => {

    const { image } = useStaticQuery(graphql`
    query {
        image: file(relativePath: { eq:"8.jpg" } ) {
          sharp:childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `);

    // console.log(image.sharp.fluid);

    return ( 
        <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft" >

        </ImageBackground>
    );
}
 
export default ImagenHotel;
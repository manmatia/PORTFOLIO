import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import github from "../assets/github.jpeg"
import linkedin from "../assets/linkedin.png"
import correo from "../assets/correo.png"
import styled from "@emotion/styled";
import Box  from "@mui/material/Box";
const Footer = () => {
  const linkedinURL = 'https://www.linkedin.com/in/matias-graneros-86605388/';
  const githubURL = 'https://github.com/manmatia';
  const Img = styled("img")({
    ObjectFit: "cover",
    objectPosition: "center",
    width: 40,
    height: "100%",
    boxShadow: '10px',
    borderRadius:2
  })
  const handleContactClick = () => {
    const email = "manmatia@gmail.com";
    const subject = "Contacto desde mi sitio web";
    const body = "Hola Matias,\n\nEstoy interesado en contactarte...";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    
    window.open(mailtoUrl);
  };

  return (
    <footer
      style={{
        backgroundColor: "#060F20",
    
        textAlign: "center",
        padding: "10px 0", 
      }}
    >
      <Grid container justifyContent="center" spacing={2}>
    
        <Box display="flex" justifyContent="center" alignItems="center" marginLeft={3} marginRight={3} marginBottom={4} marginTop={5}>
          
      <Grid item xs={4} justifyContent={"center"} sm={4} md={3} >
      <Button
        aria-label="GitHub"
        component="a"
        href={githubURL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => window.open(githubURL, '_blank')}
      >
         <Img borderRadius={"5px"} src={github} alt="Imagen css" />
    
      </Button>
      <label style={{ color:"white"}}>GITHUB</label>
      </Grid>
      <Grid item xs={4} sm={4} md={3}>
          <Button
                  aria-label="Correo"
                  component="a"
                  href={correo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleContactClick}
          >
              <Img borderRadius={"5px"} src={correo} alt="Imagen css" />
          </Button>
          <label style={{ color: "white" }}>CORREO</label>
        </Grid>
      <Grid item xs={4} sm={4} md={3} >
      <Button
        aria-label="LinkedIn"
        component="a"
        href={githubURL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => window.open(linkedinURL, '_blank')}
      >
      <Img borderRadius={"5px"} src={linkedin} alt="Imagen css" />
      </Button>
      <label style={{ color:"white"}}>LINKEDIN</label>
      </Grid>
      </Box>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <p style={{ color: "whitesmoke", textAlign: "center" }}>
            Todos los derechos reservados &copy; Matias Graneros
          </p>
        </Grid>
      </Grid>
 
    </footer>
  );
};

export default Footer;

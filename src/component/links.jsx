import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import styled from "@emotion/styled";
import github from "../assets/github.jpeg"
import linkedin from "../assets/linkedin.png"
import Grid from '@mui/material/Grid';



export default function LinksJob() {
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
  return (

    <Grid container   >
           
    
    <Box display="flex" justifyContent="center" alignItems="center" marginLeft={1} marginRight={1} marginBottom={5} marginTop={5}>
    <Grid item xs={6} justifyContent={"center"} sm={4} md={4} >
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
      </Grid>
      <Grid item xs={6} sm={4} md={4} >
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
      </Grid>
    </Box>
    </Grid>
  );
}
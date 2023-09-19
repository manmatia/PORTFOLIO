import { Box, Button, Divider, Paper } from "@mui/material";
import ResponsiveAppBar from "./component/navbar";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from "@emotion/styled";
import Stack from '@mui/material/Stack';
import LinksJob from "./component/links";
import Tech from "./component/Tech";
import Img1 from "../src/assets/1.jpeg"
import Proyectos from "./component/proyectos"
import Footer from "./component/Footer";
import "./App.css";


export default function App() {


  const Img = styled("img")({
    ObjectFit: "cover",
    objectPosition: "center",
    width: "100%",
    height: "100%",
    borderRadius: "10%",
    boxShadow: 10,
  })

  return (
    <>
      <ResponsiveAppBar />
      <br />
      <div className="section" id="pagina1">
        <Typography variant="h2" color={"white"} marginLeft={5} >Matias Graneros</Typography>
        <Typography data-aos="zoom-out-up" variant="h5" color={"white"} marginLeft={5}>Full Stack Developer</Typography>

        <Paper sx={{
          height: "90%",
          display: "flex",
          alignItems: "center",

          overflow: "hidden",
          mt: 5,
          background: "transparent",
          boxShadow: 10,
          marginLeft: 5,
          marginRight: 5,
          color: "whitesmoke",
          width: "90%",

        }}>

          <Grid container justifyContent="center" padding={4} >

            <div className="imgLinks" style={{ marginRight: 40 }}>
              <Grid item xs={12} sm={4} md={12} flexBasis={"15rem"} flexGrow={"1"}  >
                <Img src={Img1} alt="Imagen 1" />
              </Grid>    <LinksJob />

            </div>
            <Grid item xs={12} sm={7} md={6}>
              <Box
                style={{
                  borderRadius: '5px',

                }}
              >
                <Typography color={"white"}>
                  Soy un apasionado de la tecnología y un desarrollador Full Stack.

                  Completé con éxito un riguroso bootcamp en SoyHenry 👨🏽‍🎓. Donde perfeccioné mis habilidades en tecnologías clave como HTML5, CSS3, JavaScript, Node.js, Express, React, Redux, SQL, Sequelize y Git, entre otras.

                  Lo que más me apasiona es la colaboración en equipo y la resolución de desafíos. Creo firmemente en el poder de la tecnología para transformar negocios y mejorar la vida de las personas. Mi objetivo es seguir creciendo como desarrollador y contribuir con soluciones innovadoras en el mundo digital.

                  Creo que nunca dejamos de aprender, y esa es una de las razones por las que me encanta el mundo de la tecnología.

                  Siempre estoy abierto a nuevas oportunidades y conexiones. Si tienes un proyecto emocionante o una oportunidad laboral que crees que podría ser una buena coincidencia, ¡no dudes en contactarme!

                  ¡Vamos juntos a construir un futuro digital emocionante!

                </Typography>
                <div className="section" id="section4">
                  <Grid container sx={{ textAlign: "center" }}>
                    <Box sx={{ textAlign: "center", marginTop: '20px' }}>
                      <Stack
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                        justifyContent="center"
                      >
                        <Grid item xs={10} sm={4} md={3}>
                          <Button variant="contained" href="./CVMGPLANO.pdf" download>DESCARGAR CV PLANO</Button>
                        </Grid>
                        <Grid item xs={10} sm={4} md={3}>
                          <Button variant="contained" href="./CVMG.pdf" download>DESCARGAR CV</Button>
                        </Grid>
                      </Stack>
                    </Box>
                  </Grid>
                </div>
              </Box>
            </Grid>
          </Grid>

        </Paper>



      </div>
      <br /><br />
      <div className="section" id="tecnologias">

        <Tech />



      </div>

      <div className="section" id="proyectos">

        <Proyectos />



      </div>


      <div className="section" id="contacto">

        <Footer />



      </div>



    </>
  );
}

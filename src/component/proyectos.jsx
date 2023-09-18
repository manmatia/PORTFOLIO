import React from 'react';
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import puebla1 from "../assets/puebla1.png"
import puebla2 from "../assets/puebla2.png"
import puebla3 from "../assets/puebla3.png"
import puebla4 from "../assets/puebla4.png"
import videoa from "../assets/video.png"
import creacion from "../assets/creacion.png"
import landing from "../assets/landing.png"
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    label: 'Home',
    imgPath: puebla1,
  },
  {
    label: 'Productos',
    imgPath: puebla2,
  },
  {
    label: 'Dashboard de Administrador',
    imgPath: puebla3,
  },
  {
    label: 'Creacion de productos',
    imgPath: puebla4,
  },
];
const images2 = [
  {
    label: 'Landing page ',
    imgPath: landing,
  },
  {
    label: 'Home juegos',
    imgPath: videoa,
  },
  {
    label: 'Creacion de juegos',
    imgPath: creacion,
  },
];
const images3 = [
  {
    label: 'San Francisco',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];
export default function Proyectos() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeStep2, setActiveStep2] = React.useState(0);
  const [activeStep3, setActiveStep3] = React.useState(0);
  const maxSteps = images.length;
  const maxSteps2 = images2.length;
  const maxSteps3 = images3.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleNext2 = () => {
    setActiveStep2((prevActiveStep2) => prevActiveStep2 + 1);
  };

  const handleNext3 = () => {
    setActiveStep3((prevActiveStep3) => prevActiveStep3 + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleBack2 = () => {
    setActiveStep2((prevActiveStep2) => prevActiveStep2 - 1);
  };
  const handleBack3 = () => {
    setActiveStep3((prevActiveStep3) => prevActiveStep3 - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleStepChange2 = (step2) => {
    setActiveStep2(step2);
  };

  const handleStepChange3 = (step3) => {
    setActiveStep3(step3);
  };

  return (
    <>

      <Typography variant="h2" color={"black"} marginLeft={5} data-aos="fade-right" >
        Proyectos
      </Typography>
      <br />
      <Typography variant="h4" color={"black"} marginLeft={5}>
        A lo largo de mi trayectoria como desarrollador, he tenido el privilegio de trabajar en proyectos significativos que han demostrado mi habilidad y pasión por la creación de soluciones web. 
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"


      >

        {/* Tarjeta 1 */}
        <Grid item xs={10} sm={8} md={5}  >
          <Box container
            justifyContent="center"
            alignItems="center"
            margin={0}
            padding={4}
            marginBottom={20}
            marginRight={2}
            marginTop={10}
            boxShadow={10}
            borderRadius={3}
            flexBasis={"15rem"} flexGrow={"1"} sx={{ maxWidth: 600, flexGrow: 1 }} className="custom-card" data-aos="fade-right" >
            <Typography variant='h3'>Soy Pueba </Typography>
            <Typography variant='h4'>  e-commerce </Typography>

            <Paper
              square
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                bgcolor: 'background.default',
              }}
            >
              <Typography >{images[activeStep].label}</Typography>
            </Paper >
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 400,
                        whidth: 400,
                        display: 'block',
                        maxWidth: 600,
                        overflow: 'hidden',
                        width: '100%',
                        borderRadius: 2
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  SIGUIENTE
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  ANTERIOR
                </Button>
              }
            />
            <div style={{ textAlign: 'center' }}>
              <span style={{ display: 'inline-block' }}>

                <Button
                  size="small"
                  variant="contained"
                  href="https://soy-puebla-deploy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Visitar
                </Button>
              </span>
            </div>
          </Box>
        </Grid>
        {/* Tarjeta 2 */}
        <Grid item xs={10} sm={8} md={5}  >
          <Box container
            justifyContent="center"
            alignItems="center"
            margin={0}
            padding={4}
            marginRight={2}
            marginBottom={20}
            marginTop={10}
            boxShadow={10}
            borderRadius={3}
            item xs={7} sm={3} md={8} flexBasis={"15rem"} flexGrow={"1"} sx={{ maxWidth: 600, flexGrow: 1 }} className="custom-card" data-aos="fade-right" >
            <Typography variant='h3'>VideoGame </Typography>
            <Typography variant='h4'> Proyecto individual </Typography>
            <Paper
              square
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                pl: 2,
                bgcolor: 'background.default',
              }}
            >
              <Typography >{images2[activeStep2].label}</Typography>
            </Paper >
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep2}
              onChangeIndex={handleStepChange2}
              enableMouseEvents
            >
              {images2.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep2 - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 400,
                        whidth: 400,
                        display: 'block',
                        maxWidth: 600,
                        overflow: 'hidden',
                        width: '100%',
                        borderRadius: 2
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps2}
              position="static"
              activeStep={activeStep2}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext2}
                  disabled={activeStep2 === maxSteps2 - 1}
                >
                  SIGUIENTE
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button size="small" onClick={handleBack2} disabled={activeStep2 === 0}>
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  ANTERIOR
                </Button>
              }
            />
   <div style={{ textAlign: 'center' }}>
              <span style={{ display: 'inline-block' }}>

                <Button
                  size="small"
                  variant="contained"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/manmatia/ProyectoIntegrador"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  Visitar
                </Button>
              </span>
            </div>
          </Box>
        </Grid>

      </Grid>

      {/* <Grid container justifyContent="center" alignItems="center">
  <Grid item xs={10} sm={8} md={5}>
    <Typography variant="h4" color="black" marginLeft={4}>
 "Soy Puebla, e-commerce"  En el frontend, hemos utilizado tecnologías como React, Vite, Redux y Material-UI para crear una experiencia de usuario atractiva y fluida. Mientras tanto, en el backend, hemos trabajado con JavaScript, Sequelize y SQL para garantizar la funcionalidad y la gestión eficiente de los datos. Estos proyectos reflejan mi pasión por el desarrollo web y mi capacidad para crear soluciones innovadoras y efectivas.
    </Typography>
  </Grid>

  <Grid item xs={10} sm={8} md={5}>
    <Typography variant="h4" color="black" marginLeft={4}>
    Proyecto Integrador Individual: Mi objetivo era crear una aplicación completa que interactuara con una API externa, presentando datos de manera efectiva en una interfaz atractiva y fácil de usar. Utilicé React y Redux para construir un frontend dinámico y diseñé componentes reutilizables para brindar una experiencia fluida a los usuarios. PostgreSQL y Sequelize se encargaron del backend, con rutas y controladores para gestionar las solicitudes API.
    </Typography>
  </Grid>
</Grid> */}
    </>
  );
}

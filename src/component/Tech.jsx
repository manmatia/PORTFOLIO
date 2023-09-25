import Typography from '@mui/material/Typography';
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid"
import jss from "../assets/jss.png"
import csss from "../assets/csss.webp"
import htmlc from "../assets/csss.png"
import postt from "../assets/postgress.png"
import vite from "../assets/vite.jpeg"
import redu from "../assets/redux.png"
import rea from "../assets/react.png"
import muui from "../assets/mui.png"
import git from "../assets/git.jpeg"
import boots from "../assets/bootstrap.jpeg"
import seque from "../assets/sequelize2.png"
import native from "../assets/native.png"
import types from "../assets/types.png"
import Tooltip from '@mui/material/Tooltip';
import { Paper } from '@mui/material';
import "./Tech.css"


export default function Tech() {

  const Img = styled("img")({
    ObjectFit: "cover",
    objectPosition: "center",
    width: 60,
    height: "100%",
    marginTop: 46,
    marginBottom: 46,

  })
  return (
    <>
      <br /><br />
      <Typography variant="h2" color={"black"} marginLeft={5} data-aos="fade-right">Tecnologias</Typography>
      <Typography variant="h5" color={"black"} marginLeft={5}>Como desarrollador web, he adquirido experiencia en una amplia gama de tecnologías clave que son fundamentales para crear soluciones web efectivas. A continuación,  presento las tecnologías que he dominado y  utilizo con fluidez en mis proyectos:</Typography>
      <Paper sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
        mb: 10,
        background: "#498FB2",
        boxShadow: 10,
        marginLeft: 5,
        marginRight: 5,
        color: "whitesmoke",
        borderRadius: 2
      }}>


        <Grid container justifyContent="center" alignItems="center" margin={0} padding={4}  >
         
          <Grid item xs={5} sm={2} md={1.3} flexBasis={"15rem"} flexGrow={"1"}  >
          <Tooltip   title="JavaScripts">
            <Img borderRadius={"5px"} src={jss} alt="Imagen 1" data-aos="zoom-out-up" />

            </Tooltip>
          </Grid>

          <Grid item xs={5} sm={2} md={1.3} flexBasis={"15rem"} flexGrow={"1"}  >
          <Tooltip   title="PostgreSQL">
            <Img borderRadius={"5px"} src={postt} alt="Imagen css" />
            </Tooltip>
          </Grid>

          <Grid item xs={5} sm={3} md={1.3} flexBasis={"15rem"} flexGrow={"1"}  >
          <Tooltip   title="Vite">
            <Img borderRadius={"5px"} src={vite} alt="Imagen css" data-aos="zoom-out-up" />
            </Tooltip>
          </Grid>

          <Grid item xs={5} sm={3} md={1.3} flexBasis={"15rem"} flexGrow={"1"}  >
          <Tooltip   title="Redux">
            <Img borderRadius={"5px"} src={redu} alt="Imagen css" />
            </Tooltip>
          </Grid>

          <Grid item xs={5} sm={3} md={1.3} flexBasis={"15rem"} flexGrow={"1"}  >
          <Tooltip   title="React">
            <Img borderRadius={"5px"} src={rea} alt="Imagen css" data-aos="zoom-out-up" />
            </Tooltip>
          </Grid>

          <Grid item xs={5} sm={3} md={1.3} flexBasis={"15rem"} flexGrow={"1"}  >
          <Tooltip   title="CSS">
           <Img borderRadius={"5px"} src={csss} alt="Imagen css" />
            </Tooltip>
          </Grid>

          <Grid item xs={5} sm={3} md={1.3} flexBasis={"15rem"} flexGrow={"1"}  >
          <Tooltip   title="HTML">
            <Img borderRadius={"5px"} src={htmlc} alt="Imagen html" data-aos="zoom-out-up" />
            </Tooltip>
          </Grid>
          <Grid item xs={5} sm={3} md={1.3} flexBasis={"15rem"} flexGrow={"1"}  >
          <Tooltip   title="Material UI MUI">
            <Img borderRadius={"5px"} src={muui} alt="Imagen MUI" />
            </Tooltip>
          </Grid>
          <Grid item xs={5} sm={3} md={1.3} flexBasis={"15rem"} flexGrow={"1"}  >
          <Tooltip   title="Bootstrap">
            <Img borderRadius={"5px"} src={boots} alt="Imagen bootstrap" data-aos="zoom-out-up" />
            </Tooltip>
          </Grid>
          <Grid item xs={5} sm={3} md={1.3} flexBasis={"15rem"} flexGrow={"1"}  >
          <Tooltip   title="Sequelize">
            <Img borderRadius={"5px"} src={seque} alt="Imagen sequelize" />
            </Tooltip>
          </Grid>
          <Grid item xs={5} sm={3} md={1.3} flexBasis={"15rem"} flexGrow={"1"}  >
          <Tooltip   title="GITHUB">
            <Img borderRadius={"5px"} src={git} alt="Imagen git" data-aos="zoom-out-up" />
            </Tooltip>
          </Grid>
          <Grid item xs={5} sm={3} md={1.3} flexBasis={"15rem"} flexGrow={"1"}  >
          <Tooltip   title="TypeScripts">
            <Img borderRadius={"5px"} src={types} alt="Imagen 1" />
            </Tooltip>
          </Grid>
          <Grid item xs={5} sm={3} md={1.3} flexBasis={"15rem"} flexGrow={"1"}  >
          <Tooltip   title="Rect Native">
           <Img borderRadius={"5px"} src={native} alt="Imagen 1" data-aos="zoom-out-up" />
           </Tooltip>
          </Grid>
        </Grid>




      </Paper>


    </>

  )
}
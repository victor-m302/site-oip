import {Grid, Divider, Image } from 'semantic-ui-react';
import EspecialidadesPanel from '../components/especialidades/EspecialidadesPanel';
import EspecialidadesAccordion from '../components/especialidades/EspecialidadesAccordion';
import EspecialidadesImage from '../components/especialidades/EspecialidadesImage';
import EspecialidadesProvider from '../components/especialidades/EspecialidadesProvider';

function Especialidades() {

  let img1 = 'public/especialidades/image1.png'

    return (

      <div>
        <EspecialidadesPanel/>

        <EspecialidadesProvider>
        <Grid columns={2} relaxed='very'>
          <Grid.Column>
                <EspecialidadesAccordion/>
          </Grid.Column>
          <Grid.Column>

          {/* <img src={img1} fluid /> */}

          <EspecialidadesImage/>

          </Grid.Column>
        </Grid>
        </EspecialidadesProvider>

        <Divider vertical/>
 

      </div>
       
    )
}

export default Especialidades;

// export default class DentalAccordion extends Component {
//   state = { activeIndex: 0 };

//   handleClick = (e, titleProps) => {
//     const { index } = titleProps;
//     const { activeIndex } = state;
//     const newIndex = activeIndex === index ? -1 : index;

//     setState({ activeIndex: newIndex });
//   };

//   render() {
//     const { activeIndex } = state;

//     return (
     
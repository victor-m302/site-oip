import ClinicaPanel from "../components/clinica/ClinicaPanel";
import Dentistas from "../components/clinica/Dentistas";
import SobreClinica from "../components/clinica/SobreClinica";
import ResumoEspecialidades from "../components/home/ResumoEspecialidades";



function Clinica() {


    return (
        <div>

            <ClinicaPanel/>

            <SobreClinica/>

            {/* <Dentistas/> */}
        </div>

    )
}

export default Clinica;
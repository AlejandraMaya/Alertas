import logo from './logo.svg';
import './App.css';
import Swal from 'sweetalert2';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const mostrarAlerta1=()=>{
    Swal.fire({
      title: 'Seleccionaste todas tus respuestas?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Si, enviar`,
      denyButtonText: `No, responder`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('listo!', '', 'Gracias por confirmar tus sintomas')
      } else if (result.isDenied) {
        Swal.fire('Selecciona los sintomas que presentas', '', 'info')
      }
    });
  }

  const mostrarAlerta2=()=>{
    Swal.fire({
      title: 'Seleccionaste todas tus respuestas?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Save`,
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('listo!', '', 'Gracias por confirmar tus sintomas')
      } else if (result.isDenied) {
        Swal.fire('Selecciona los sintomas que presentas', '', 'info')
      }
    });
  }
  
  return (
    <><div className="App">
      <br />
      <button type="button" class="btn btn-success" onClick={() => mostrarAlerta1()}>Confirmar Formulario HIPERTENSION</button>
    </div><div className="App">
        <br />
        <button type="button" class="btn btn-success" onClick={() => mostrarAlerta2()}>Confirmar Formulario COVID</button>
      </div></>

    
  
  );
  
  }

export default App;


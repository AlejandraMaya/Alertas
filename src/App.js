import logo from './logo.svg';
import React from "react";
import './App.css';
import Swal from 'sweetalert2';

function App() {
 const mostarAlerta=()=>{
   
  Swal.fire({
    title: 'Tus sintomas coinciden con la depresión',
    text: "Quieres recibir infrmacion de como tratarla?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, por favor!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Ok!',
        'En tu correo recibiras más informacion.',
        'success'
      )
    }
  })
}
 return(
   <div className="App">
     <br/>
     <botton onClick={()=>mostarAlerta()}>Depresión</botton>
   </div>
 );
}

export default App;

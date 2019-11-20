/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 borrando los inputs ya creados (investigar cómo en MDN).
*/
import './calculos-mio.js';

document.querySelector('#next-step').onclick = function(event) {
    const $membersNumber = document.querySelector('#members-number');
    const membersNumber = Number($membersNumber.value);
  
    borrarIntegrantesAnteriores();
    crearIntegrantes(membersNumber);
  
    event.preventDefault();
  };
  
  document.querySelector('#calculate').onclick = function(event) {
    const numeros = obtenerEdadesIntegrantes();
    
    mostrarEdad('older', obtenerMayorNumero(numeros));
    mostrarEdad('younger', obtenerMenorNumero(numeros));
    mostrarEdad('average-age', obtenerPromedio(numeros));
    mostrarResultados();
  
    event.preventDefault();
  };
  
  document.querySelector('#reset').onclick = resetear;
  
  function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll('.integrante');
    
    for (let i = 0; i < $integrantes.length; i++) {
      $integrantes[i].remove();
    }
  }
  
  function crearIntegrantes(membersNumber) {
  
    if (membersNumber > 0) {
      mostrarBotonCalculo();
    } else {
      resetear();
    }
  
    for (let i = 0; i < membersNumber; i++) {
      crearIntegrante(i);
    }
  }
  
  function crearIntegrante(indice) {
    const $div = document.querySelector('#ages-container');
    
    const $input = document.createElement('input');
    $input.type = 'number';
    $input.placeholder = 'Edad del integrante #: ' + (indice + 1);
    $input.className = 'integrante';
    $div.appendChild($input);
  }
  
  function resetear() {
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    ocultarResultados();
  }
  
  function ocultarBotonCalculo() {
    document.querySelector('#calculate').className = 'hidden';
  }
  
  function mostrarBotonCalculo() {
    document.querySelector('#calculate').className = '';
  }
  
  function ocultarResultados() {
    document.querySelector('#analysis').className = 'hidden';
  }
  
  function mostrarResultados() {
    document.querySelector('#analysis').className = '';
  }
  
  function mostrarEdad(tipo, valor) {
    document.querySelector(`#${tipo}`).textContent = valor;
  }
  
  function obtenerEdadesIntegrantes() {
    const $integrantes = document.querySelectorAll('#ages-container input');
  
    const edades = [];
    for (let i = 0; i < $integrantes.length; i++) {
      edades.push(Number($integrantes[i].value));
    }
    
    return edades;
  }
  

  function obtenerMayorNumero(numeros) {
    let mayorNumero = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > mayorNumero) {
        mayorNumero = numeros[i];
      }
    }
  
    return mayorNumero;
  }
  
  function obtenerMenorNumero(numeros) {
    let menorNumero = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] < menorNumero) {
        menorNumero = numeros[i];
      }
    }
  
    return menorNumero;
  }
  
  function obtenerPromedio(numeros) {
    let acumulador = 0;
    for (let i = 0; i < numeros.length; i++) {
      acumulador += numeros[i];
    }
  
    return (acumulador / numeros.length).toFixed(2);
  }
  /*
  TAREA:
  Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
  Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.
  
  Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
  */
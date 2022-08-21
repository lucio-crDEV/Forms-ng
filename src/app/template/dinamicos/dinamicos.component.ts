import { NgForm } from '@angular/forms';
import { Component, Input } from '@angular/core';

interface Persona {
  nombre: string,
  favoritos: Favorito[]
}


interface Favorito {
  id: number,
  nombre: string
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {


  persona: Persona = {
    nombre: 'Lucio',
    favoritos: [ 
      {id: 1, nombre: 'Counter Strike'},
      {id: 2, nombre: 'Project Zomboid'},
  ]
  }






  guardar(){
    console.log('Formulario posteado');
    
  }

}

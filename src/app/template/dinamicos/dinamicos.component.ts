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

    `
    label {
      user-select: none;
    }
    `
  ]
})

export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Lucio',
    favoritos: [ 
      {id: 1, nombre: 'Counter Strike'},
      {id: 2, nombre: 'Project Zomboid'},
    ]
  }

  agregarFavorito(){
    const juego: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.persona.favoritos.push({ ...juego })
    this.nuevoJuego= '';
  }


  guardar(){
    console.log('Formulario posteado');
    
  }

  eliminar( index: number ){
    // en la posicion { indice }, eliminar 1 <-
    this.persona.favoritos.splice(index, 1)
  }

}

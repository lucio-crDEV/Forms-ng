import { NgForm } from '@angular/forms';
import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: '',
    precio: 123,
    existencias: 5
  }

  constructor() { }

  ngOnInit(): void {
    
  }


  nombreValido(): boolean {
    return this.miFormulario?.controls['producto']?.invalid 
           && this.miFormulario?.controls['producto']?.touched 
  }

  precioValido():boolean {
    return this.miFormulario?.controls['precio']?.invalid 
           && this.miFormulario?.controls['precio']?.touched

  }


/*   
guardar( miFormulario: NgForm ) {
    console.log( miFormulario );
  } 
*/

  guardar( ) {
    // console.log( this.miFormulario.value );

    console.log( 'Posteo correcto' )

    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    })
  }


}

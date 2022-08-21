import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [`label{ user-select: none;}`]
})
export class SwitchesComponent  {

persona = {
  genero: '',
  notifications: true,
}

terms:boolean = false

}

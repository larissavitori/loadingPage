import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'btn-primary',
  standalone: true,
  imports: [CommonModule],
  providers: [BtnPrimaryComponent],
  templateUrl: './btn-primary.component.html',
  styleUrls: ['./btn-primary.component.scss']
})
export class BtnPrimaryComponent {

  constructor() { }

  onclick() {
    const phoneNumber = '5521992014046'; 
    const message = 'Olá, gostaria de mais informações.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
     }

}

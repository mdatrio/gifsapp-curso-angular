import { Component, ElementRef, ViewChild } from '@angular/core';

import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  constructor(private gifsService: GifsService) {}

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscar() {

    console.log(this.txtBuscar); //Para conocer el tipado

    const valor = this.txtBuscar.nativeElement.value;
    // console.log(valor);

    if(valor.trim().length === 0) { //Para que no se puedan buscar valores vacíos, sin nada en el input
      return;
    }

    this.gifsService.buscarGifs(valor);

    this.txtBuscar.nativeElement.value = '';
  }

}

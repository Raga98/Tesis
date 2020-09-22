import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  running = false;
  stopping = true;

  constructor() {}
  //TODO: LOGICA DE CONTROL PARA PODER HACER SLIDE SOLO CUANDO SE HALLA HECHO CHECKED A UN RADIOBUTTON

  //TODO: ARRAY PARA LOS ELEMENTOS DE LAS DISTINTAS CONFIGURACIONES
  run() {
    this.running = !this.running;
  }
  stop() {
    this.stopping = !this.stopping;
  }

}

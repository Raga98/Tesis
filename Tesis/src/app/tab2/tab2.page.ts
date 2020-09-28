import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  running = false;
  stopping = true;
  constructor( private fb : FormBuilder, public toast : ToastController, public http : HttpClient) {}

  washForm = this.fb.group({
    tamCarga0: ['', Validators.required],
    tempLav0: ['', Validators.required],
    tempEnj0: ['', Validators.required],
    tipoLav0: ['', Validators.required],
    configCiclo0: ['', Validators.required],
  })
  //TODO: LOGICA DE CONTROL PARA PODER HACER SLIDE SOLO CUANDO SE HALLA HECHO CHECKED A UN RADIOBUTTON

  //TODO: ARRAY PARA LOS ELEMENTOS DE LAS DISTINTAS CONFIGURACIONES
  run() {
    if(this.tamanoCarga.value == "" || this.tempLavado.value == "" || this.tipoLav.value == "" || this.tipoCiclo.value == ""){
      console.log("Falta algun campo");
      this.presentToast();
    }
    else {
      let json = {
        "tamanoCarga": this.tamanoCarga.value,
        "tempLavado" : this.tempLavado.value,
        "tipoLav" : this.tipoLav.value,
        "tipoCiclo" : this.tipoCiclo.value,
      };

      this.running = !this.running;
    }
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Le falta elegir una opcion',
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
  stop() {
    console.log(this.tamanoCarga);
    this.stopping = !this.stopping;
  }

  get tamanoCarga(){
    return this.washForm.get('tamCarga0');
  }

  get tempLavado(){
    return this.washForm.get('tempLav0');
  }

  get tipoLav(){
    return this.washForm.get('tipoLav0');
  }

  get tipoCiclo(){
    return this.washForm.get('configCiclo0');
  }

}

import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PostPage } from '../post/post';
import { NoticiasPage } from '../noticias/noticias';
import { GuiaPage } from '../guia/guia';
import { OnibusPage } from '../onibus/onibus';
import { ClassificadosPage } from '../classificados/classificados';
import { OfertasPage } from '../ofertas/ofertas';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
  	public navCtrl: NavController,
  	public modalCtrl: ModalController

  	) {

  }
	abrirNoticias(){
		let noticiasModal = this.modalCtrl.create(NoticiasPage);
		noticiasModal.present();
	}
	abrirGuia(){
		let guiaModal = this.modalCtrl.create(GuiaPage)
		guiaModal.present();
	}

	abrirOnibus(){
		let guiaModal = this.modalCtrl.create(OnibusPage)
		guiaModal.present();
	}

	abrirClassificados(){
		let guiaModal = this.modalCtrl.create(ClassificadosPage)
		guiaModal.present();
	}

	abrirOfertas(){
		let guiaModal = this.modalCtrl.create(OfertasPage)
		guiaModal.present();
	}

}

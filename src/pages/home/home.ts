import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { PostPage } from '../post/post';
import { NoticiasPage } from '../noticias/noticias';
import { GuiaPage } from '../guia/guia';


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


}

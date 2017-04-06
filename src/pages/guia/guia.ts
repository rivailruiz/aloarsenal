import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { GuiaListagem } from '../../providers/guia-listagem';
import { ModalDefaultPage } from '../modal-default/modal-default';


/*
  Generated class for the Guia page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-guia',
  templateUrl: 'guia.html',
  providers: [GuiaListagem]

})
export class GuiaPage {

	Novalista: any;
	data: any;
  constructor(public navCtrl: NavController,
  						public navParams: NavParams,
  						public viewCtrl: ViewController,
  						public GuiaListagem: GuiaListagem,
  						public modalCtrl: ModalController) {
  }


  fecharModal(){
  this.viewCtrl.dismiss();
}

	abrirAcademias(){
		this.GuiaListagem.getAcademias()
		.then(data => {
			this.data = data;
		})
		let modalDefault = this.modalCtrl.create(ModalDefaultPage, this.data);
		modalDefault.present();
	}


}

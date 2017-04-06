import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { GuiaListagem } from '../../providers/guia-listagem';
import { ModalDefaultPage } from '../modal-default/modal-default';


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
			this.openDefaultModal(this.data);
		});
		

	}

	openDefaultModal(data){
		let modalDefault = this.modalCtrl.create(ModalDefaultPage, {data: this.data.rows});
		modalDefault.present();
	}

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ModalDefault page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-default',
  templateUrl: 'modal-default.html'
})
export class ModalDefaultPage {

	academias: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	console.log(this.academias);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalDefaultPage');
  }

}

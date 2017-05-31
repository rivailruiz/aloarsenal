import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Classificados page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-classificados',
  templateUrl: 'classificados.html'
})
export class ClassificadosPage {

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public viewCtrl: ViewController) {
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassificadosPage');
  }

  fecharModal(){
  this.viewCtrl.dismiss();
}

  
}

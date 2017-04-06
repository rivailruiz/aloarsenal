import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Post page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage {
	public post: any;
	public data: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  		console.log(this.navParams.get('post'));
      this.post = navParams.get('post');
  		// this.post = navParams.get('post');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
    
  }

}

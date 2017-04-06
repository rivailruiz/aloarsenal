import { Component } from '@angular/core';
import {Pegaposts} from '../../providers/pegaposts';
import { NavController, ViewController } from 'ionic-angular';
import { PostPage } from '../post/post';

/*
  Generated class for the Noticias page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
  providers:[Pegaposts]
})
export class NoticiasPage {

  private post: any;
  constructor(
  	public navCtrl: NavController,
  	public provider: Pegaposts,
    public viewCtrl: ViewController

  	) {
  	this.viewPegaPosts();
  }
	viewPegaPosts(){
		this.provider.getPosts()
		.then(data =>{
			this.post = data;
			console.log("carreguei os posts");
			console.log(this.post);
		});
	}


	abrePost(data: any){
		this.navCtrl.push(PostPage,{post: data});
	}

	doRefresh(refresher) {
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

fecharModal(){
  this.viewCtrl.dismiss();
}


}

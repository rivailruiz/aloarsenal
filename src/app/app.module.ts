import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PostPage } from '../pages/post/post';
import { NoticiasPage } from '../pages/noticias/noticias';
import { GuiaPage } from '../pages/guia/guia';
import { OnibusPage } from '../pages/onibus/onibus';
import { ClassificadosPage } from '../pages/classificados/classificados';
import { OfertasPage } from '../pages/ofertas/ofertas';
import { ModalDefaultPage } from '../pages/modal-default/modal-default';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PostPage,
    NoticiasPage,
    GuiaPage,
    ModalDefaultPage,
    OnibusPage,
    ClassificadosPage,
    OfertasPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PostPage,
    NoticiasPage,
    GuiaPage,
    ModalDefaultPage,
    OnibusPage,
    ClassificadosPage,
    OfertasPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  selectedIndex = 0;
  existeNuevaCompilacion = false;
  versionCompilacion = 1
  versionAppStr = '0.0.1'

  public appPages = [
    {
      title: 'Inicio',
      url: '/dashboard',
      icon: 'home'
    },
<<<<<<< HEAD
=======

    /*{
      title: 'Numeros de Télefonos',
      url: '/numeros-de-telefono',
      icon: 'paper-plane'
    },*/
>>>>>>> ec17480f9c8f553f64c29d0d8cc56d7b972cac5f
    {
      title: 'Ayuda de Profesionales',
      url: '/profesionales-list',
      icon: 'person'
    },
<<<<<<< HEAD
=======
    /*{
      title: 'Tenes Sintomas',
      url: '/tenes-los-sintomas',
      icon: 'heart'
    },
    {
      title: 'Noticias',
      url: '/fake-news',
      icon: 'trash'
    },*/
    {
      title: 'Acerca del Covid19',
      url: '/acerca-covid19',
      icon: 'warning'
    },
>>>>>>> ec17480f9c8f553f64c29d0d8cc56d7b972cac5f
    {
      title: 'Acerca de la App',
      url: '/colabora-con-la-app',
      icon: 'mail'
    },
    
  ];
<<<<<<< HEAD
=======
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
>>>>>>> ec17480f9c8f553f64c29d0d8cc56d7b972cac5f

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

<<<<<<< HEAD
  }

  ngOnInit() {
    console.log('Init app')
=======

    // GET nueva version
    setTimeout(()=> {
      //this.existeNuevaCompilacion = true; 
    }, 5000)
  }

  ngOnInit() {
    /*const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }*/
>>>>>>> ec17480f9c8f553f64c29d0d8cc56d7b972cac5f
  }
}

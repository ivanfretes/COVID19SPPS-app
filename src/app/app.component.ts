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
    {
      title: 'Ayuda de Profesionales',
      url: '/profesionales-list',
      icon: 'person'
    },
    {
      title: 'Acerca de la App',
      url: '/colabora-con-la-app',
      icon: 'mail'
    },
    
  ];

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

  }

  ngOnInit() {
    console.log('Init app')
  }
}

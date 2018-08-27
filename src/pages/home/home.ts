import { NavController } from 'ionic-angular';

import { Component } from '@angular/core';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  state = 'Idle';

  constructor(public navCtrl: NavController) {

  }

  doRefresh(refresher) {
    this.state = 'Refreshing';
    setTimeout(() => {
      this.state = 'Idle';
      refresher.complete();
    }, 2000);
  }

}

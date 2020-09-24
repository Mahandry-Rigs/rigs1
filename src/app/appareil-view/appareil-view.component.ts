import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  title = 'Application-OPEN CLASSROOM';
  isAuth = false;
  matos: any[];


  constructor(private AppareilService: AppareilService) {


  }

  ngOnInit() {
    this.matos = this.AppareilService.matos;
  }



  Apreto() {
    this.AppareilService.ApretoJiaby()
  }

  Vonoy() {
    this.AppareilService.VonoyJiaby()
  }


}

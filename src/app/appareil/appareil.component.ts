import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() matosNom: string;
  @Input() matoStatus: string;
  @Input() indexOfMatos: number;
  

  constructor(private appareilService:AppareilService) { }

  ngOnInit(): void {
  }

getStatus(){
  return this.matoStatus;
}

getColor(){
  if(this.matoStatus === 'mandeha') {
    return 'green';
   } else if (this.matoStatus === 'maty') {
    return 'black';
   }

}



MandeZa(){
  this.appareilService.ApretoZa(this.indexOfMatos)
}

matyZa(){
  this.appareilService.VonoyZa(this.indexOfMatos)
}


}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent {
  counter:number = 0;
  @Input() step:number = 1;
  constructor (){}
  decrease(){
    console.log('Hey sdecrease')
    if(this.counter-1>= 0)
    {
      // this.counter = this.counter - 1 ;
      this.counter--;
    }
  }
  increase(){
    if(this.counter+1<100)
    {
      // this.counter = this.counter + 1 ;
      // this.counter++;
      this.counter  =  this.counter +  this.step;
    }
  }
}

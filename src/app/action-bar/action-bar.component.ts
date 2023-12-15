import { Component, Input,OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent {
  counter:number = 0;
  @Input() step= 1;
  @Output() numberChange = new EventEmitter();
  constructor (){}
  decrease(){
    console.log('Hey decrease')
    if(this.counter-1>= 0)
    {
      // this.counter = this.counter - 1 ;
      // this.counter--;
      this.counter  =  this.counter -  this.step;
      this.numberChange.emit();
    }
  }
  increase(){
    console.log('Hey increase')
    if(this.counter+1<100)
    {
      // this.counter = this.counter + 1 ;
      // this.counter++;
      this.counter  =  this.counter +  this.step;
      this.numberChange.emit();
    }
  }
}

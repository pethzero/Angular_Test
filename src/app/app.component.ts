import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value = 0;

  calBuffet(value:string){
    const price = Number(value);
    this.value = (price*3)/4;
  }
  // title = 'myproject';
  // ninjaname = 'pethzero';
  
  // ninjaconsole(){
  //   console.log('ninjaconsole',this.ninjaname);
  // }

  // changeName(name:string){
  //   this.ninjaname = name;
  // }
}

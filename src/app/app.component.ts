import { Component,OnInit } from '@angular/core';
import { ExampleJsonService } from './api/examplejson.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  employees: any[] = [];

  constructor(private examplejsonService: ExampleJsonService) {}

  ngOnInit(): void {
    this.getEmployeeData();
  }

  getEmployeeData() {
    this.examplejsonService.getEmployees().subscribe(
      (data) => {
        this.employees = data;
        console.log('Employee Data:', this.employees);
      },
      (error) => {
        console.error('Error fetching employee data:', error);
      }
    );
  }
}


// export class AppComponent {
//   // testClick(){
//   //   console.log('wow');
//   // }

//   // testNumberChange() {
//   //   console.log('Test OutPut');
//   // }
//   // value = 0;

//   // calBuffet(value:string){
//   //   const price = Number(value);
//   //   this.value = (price*3)/4;
//   // }


//   // title = 'myproject';
//   // ninjaname = 'pethzero';
  
//   // ninjaconsole(){
//   //   console.log('ninjaconsole',this.ninjaname);
//   // }

//   // changeName(name:string){
//   //   this.ninjaname = name;
//   // }
// }

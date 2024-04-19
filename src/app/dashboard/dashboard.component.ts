import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  dashboardData : any;

  constructor() { }

  ngOnInit():void{
   
  }
  onMouseEnter() {
    console.log('Mouse entered');
    // Add logic to execute when mouse enters
    // For example, change a variable or apply a style
  }

  onMouseLeave() {
    console.log('Mouse left');
    // Add logic to execute when mouse leaves
    // For example, reset a variable or style
  }


}

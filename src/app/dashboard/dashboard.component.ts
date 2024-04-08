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


}

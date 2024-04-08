import { Component } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  sidebarItems: any[]; // Define sidebarItems as an array of any type

  constructor() {
    this.sidebarItems = [
      { title: 'Dashboard', route: '/dashboard' },
      { title: 'Patients', route: '/patients' },
      { title: 'Appointments', route: '/appointments' },
      // Add more sidebar items as needed
    ];
  }

  ngOnInit(): void {
    // Initialization code here if needed
  }

}

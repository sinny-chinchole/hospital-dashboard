import { Component } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewComponent {
  CompareAccountTable: boolean = false;
  showDropdownForLastRow: boolean = false;
  compareAccountViewdata: any[] = [];
  compareAccountColumnsdata: any[] = [];
  ExportArray: any[] = [];

  constructor() {
    this.ExportArray = [
      { name: 'Excel', id: 1 },
      { name: 'PDF', id: 2 },
    ];

    this.compareAccountColumnsdata = [
      { field: 'parametersCompared', header: 'Parameters Compared' },
      { field: 'oldAccount', header: 'Old Account' },
      { field: 'newAccount', header: 'New Account' },
      { field: 'remarks', header: 'Remarks' },
    ];

    this.compareAccountViewdata = [
      {
        parametersCompared: 'Start Date',
        oldAccount: '08-25-2025',
        newAccount: '02-25-2025',
        remarks: "Matches with the old account's end date",
      },
      {
        parametersCompared: 'End Date',
        oldAccount: '02-25-2025',
        newAccount: '08-25-2025',
        remarks: 'Matches with the start date of new account',
      },
      {
        parametersCompared: 'Name',
        oldAccount: 'sumit',
        newAccount: 'fgh',
        remarks: 'fgh',
      },
    ];
  }

  openCompareAccountTable() {
    this.CompareAccountTable = true;
  }

  addRow() {
    const newRow = {
      parametersCompared: '',
      oldAccount: '',
      newAccount: '',
      remarks: '',
      showDropdown: false, // Initially set to false for all rows
    };
    this.compareAccountViewdata.push(newRow);
    // Set showDropdown to true only for the last row
    const lastIndex = this.compareAccountViewdata.length - 1;
    this.compareAccountViewdata[lastIndex].showDropdown = true;
  }
  saveData(){
    console.log('Saving data:', this.compareAccountViewdata);

    // For demonstration purposes, you can clear the form data after saving
    this.compareAccountViewdata = [];
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

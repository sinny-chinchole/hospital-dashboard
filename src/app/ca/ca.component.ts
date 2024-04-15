import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-ca',
  templateUrl: './ca.component.html',
  styleUrl: './ca.component.scss'
})
export class CaComponent {
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


}

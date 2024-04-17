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
  AssignArray: any[] = [];
  ReviewArray: any[] = [];
  ParaArray: { name: string; id: string; }[];

  constructor() {
    this.ExportArray = [
      { name: 'Excel', id: 1 },
      { name: 'PDF', id: 2 },
    ];
    this.AssignArray = [
      { name: 'William', id: 1 },
      { name: 'Thomas', id: 2 },
      { name: 'Michael', id: 3 },
      { name: 'Robert', id: 4 },
    ];
    this.ReviewArray= [
      { name: 'Yes', id: 1},
      { name: 'No', id: 2}
    ]
    this.ParaArray=[
      { name:'Parameter1', id:'1'},
      { name:'Parameter2', id:'2'},
      { name:'Parameter3', id:'3'},

    ]

    this.compareAccountColumnsdata = [
      { field: 'parametersCompared', header: 'Parameters Compared' },
      { field: 'oldAccount', header: 'Old Account' },
      { field: 'newAccount', header: 'New Account' },
      { field: 'remarks', header: 'Remarks' },
    ];

    this.compareAccountViewdata = [
      {
        parametersCompared: '1',
        oldAccount: '1',
        newAccount: '1',
        remarks: "1",
      },
      {
        parametersCompared: '2',
        oldAccount: '2',
        newAccount: '2',
        remarks: '2',
      },
      {
        parametersCompared: '3',
        oldAccount: '3',
        newAccount: '3',
        remarks: '3',
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

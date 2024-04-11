import { Component } from '@angular/core';

@Component({
  selector: 'app-compare-results',
  templateUrl: './compare-results.component.html',
  styleUrl: './compare-results.component.scss'
})
export class CompareResultsComponent {
  account1: string = ''; // First bank account number
  account2: string = ''; // Second bank account number
  differences: string[] = []; // Array to hold the differences

  compareAccounts() {
    // Clear previous differences
    this.differences = [];

    if (this.account1 && this.account2 && this.account1.length === this.account2.length) {
      for (let i = 0; i < this.account1.length; i++) {
        if (this.account1[i] !== this.account2[i]) {
          this.differences.push(`Position ${i + 1}: ${this.account1[i]} !== ${this.account2[i]}`);
        }
      }
    } else {
      this.differences.push('Accounts are not of the same length or are empty.');
    }
  }

}

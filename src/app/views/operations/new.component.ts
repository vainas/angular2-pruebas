import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Operation } from './operation';

@Component({
  selector: 'cf-new',
  template: `
  <h2>{{ title | uppercase }}</h2>
  <form class="container" #operationForm="ngForm">
    <label for="description">Description</label>
    <input name="description"
          #descriptionInput
          [value]="operation.description"
          (change)="operation.description=descriptionInput.value"
          type="text" />
    <label for="amount">Amount</label>
    <input name="amount" id="amount"
          [(ngModel)]="operation.amount"
          required 
          #amountModel="ngModel"
          type="number"/>
    <span *ngIf="amountModel.invalid && (amountModel.dirty || amountModel.touched)">
          {{amountModel.errors | json}}
    </span>
    <label>Kind of Operation</label>
    <select name="kind" [(ngModel)]="operation.kind">
      <option [value]="">Please select a kind</option>
      <option *ngFor="let kind of kindsOfOperations"
            [value]="kind">{{kind}}</option>
    </select>
    <button (click)="saveOperation()" [disabled]="operationForm.invalid">Save</button>
  </form>
  <blockquote>
    Number of Operations:{{ numberOfOperations }}
    <em>Current: {{ operation | json }}</em>
  </blockquote>
  `,
  styles: []
})
export class NewComponent implements OnInit {
  @Input() public numberOfOperations = 0;
  @Output() public save = new EventEmitter<Operation>();

  public kindsOfOperations = ["Income", "Expense"];
  public operation: Operation = new Operation();
  public title = "New Operation";

  constructor() { }

  ngOnInit() {
  }

  public saveOperation() {
    this.save.emit(this.operation);
    this.operation = new Operation();
  }

}

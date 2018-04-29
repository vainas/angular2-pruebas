import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Operation } from './operation';

@Component({
  selector: 'cf-list',
  template: `<table *ngIf="numberOfOperations>0;else emptyList">
  <thead>
    <tr>
      <th>Description</th>
      <th>Kind</th>
      <th>Amount</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let operation of operations">
      <td><a [routerLink]="operation._id">{{ operation._id }}</a></td>
      <td>{{ operation.description }}</td>
      <td>{{ operation.kind }}</td>
      <td>{{ operation.amount | number:'7.2-2' }}</td>
      <td><button (click)="deleteOperation(operation)">Delete</button> </td>
    </tr>
  </tbody>
</table>
<ng-template #emptyList>
  <h3>No operations yet.</h3>
</ng-template>
  `,
  styles: []
})
export class ListComponent implements OnInit {
  @Input() public numberOfOperations = 0;
  @Input() public operations: Operation[] = [];

  @Output() public delete = new EventEmitter<Operation>();

  constructor() { }

  ngOnInit() {
  }

  public deleteOperation(operation: Operation) {
    this.delete.emit(operation);
  }

}

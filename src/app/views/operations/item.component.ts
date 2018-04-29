import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Operation } from './operation';
import { OperationsService } from './operations.service';

@Component({
  selector: 'cf-item',
  template: `<h3>{{ operation._id }}</h3>
  <div>{{ operation.description }}</div>
  <div>{{ operation.kind }}</div>
  <div>{{ operation.amount }}</div>`,
  styles: []
})
export class ItemComponent implements OnInit {
  public operation: Operation;
  constructor(private route: ActivatedRoute,
  private operationService: OperationsService) { }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.operation = this.operationService.getOperationById(id);
  }

}

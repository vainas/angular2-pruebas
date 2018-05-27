import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Operation } from './operation';
import { OperationsService } from './operations.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'cf-item',
  template: `<h2>Operation Details</h2>
  <h3>{{ operation | json }}</h3>
  <h4>{{ message }}</h4>
  <h5>{{ fullError | json }}</h5>`,
  styles: []
})
export class ItemComponent implements OnInit {
  private _id: string;
  public operation: Operation;
  public message: string;
  public fullError: any;


  constructor(private route: ActivatedRoute,
  private operationService: OperationsService) { }

  ngOnInit() {
    this._id = this.getIdFromRoute();
    this.getDataById();
  }

  private getIdFromRoute() {
    return this.route.snapshot.params["id"];
  }

  private getDataById() {
    this.operationService.getOperationById$(this._id)
    .subscribe(this.showData, this.catchError);
  }

  private showData = operation => {
    this.operation = operation;
    this.message = `Found data for _id: ${this._id}`;
  };

  private catchError= err => {
    if (err instanceof HttpErrorResponse) {
      this.catchHttpError(err);
    } else {
      this.message = `Unknown error, text: ${err.message}`;
    }
    this.fullError = err;
  };

  private catchHttpError(err: HttpErrorResponse) {
    if (err.status == 404) {
      this.showNotFoundError();
    } else {
      this.showServerError(err);
    }
  }
  
  private showNotFoundError() {
    this.message = `NOT FOUND data for _id: ${this._id} !!!`;
    this.fullError = null;
  }

  private showServerError(err: HttpErrorResponse) {
    this.message = `Server returned code ${err.status}, text: ${
      err.statusText
    }`;
    this.fullError = err;
  }
}

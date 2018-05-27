import { Injectable } from '@angular/core';
import { Operation } from './operation';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { environment } from '../../../environments/environment';

@Injectable()
export class OperationsService {
  private operations: Operation[] = [];
  private url = environment.apiUrl + "pub/items";
  
  constructor(private http: HttpClient) { }

  public getNumberOfOperations(): number {
    return this.operations.length;
  }

  public getOperationsList(): Operation[] {
    return this.operations;
  }

  public getOperationById(id: string): Operation {
    return this.operations.find(o => o._id === id);
  }

  public saveOperation(operation: Operation) {
    operation._id = new Date().getTime().toString();
    this.operations.push(operation);
  }

  public deleteOperation(operation: Operation) {
    const index = this.operations.indexOf(operation);
    this.operations.splice(index,1);
  }

  public getOperationsList$(): Observable<Operation[]> {
    return this.http.get<Operation[]>(this.url);
  }
  public getOperationById$(id: string): Observable<Operation> {
    return this.http.get<Operation>(this.url + "/" + id);
  }
  public saveOperation$(operation: Operation): Observable<any> {
    return this.http.post(this.url, operation);
  }
  public deleteOperation$(operation: Operation): Observable<any> {
    return this.http.delete(this.url + "/" + operation._id);
  }
  public getNumberOfOperations$(): Observable<any> {
    return this.http.get(this.url + "/count");
  }

}

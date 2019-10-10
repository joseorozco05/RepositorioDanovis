import { Injectable } from '@angular/core';
import {Electivas} from '../models/electivas';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ElectivasDataService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private electivasUrl = 'api/electivas';

  constructor(private http: HttpClient) { }
  
  add (electivas:Electivas): Observable<Electivas>{
    return this.http.post<Electivas>(this.electivasUrl, electivas,  this.httpOptions).pipe(
      tap((newElectivas: Electivas) => this.log(`Se registro la informacion con el id=${newElectivas.id}`)),
      catchError(this.handleError<Electivas>('add'))
      );

  }

   
  searchElectivas(id: number): Observable<Electivas> {
    if (!id) {
      // if not search term, return empty hero array.
      return of();
    }
    return this.http.get<Electivas>(`${this.electivasUrl}/${id}`).pipe(
      tap(_ => this.log(`Se encontro la inscripcion ${id}`)),
      catchError(this.handleError<Electivas>(`searchLibro id=${id}`))
    );
  }

  getElectivas(): Observable<Electivas[]> {
    return this.http.get<Electivas[]>(this.electivasUrl).pipe(
      tap(electiva => {
        return this.log('Consulta de estudiantes registrados');
      }),
      catchError(this.handleError<Electivas[]>('getElectivas', [])));
  }

  deleteElectivas(electivas: Electivas | number): Observable<Electivas> {
    const id = typeof electivas === 'number' ? electivas : electivas.id;
    const url = `${this.electivasUrl}/${id}`;
  
    return this.http.delete<Electivas>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Se eliminó el estudi  con id=${id}`)),
      catchError(this.handleError<Electivas>('deleteElectivas'))
    );
  }

  updateElectivas(electivas: Electivas): Observable<any> {
    return this.http.put(this.electivasUrl, electivas, this.httpOptions).pipe(
      tap(_ => this.log(`Se actualizo el estudiante con id=${electivas.id}`)),
      catchError(this.handleError<any>('updateestud'))
    );
  }

  
  private log(message: string) {
    // this.messageService.add(`taskService: ${message}`);
    alert(`electivasService: ${message}`);
   }
 
   private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
        // TODO: better job of transforming error for user consumption
      this.log(`${operation} Fallo: ${error.message}`);
        // Let the app keep running by returning an empty result.
      return of(result as T);
    };

}
}

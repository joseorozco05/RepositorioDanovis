import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Electivas } from './models/electivas';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements  InMemoryDbService{

  createDb() {
    const electivas = [
      {id: 1, nombre: 'Analisis de Requerimiento', electiva: 'Se requiere visualizar...', correo: 'fghjkl', notificacion: true},
      {id: 2, nombre: 'Diseño de la arquitectura', electiva: 'Se requiere visualizar diseño...',correo:'gjhkjkj', notificacion: true}
    ];

    return {electivas};
  }
  genId(electivas: Electivas[]): number {
    return electivas.length > 0 ? Math.max(...electivas.map(Electivas => Electivas.id)) + 1 : 11;
  }

}

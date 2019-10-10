import { Component, OnInit } from '@angular/core';
import { Electivas } from '../models/electivas';
import {ElectivasDataService} from '../services/electivas-data.service';
import { from } from 'rxjs';



@Component({
  selector: 'app-electivas-list',
  templateUrl: './electivas-list.component.html',
  styleUrls: ['./electivas-list.component.css']
})
export class ElectivasListComponent implements OnInit {
  electiva: Electivas[];
  constructor(private electivasDataService: ElectivasDataService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.electivasDataService.getElectivas().subscribe(electiva => {
      return this.electiva = electiva;
    });
    }

}

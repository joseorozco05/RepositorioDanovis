import { Component, OnInit } from '@angular/core';
import {ElectivasDataService} from '../services/electivas-data.service';
import { from } from 'rxjs';
import { Alert } from 'selenium-webdriver';
import { Electivas } from '../models/electivas';


@Component({
  selector: 'app-electivas-add',
  templateUrl: './electivas-add.component.html',
  styleUrls: ['./electivas-add.component.css']
})
export class ElectivasAddComponent implements OnInit {

  electivas: Electivas;
  electiva:Electivas[];
  constructor(private electivasDataService:ElectivasDataService) { }

  ngOnInit() {
    this.electivas = new Electivas();

  }
  add(): void{
    if (!this.electivas) { return; }
    this.electivasDataService.add(this.electivas)
      .subscribe( electivas  => {
          alert('Se inscribio un estudiante =>');
             });
  }

}

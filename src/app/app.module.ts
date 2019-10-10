import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElectivasListComponent } from './electivas-list/electivas-list.component';
import { ElectivasAddComponent } from './electivas-add/electivas-add.component';
import{ FormsModule} from '@angular/forms';
import {ElectivasDataService} from './services/electivas-data.service';
import { from } from 'rxjs';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ElectivasListComponent,
    ElectivasAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [ElectivasDataService,InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

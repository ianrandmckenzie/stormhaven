import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { ItemDetailComponent }  from './item-detail.component';
import { ItemsComponent }      from './items.component';
import { ItemService }          from './item.service';
import { Globals} from './globals';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AlertModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemDetailComponent,
    ItemsComponent
  ],
  providers: [ ItemService, Globals ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

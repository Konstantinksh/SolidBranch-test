import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { AppNavigator } from './components/navigator/navigator.component';
import { Table } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ListItemComponent,
    AppNavigator,
    Table
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

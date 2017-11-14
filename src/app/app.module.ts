import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule
} from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { RoutingModule } from './routing/routing.module';
  

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    IssueListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

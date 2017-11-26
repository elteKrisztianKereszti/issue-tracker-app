import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  // News
  MatFormFieldModule,
  MatInputModule,
  MatButtonToggleModule
} from '@angular/material'
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { RoutingModule } from './routing/routing.module'; 
// News
import { IssueFormComponent } from './issue-form/issue-form.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { FormsModule } from '@angular/forms';
import { StatusFilterComponent } from './status-filter/status-filter.component';
import { IssueService } from './issue.service';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    IssueListComponent,
    IssueFormComponent,
    IssueDetailComponent,
    StatusFilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,

    // news
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule, 
    //

    FlexLayoutModule,
    RoutingModule,
    // News
    FormsModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }

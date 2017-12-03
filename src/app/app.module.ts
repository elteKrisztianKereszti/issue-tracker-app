import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialItemsModule } from "./modules/material-items.module";
import { AppComponent } from './components/app/app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssueFormComponent } from './components/issue-form/issue-form.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { IssueEditComponent } from './components/issue-edit/issue-edit.component';  
import { StatusFilterComponent } from './components/status-filter/status-filter.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';

import { IssueService } from './services/issue.service'; 
import { AuthService } from "./services/auth.service";  

import { RoutingModule } from './routing/routing.module'; 
import { AuthGuard } from './auth.guard'; 


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    IssueListComponent,
    IssueFormComponent,
    IssueDetailComponent,
    StatusFilterComponent,
    IssueEditComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    RoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialItemsModule
  ],
  providers: [ IssueService, AuthService, AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

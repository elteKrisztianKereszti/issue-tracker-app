import { MainPageComponent } from '../components/main-page/main-page.component';
import { IssueListComponent } from '../components/issue-list/issue-list.component';
import { IssueFormComponent } from '../components/issue-form/issue-form.component';
import { IssueDetailComponent } from '../components/issue-detail/issue-detail.component';
import { IssueEditComponent } from '../components/issue-edit/issue-edit.component';
import { StatusFilterComponent } from '../components/status-filter/status-filter.component';
import { MenuComponent } from '../components/menu/menu.component';
import { LoginComponent } from '../components/login/login.component';
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    MainPageComponent,
    IssueListComponent, IssueFormComponent, IssueDetailComponent, IssueEditComponent,
    StatusFilterComponent,
    MenuComponent,
    LoginComponent
  ],
  exports: [
    MainPageComponent,
    IssueListComponent, IssueFormComponent, IssueDetailComponent, IssueEditComponent,
    StatusFilterComponent,
    MenuComponent,
    LoginComponent
  ],
})
export class ComponentItemsModule { }

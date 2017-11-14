import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from '../app.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { IssueListComponent } from '../issue-list/issue-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: MainPageComponent
  },
  {
    path: 'issues',
    component: IssueListComponent
  },
//   {
//     path: 'issues/add',
//     component: IssueFormComponent
//   },
//   {
//     path: 'issues/:id',
//     component: IssueDetailComponent
//   },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
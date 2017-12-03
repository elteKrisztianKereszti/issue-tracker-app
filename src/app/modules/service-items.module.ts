import { IssueService } from '../services/issue.service';
import { AuthService } from "../services/auth.service";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    IssueService,
    AuthService,
  ],
  exports: [
    IssueService,
    AuthService,
  ],
})
export class ServiceItemsModule { }

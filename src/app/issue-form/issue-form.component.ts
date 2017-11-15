import { Component, OnInit, Input  } from '@angular/core'; 
import { Issue } from '../Issue';

@Component({
  selector: 'issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.css']
})
export class IssueFormComponent implements OnInit {

  @Input() issue: Issue

  constructor() { }

  ngOnInit() {
  }
  

}

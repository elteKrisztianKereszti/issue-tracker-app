import { Component, OnInit } from '@angular/core'; 
import { Issue } from "../issue";  

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  selectedIssue: Issue;
  selectedStatus: string = '';
  issues: Issue[] = [  
    {  
      id: 1,  
      location: 'PC5',  
      description: 'Bad',  
      status: 'NEW',  
    }, 
    {  
      id: 2,  
      location: 'PC5',  
      description: 'Very Bad',  
      status: 'INPROGRESS',  
    }, 
    {  
      id: 3,  
      location: 'PC7',  
      description: 'Average',  
      status: 'INPROGRESS',  
    },  
    {  
      id: 4,  
      location: 'PC3',  
      description: 'Broken Heart',  
      status: 'RESOLVED'  
    },  
  ];
  filteredIssues: Issue[];
 

  constructor() { }

  ngOnInit() {
    this.filter();
  }

  onSelectIssue(issue) {
    this.selectedIssue = issue;
  }

  onFilterChange(status: string) {
    this.selectedStatus = status;
    this.filter();
  }
  
  filter() {
    this.filteredIssues = this.selectedStatus === ''
    ? this.issues
    : this.issues.filter(issue => issue.status === this.selectedStatus);
  }


}

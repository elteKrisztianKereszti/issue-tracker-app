import { Injectable } from '@angular/core';
import { Issue } from "./issue";

@Injectable()
export class IssueService {

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

  constructor() { }

  getIssues() {
    return this.issues;
  }

  getIssue(id) {
    return this.issues.find(i => i.id == id);
  }


}

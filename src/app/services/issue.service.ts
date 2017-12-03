import { Injectable } from '@angular/core';
import { Issue } from "../models/issue";
import { HttpClient, HttpHeaders } from "@angular/common/http"; 
import { Observable } from "rxjs"; 

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'}
  )
}

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

  constructor(
    private http: HttpClient
  ) { }

  getIssues() : Observable<Issue[]> {
    //return this.issues;
    return this.http.get<Issue[]>('api/issues');
  }

  getIssuesSlowly() : Promise<Issue[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.issues);
      }, 4000)
    })
  }

  getIssue(id: number) : Promise<Issue> {
    //return this.issues.find(i => i.id == id);
    return this.http.get<Issue>(`api/issues/${id}`).toPromise();
  }

  addIssue(issue: Issue) {
    console.log(issue);
    return this.http.post(
      `api/issues`,
      issue
    ).toPromise();
  }

  updateIssue(id: number, issue:Issue): Promise<Issue> {
    return this.http.put<Issue>(
      `api/issues/${id}`,
      issue,
      httpOptions
    ).toPromise();
  }

}

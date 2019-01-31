import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Issue } from '../models/isssue';

const apiPrefix = 'api';

@Injectable({
  providedIn: 'root'
})
export class IssuesService {
  constructor(private httpClient: HttpClient) {}

  getAllIssues(): Observable<Issue[]> {
    return this.httpClient.get<Issue[]>(`${apiPrefix}/issues`);
  }
}

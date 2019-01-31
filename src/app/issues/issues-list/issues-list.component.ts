import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Issue} from "../../models/isssue";
import {IssuesService} from "../../services/issues.service";

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss']
})
export class IssuesListComponent implements OnInit {

  issues$: Observable<Issue[]>;

  constructor(private issuesService: IssuesService) {
  }

  ngOnInit() {
    this.issues$ = this.issuesService.getAllIssues();
  }

}

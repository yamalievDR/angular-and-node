import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IssuesListComponent} from "./issues/issues-list/issues-list.component";

const routes: Routes = [{path: '', pathMatch: 'full', redirectTo: 'issues'},
  {
    path: 'issues',
    component: IssuesListComponent
  },
  {path: '**', redirectTo: 'issues'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

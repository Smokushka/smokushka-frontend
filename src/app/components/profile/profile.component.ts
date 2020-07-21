import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Apollo, QueryRef, SubscriptionResult } from 'apollo-angular';
// import { MatTable } from '@angular/material';
import gql from 'graphql-tag';
import { MatTable } from '@angular/material/table';
import { Salesforce_Opportunity_Portal_UsersSubSubscription, Salesforce_Opportunity_Portal_UsersSubGQL, Salesforce_Opportunity_Portal_Users } from '../../../generated/graphql'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  opportunities$: Observable<Salesforce_Opportunity_Portal_UsersSubSubscription['salesforce_opportunity_portal_users']>;
  queryRef: Observable<SubscriptionResult<Salesforce_Opportunity_Portal_UsersSubSubscription>>;
  error: any;
  displayedColumns: string[] = ['name', 'amount'];
  @ViewChild('opportunitiesTable') opportutiesTable: MatTable<Element>;
  constructor(public auth: AuthService, private apollo: Apollo, private salesforce_opportunity_portal_usersSubGQL: Salesforce_Opportunity_Portal_UsersSubGQL) { 

  }
  
  ngOnInit(): void {
    let toggle: boolean = false;
  }

  getPortalOpportunities() {
    this.queryRef = this.salesforce_opportunity_portal_usersSubGQL.subscribe();
    this.opportunities$ = this.queryRef.pipe(
      map((result) => result.data.salesforce_opportunity_portal_users)
    )
  }
refreshOpportunities() {
  this.opportutiesTable.renderRows;
}
}

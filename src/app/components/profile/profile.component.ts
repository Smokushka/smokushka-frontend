import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Apollo, QueryRef, SubscriptionResult } from 'apollo-angular';
// import { MatTable } from '@angular/material';
import gql from 'graphql-tag';
import { MatTable } from '@angular/material/table';
import { Salesforce_Opportunity_Portal_UsersSubSubscription, Salesforce_Opportunity_Portal_UsersSubGQL, Salesforce_Opportunity_Portal_Users, OpportunityGQL, Salesforce_Opportunity_Portal_UsersGQL, DeleteOpportunityGQL } from '../../../generated/graphql'
import { Observable, throwError } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators'
import { HttpHeaders } from '@angular/common/http';
import { WebSocketLink } from 'apollo-link-ws';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import { ApolloLink } from 'apollo-link';
import { getOperationAST } from 'graphql';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OpportunityEditDialogComponent } from '../opportunity-edit-dialog/opportunity-edit-dialog.component';

export interface DialogData {
  id: string;
  action: string;
}



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  opportunities$: Observable<Salesforce_Opportunity_Portal_UsersSubSubscription['salesforce_opportunity_portal_users']>;
  queryRef: Observable<SubscriptionResult<Salesforce_Opportunity_Portal_UsersSubSubscription>>;
  error: any;
  displayedColumns: string[] = ['name', 'amount','edit'];
  @ViewChild('opportunitiesTable') opportutiesTable: MatTable<Element>;
  constructor(
    private opportunity: Salesforce_Opportunity_Portal_UsersGQL,
    public dialog: MatDialog,
    public auth: AuthService,
    private salesforce_opportunity_portal_usersSubGQL: Salesforce_Opportunity_Portal_UsersSubGQL,
    private apollo: Apollo,
    private deleteOpportunity: DeleteOpportunityGQL) { 
  }
  
  ngOnInit(): void {
    let toggle: boolean = false;
  }

  getPortalOpportunities() {
    this.queryRef = this.salesforce_opportunity_portal_usersSubGQL.subscribe();
    this.opportunities$ = this.queryRef.pipe(
      map((result) => result.data.salesforce_opportunity_portal_users)
    )
    // this.opportunity.watch().valueChanges.pipe(map(result => console.log(result)))
  // this.opportutiesTable.renderRows;
}
  openOpportunityEditDialog(id: string): void {
    console.log(id)
    const dialogRef = this.dialog.open(OpportunityEditDialogComponent, {
      data: {
        id: id,
        action: 'Edit'
      },
      width: '500px'
    });
  }
  onDeleteHandler(id: string) {
    this.deleteOpportunity.mutate({
      id
    }).pipe(map(result => console.log(result))).subscribe();
  }
  onNewHandler() {
    const dialogRef = this.dialog.open(OpportunityEditDialogComponent, {
      data: {
        action: 'New'
      },
      width: '500px'
    });
  }
}

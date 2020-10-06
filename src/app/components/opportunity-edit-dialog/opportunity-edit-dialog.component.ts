import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../profile/profile.component';
import { Apollo, QueryRef, SubscriptionResult } from 'apollo-angular';
import { OpportunityGQL,OpportunityQuery, Salesforce_Opportunity_Portal_UsersGQL, Salesforce_Opportunity_Portal_Users, Salesforce_Opportunity_Portal_UsersQuery, UpdateOpportunityGQL, InsertOpportunityGQL, CurrentUserGQL, Salesforce_Portal_User__C } from 'src/generated/graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { newArray } from '@angular/compiler/src/util';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CurrentUserService } from 'src/app/services/current-user.service'
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { v4 as uuidv4 } from 'uuid';
// 2
export const query = gql`
  query salesforce_opportunity_portal_users {
    salesforce_opportunity_portal_users {
        createddate
        name
        amount
        stagename
        portal_user_heroku_connect_id__c
    }
}
`;
export interface CurrentUser {
  name: string,
  email: string,
  heroku_connect_id__c: string
}

interface Opportunity {
    name: String
    amount: Number
    stagename: String
    closedate: Date
}
interface OpportunityStages {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-opportunity-edit-dialog',
  templateUrl: './opportunity-edit-dialog.component.html',
  styleUrls: ['./opportunity-edit-dialog.component.css']
})
export class OpportunityEditDialogComponent implements OnInit {
  today: Date = new Date();
  events: string[] = [];
  opportunityStages: OpportunityStages[] = [
    {value: 'Prospecting', viewValue: 'Prospecting'},
    {value: 'Qualification', viewValue: 'Qualification'},
    {value: 'Needs Analysis', viewValue: 'Needs Analysis'},
    {value: 'Value Proposition', viewValue: 'Value Proposition'},
    {value: 'Id. Decision Makers', viewValue: 'Id. Decision Makers'},
    {value: 'Perception Analysis', viewValue: 'Perception Analysis'},
    {value: 'Proposal/Price Quote', viewValue: 'Proposal/Price Quote'},
    {value: 'Negotiation/Review', viewValue: 'Negotiation/Review'},
    {value: 'Closed Won', viewValue: 'Closed Won'},
    {value: 'Closed Lost', viewValue: 'Closed Lost'},

  ];
  displayedColumns: string[] = ['name', 'amount'];

  opps: Opportunity[] = [];
  userId: string = '';
  opportunities$: Observable<Salesforce_Opportunity_Portal_Users[]>;
  queryRef: QueryRef<any>;
  profile: CurrentUser = {
    name: '',
    heroku_connect_id__c: ''
  };
  editOpportunityForm = this.fb.group({
    name: ['', Validators.required],
    amount: ['',Validators.required],
    stagename: ['',Validators.required],
    closedate: ['',Validators.required]
  });

  constructor(private apollo: Apollo, public dialogRef: MatDialogRef<OpportunityEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private opportunity: OpportunityGQL,
    private fb: FormBuilder,
    private updateOpportunity: UpdateOpportunityGQL,
    private insertOpportunity: InsertOpportunityGQL,
    public auth: AuthService,
    private currentUser: CurrentUserGQL) { 
    }    
  
    ngOnInit(): void {
    if(this.data.action === 'Edit') {
      this.opportunity.watch({
          id: this.data.id
        }).valueChanges.pipe(map(result => result.data.salesforce_opportunity_portal_users),map(result => {
          result.forEach(item => {
              const opp = {
                name: item.name,
                amount: item.amount,
                stagename: item.stagename,
                closedate: item.closedate
              };
              this.opps.push(opp);
            });
          this.editOpportunityForm.patchValue({
            name: this.opps[0].name,
            amount: this.opps[0].amount,
            stagename: this.opps[0].stagename,
            closedate: this.opps[0].closedate
          });
          return result;
        })).subscribe();
    } else {
      this.currentUser.watch().valueChanges.pipe(
        map(result => 
        result.data.salesforce_portal_user__c
      ),
      map(result => {
        this.profile.name = result[0].name;
        this.profile.heroku_connect_id__c = result[0].heroku_connect_id__c;
        console.log(this.profile);
      })).subscribe();
      }
  
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
  onSubmit() {
    // this.apollo.watchQuery({
    //   query: query
    // }).valueChanges.subscribe((response) => console.log(response.data))
    if(this.data.action === 'Edit'){    
      this.updateOpportunity.mutate({
          id: this.data.id,
          name: this.editOpportunityForm.value.name,
          amount: this.editOpportunityForm.value.amount,
          stagename: this.editOpportunityForm.value.stagename,
          closedate: this.editOpportunityForm.value.closedate
        }).
        pipe(
          map(result => console.log(result))).
          subscribe();
        console.log('click');
        console.log(this.editOpportunityForm.value);
        this.dialogRef.close([]);

      } else {
        this.insertOpportunity.mutate({
          userId: this.profile.heroku_connect_id__c,
          id: uuidv4(),
          name: this.editOpportunityForm.value.name,
          amount: this.editOpportunityForm.value.amount,
          stagename: this.editOpportunityForm.value.stagename,
          closedate: this.editOpportunityForm.value.closedate
        }).subscribe();
        this.dialogRef.close([]);
        console.log(this.editOpportunityForm);
      }
}}

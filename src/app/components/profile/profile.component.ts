import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const query = gql`
{
  salesforce_portal_user__c {
    heroku_connect_id__c
    name
  }
}`;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users: {};
  error: any;
  constructor(public auth: AuthService, private apollo: Apollo) { 

  }
  
  ngOnInit(): void {
    let toggle: boolean = false;
  }

  getPortalUser() {
    console.log('click');
    this.apollo.watchQuery({
      query
    })
    .valueChanges.subscribe(result => {
      this.users = result.data;
      this.error = result.errors;
      console.log(this.users);
    })
  }

}

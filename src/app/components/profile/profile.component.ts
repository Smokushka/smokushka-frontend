import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Apollo, QueryRef, SubscriptionResult } from 'apollo-angular';
// import { MatTable } from '@angular/material';
import gql from 'graphql-tag';
import { MatTable } from '@angular/material/table';
import { Salesforce_Opportunity_Portal_UsersSubSubscription, Salesforce_Opportunity_Portal_UsersSubGQL, Salesforce_Opportunity_Portal_Users } from '../../../generated/graphql'
import { Observable, throwError } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators'
import { HttpHeaders } from '@angular/common/http';
import { WebSocketLink } from 'apollo-link-ws';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import { ApolloLink } from 'apollo-link';
import { getOperationAST } from 'graphql';
import { InMemoryCache } from 'apollo-cache-inmemory';



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
  constructor(private httpLink: HttpLink, public auth: AuthService, private apollo: Apollo, private salesforce_opportunity_portal_usersSubGQL: Salesforce_Opportunity_Portal_UsersSubGQL) { 
        const token2 = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkUtUkZMdVV6NlVIbzlQMG5DYjFieSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6Imdvb2dsZS1vYXV0aDJ8MTA2NjA3MDk3NTE3MzIzNjY4OTcyIn0sImdpdmVuX25hbWUiOiJBbGVrc2FuZHIiLCJmYW1pbHlfbmFtZSI6IlNoYWJhbm92Iiwibmlja25hbWUiOiJzbW9rdXNoa2EiLCJuYW1lIjoiQWxla3NhbmRyIFNoYWJhbm92IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdpRTlzRUdKbm5aUkF3RkZ2R3dzX1lINEZaMGtNaExPYnZhLVI4cHpBIiwibG9jYWxlIjoiZW4tR0IiLCJ1cGRhdGVkX2F0IjoiMjAyMC0wNy0yMVQxNDoyNDoxMy42MjFaIiwiaXNzIjoiaHR0cHM6Ly9zbW9rdXNoa2EudXMuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTA2NjA3MDk3NTE3MzIzNjY4OTcyIiwiYXVkIjoiVUdXdFA5NDVRemNpaUVQTzludURTZHdaZ0ZZV3ZxckIiLCJpYXQiOjE1OTUzNDE0NTMsImV4cCI6MTU5NTM3NzQ1MywiYXRfaGFzaCI6InhSSUtUYmVFV2FRSU5JNUJ3WlBDVUEiLCJub25jZSI6ImFKS1lHY2lMTkFSM0xIckNJNEVKUTJtcXhVX1VyZVlLIn0.Vmd4Q3ERd6ZukVmMw0FNo1GIrtO1Dj5MfinSohp0zNSh6az3iuYMmTKtFmg-gXb96fd0IAxRL4_2my6oQckje4SNqu3KSwTcouOhnrFtxk9A_iaj8M96hYOjzaMGP7v3S6tujVWdlxLeJkKcwpJ5cZq0Sw5hJAC38YucMu0oAGuVYvLGuOVWu3x00bD9G-u0R7E3jBbluCnZJb-PnQz2KsehYw9ccA_j1WLLxCkNarYdYQgyl0EWtlizPe_NfzM4BOBYHcN8UegIeV3sXh2LSRvqciSlZJam3dOflw0VsnG699P7KzhjZ_cHYEjHdjvTHcEuiC_GVc0LPrO61pyWmQ';

        this.auth.getTokenSilently$().subscribe
          ( {
              next: (token) => {
                    const options = {
                      reconnect: true,
                        connectionParams: {
                          headers: {
                            Authorization: `Bearer ${token}`
                          }
                        }
                    }
                    createApollo(options);
              },
              error: (error) => {
                    console.log(error);
                    const options = {
                      reconnect: true
                    };
                    createApollo(options);
              }
            }
          )
        
        function createApollo(options: {}) {
          const wsUri = 'wss://smokushka.herokuapp.com/v1/graphql'; // <-- add the URL of the GraphQL server here    
          const uri = 'https://smokushka.herokuapp.com/v1/graphql'; // <-- add the URL of the GraphQL server here
          const headers = new HttpHeaders();
          const http = httpLink.create({ uri, headers });
      
          const ws = new WebSocketLink({
            uri: wsUri,
            options
          });
      
          // create Apollo
          console.log(ws)
          apollo.create({
            link: ApolloLink.split(
              operation => {
                const operationAST = getOperationAST(operation.query, operation.operationName);
                return !!operationAST && operationAST.operation === 'subscription';
              },
              ws,
              http,
            ),
            cache: new InMemoryCache()
          });
      }
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

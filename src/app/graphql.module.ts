import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS, Apollo} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { ApolloLink, split } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import {WebSocketLink} from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { AuthService } from './services/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { getOperationAST } from 'graphql';
import { map, mapTo, mergeMap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

// const uri = 'https://smokushka.herokuapp.com/v1/graphql'; // <-- add the URL of the GraphQL server here
// const wsUri = 'wss://smokushka.herokuapp.com/v1/graphql'; // <-- add the URL of the GraphQL server here
// interface Definintion {
//   kind: string;
//   operation?: string;
// };
// const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkUtUkZMdVV6NlVIbzlQMG5DYjFieSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6Imdvb2dsZS1vYXV0aDJ8MTA2NjA3MDk3NTE3MzIzNjY4OTcyIn0sImdpdmVuX25hbWUiOiJBbGVrc2FuZHIiLCJmYW1pbHlfbmFtZSI6IlNoYWJhbm92Iiwibmlja25hbWUiOiJzbW9rdXNoa2EiLCJuYW1lIjoiQWxla3NhbmRyIFNoYWJhbm92IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdpRTlzRUdKbm5aUkF3RkZ2R3dzX1lINEZaMGtNaExPYnZhLVI4cHpBIiwibG9jYWxlIjoiZW4tR0IiLCJ1cGRhdGVkX2F0IjoiMjAyMC0wNy0yMVQxNDoyNDoxMy42MjFaIiwiaXNzIjoiaHR0cHM6Ly9zbW9rdXNoa2EudXMuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTA2NjA3MDk3NTE3MzIzNjY4OTcyIiwiYXVkIjoiVUdXdFA5NDVRemNpaUVQTzludURTZHdaZ0ZZV3ZxckIiLCJpYXQiOjE1OTUzNDE0NTMsImV4cCI6MTU5NTM3NzQ1MywiYXRfaGFzaCI6InhSSUtUYmVFV2FRSU5JNUJ3WlBDVUEiLCJub25jZSI6ImFKS1lHY2lMTkFSM0xIckNJNEVKUTJtcXhVX1VyZVlLIn0.Vmd4Q3ERd6ZukVmMw0FNo1GIrtO1Dj5MfinSohp0zNSh6az3iuYMmTKtFmg-gXb96fd0IAxRL4_2my6oQckje4SNqu3KSwTcouOhnrFtxk9A_iaj8M96hYOjzaMGP7v3S6tujVWdlxLeJkKcwpJ5cZq0Sw5hJAC38YucMu0oAGuVYvLGuOVWu3x00bD9G-u0R7E3jBbluCnZJb-PnQz2KsehYw9ccA_j1WLLxCkNarYdYQgyl0EWtlizPe_NfzM4BOBYHcN8UegIeV3sXh2LSRvqciSlZJam3dOflw0VsnG699P7KzhjZ_cHYEjHdjvTHcEuiC_GVc0LPrO61pyWmQ';


// export function createApollo(httpLink: HttpLink) {

//   const http = httpLink.create({
//     uri
//   });
//   // Create a WebSocket link:
//   const ws = new WebSocketLink({
//     uri: wsUri,
//     options: {
//       reconnect: true,
//       connectionParams: {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       }
//     }
//   });
//   // using the ability to split links, you can send data to each link
//     // depending on what kind of operation is being sent
//     const link = split(
//       // split based on operation type
//       ({ query }) => {
//         const { kind, operation }: Definintion = getMainDefinition(query);
//         return kind === 'OperationDefinition' && operation === 'subscription';
//       },
//       ws,
//       http,
//     );
//   const cache = new InMemoryCache();
//   return {
//     link,
//     cache
//   };
// }

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  // providers: [
  //   {
  //     provide: APOLLO_OPTIONS,
  //     useFactory: createApollo,
  //     deps: [HttpLink],
  //   },
  // ],
})
export class GraphQLModule {
  token: String;
  constructor(apollo: Apollo, httpLink: HttpLink, private auth: AuthService) {
  
    const wsUri = 'wss://smokushka.herokuapp.com/v1/graphql'; // <-- add the URL of the GraphQL server here
    
    const token2 = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkUtUkZMdVV6NlVIbzlQMG5DYjFieSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6Imdvb2dsZS1vYXV0aDJ8MTA2NjA3MDk3NTE3MzIzNjY4OTcyIn0sImdpdmVuX25hbWUiOiJBbGVrc2FuZHIiLCJmYW1pbHlfbmFtZSI6IlNoYWJhbm92Iiwibmlja25hbWUiOiJzbW9rdXNoa2EiLCJuYW1lIjoiQWxla3NhbmRyIFNoYWJhbm92IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdpRTlzRUdKbm5aUkF3RkZ2R3dzX1lINEZaMGtNaExPYnZhLVI4cHpBIiwibG9jYWxlIjoiZW4tR0IiLCJ1cGRhdGVkX2F0IjoiMjAyMC0wNy0yMVQxNDoyNDoxMy42MjFaIiwiaXNzIjoiaHR0cHM6Ly9zbW9rdXNoa2EudXMuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTA2NjA3MDk3NTE3MzIzNjY4OTcyIiwiYXVkIjoiVUdXdFA5NDVRemNpaUVQTzludURTZHdaZ0ZZV3ZxckIiLCJpYXQiOjE1OTUzNDE0NTMsImV4cCI6MTU5NTM3NzQ1MywiYXRfaGFzaCI6InhSSUtUYmVFV2FRSU5JNUJ3WlBDVUEiLCJub25jZSI6ImFKS1lHY2lMTkFSM0xIckNJNEVKUTJtcXhVX1VyZVlLIn0.Vmd4Q3ERd6ZukVmMw0FNo1GIrtO1Dj5MfinSohp0zNSh6az3iuYMmTKtFmg-gXb96fd0IAxRL4_2my6oQckje4SNqu3KSwTcouOhnrFtxk9A_iaj8M96hYOjzaMGP7v3S6tujVWdlxLeJkKcwpJ5cZq0Sw5hJAC38YucMu0oAGuVYvLGuOVWu3x00bD9G-u0R7E3jBbluCnZJb-PnQz2KsehYw9ccA_j1WLLxCkNarYdYQgyl0EWtlizPe_NfzM4BOBYHcN8UegIeV3sXh2LSRvqciSlZJam3dOflw0VsnG699P7KzhjZ_cHYEjHdjvTHcEuiC_GVc0LPrO61pyWmQ';

        const authorization = this.token ? `Bearer ${token2}` : null;
        const headers = new HttpHeaders().append('Authorization', authorization);
        const uri = 'https://smokushka.herokuapp.com/v1/graphql'; // <-- add the URL of the GraphQL server here
        const http = httpLink.create({ uri, headers });
    
        const ws = new WebSocketLink({
          uri: wsUri,
          options: {
            reconnect: true,
            connectionParams: {
              headers: {
                Authorization: `Bearer ${token2}`
              }
            }
          }
        });
    
        // create Apollo
        console.log(ws);
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
import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';

const uri = 'https://smokushka.herokuapp.com/v1/graphql'; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink) {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }));
  const token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkUtUkZMdVV6NlVIbzlQMG5DYjFieSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6Imdvb2dsZS1vYXV0aDJ8MTA2NjA3MDk3NTE3MzIzNjY4OTcyIn0sImdpdmVuX25hbWUiOiJBbGVrc2FuZHIiLCJmYW1pbHlfbmFtZSI6IlNoYWJhbm92Iiwibmlja25hbWUiOiJzbW9rdXNoa2EiLCJuYW1lIjoiQWxla3NhbmRyIFNoYWJhbm92IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdpRTlzRUdKbm5aUkF3RkZ2R3dzX1lINEZaMGtNaExPYnZhLVI4cHpBIiwibG9jYWxlIjoiZW4tR0IiLCJ1cGRhdGVkX2F0IjoiMjAyMC0wNy0xNlQyMToxNjo0MS43NzdaIiwiaXNzIjoiaHR0cHM6Ly9zbW9rdXNoa2EudXMuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTA2NjA3MDk3NTE3MzIzNjY4OTcyIiwiYXVkIjoiVUdXdFA5NDVRemNpaUVQTzludURTZHdaZ0ZZV3ZxckIiLCJpYXQiOjE1OTQ5MzQyMDIsImV4cCI6MTU5NDk3MDIwMiwiYXRfaGFzaCI6ImxjX2RNSXFJd0g5ZkxSRGdTT0FlZnciLCJub25jZSI6ImtVNXZMSnBVSzdTMDkyOUxCRkE0TnpWUTliWjl5fn5UIn0.EzW9pIKvCntVujelz__th6kAFvG_zF541HWNznBQmkoxc7SkmAzITt5gsc_P72dr3Hxjm3ZG7GAdKLr4vGT4NBbrZxPNdK3Rkxqu6kHypqs9wtkCb9okp2DzrmUAFRc86yXHianhgI2lGWmep9a3VMDtW9JM4q3zK8LIko8GJ7XNHpl8GJISQdfjHDIweTv0dV600kM-TScs9pR28mYZ18zZDHGpydw6ZkBW7Es39E5cCLk7N89zoB8bJV0q2b0-62AZreDJp6ay2L7b4hU--9nTOfpq2-NIA_FY-0SA9leBz5Fw9em936hKiW4nb51ewyUttAu1N5kvEkJAIKs0Nw';
  const auth = setContext((operation, context) => ({
    headers: {
      Authorization: `Bearer ${token}`
    }
  }));
  const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
  const cache = new InMemoryCache();
  return {
    link,
    cache
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}

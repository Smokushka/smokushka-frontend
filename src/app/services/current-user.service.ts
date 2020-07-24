import { Injectable } from '@angular/core';
import { CurrentUserGQL } from 'src/generated/graphql';
import { map } from 'rxjs/operators';

export interface CurrentUser {
  name: string,
  email: string,
  heroku_connect_id__c: string
}
@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  profile: CurrentUser;
  constructor(
    private curentUser: CurrentUserGQL
  ) { 
  }
  getProfile() {
  }

}

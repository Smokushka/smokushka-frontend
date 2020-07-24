import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  float8: any;
  date: any;
  timestamp: any;
};



/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};


/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "salesforce.opportunity" */
  delete_salesforce_opportunity?: Maybe<Salesforce_Opportunity_Mutation_Response>;
  /** delete single row from the table: "salesforce.opportunity" */
  delete_salesforce_opportunity_by_pk?: Maybe<Salesforce_Opportunity>;
  /** delete data from the table: "salesforce.opportunity_portal_users" */
  delete_salesforce_opportunity_portal_users?: Maybe<Salesforce_Opportunity_Portal_Users_Mutation_Response>;
  /** delete data from the table: "salesforce.portal_user__c" */
  delete_salesforce_portal_user__c?: Maybe<Salesforce_Portal_User__C_Mutation_Response>;
  /** delete single row from the table: "salesforce.portal_user__c" */
  delete_salesforce_portal_user__c_by_pk?: Maybe<Salesforce_Portal_User__C>;
  /** insert data into the table: "salesforce.opportunity" */
  insert_salesforce_opportunity?: Maybe<Salesforce_Opportunity_Mutation_Response>;
  /** insert a single row into the table: "salesforce.opportunity" */
  insert_salesforce_opportunity_one?: Maybe<Salesforce_Opportunity>;
  /** insert data into the table: "salesforce.opportunity_portal_users" */
  insert_salesforce_opportunity_portal_users?: Maybe<Salesforce_Opportunity_Portal_Users_Mutation_Response>;
  /** insert a single row into the table: "salesforce.opportunity_portal_users" */
  insert_salesforce_opportunity_portal_users_one?: Maybe<Salesforce_Opportunity_Portal_Users>;
  /** insert data into the table: "salesforce.portal_user__c" */
  insert_salesforce_portal_user__c?: Maybe<Salesforce_Portal_User__C_Mutation_Response>;
  /** insert a single row into the table: "salesforce.portal_user__c" */
  insert_salesforce_portal_user__c_one?: Maybe<Salesforce_Portal_User__C>;
  /** update data of the table: "salesforce.opportunity" */
  update_salesforce_opportunity?: Maybe<Salesforce_Opportunity_Mutation_Response>;
  /** update single row of the table: "salesforce.opportunity" */
  update_salesforce_opportunity_by_pk?: Maybe<Salesforce_Opportunity>;
  /** update data of the table: "salesforce.opportunity_portal_users" */
  update_salesforce_opportunity_portal_users?: Maybe<Salesforce_Opportunity_Portal_Users_Mutation_Response>;
  /** update data of the table: "salesforce.portal_user__c" */
  update_salesforce_portal_user__c?: Maybe<Salesforce_Portal_User__C_Mutation_Response>;
  /** update single row of the table: "salesforce.portal_user__c" */
  update_salesforce_portal_user__c_by_pk?: Maybe<Salesforce_Portal_User__C>;
};


/** mutation root */
export type Mutation_RootDelete_Salesforce_OpportunityArgs = {
  where: Salesforce_Opportunity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Salesforce_Opportunity_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Salesforce_Opportunity_Portal_UsersArgs = {
  where: Salesforce_Opportunity_Portal_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Salesforce_Portal_User__CArgs = {
  where: Salesforce_Portal_User__C_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Salesforce_Portal_User__C_By_PkArgs = {
  heroku_connect_id__c: Scalars['String'];
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Salesforce_OpportunityArgs = {
  objects: Array<Salesforce_Opportunity_Insert_Input>;
  on_conflict?: Maybe<Salesforce_Opportunity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Salesforce_Opportunity_OneArgs = {
  object: Salesforce_Opportunity_Insert_Input;
  on_conflict?: Maybe<Salesforce_Opportunity_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Salesforce_Opportunity_Portal_UsersArgs = {
  objects: Array<Salesforce_Opportunity_Portal_Users_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Salesforce_Opportunity_Portal_Users_OneArgs = {
  object: Salesforce_Opportunity_Portal_Users_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Salesforce_Portal_User__CArgs = {
  objects: Array<Salesforce_Portal_User__C_Insert_Input>;
  on_conflict?: Maybe<Salesforce_Portal_User__C_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Salesforce_Portal_User__C_OneArgs = {
  object: Salesforce_Portal_User__C_Insert_Input;
  on_conflict?: Maybe<Salesforce_Portal_User__C_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Salesforce_OpportunityArgs = {
  _inc?: Maybe<Salesforce_Opportunity_Inc_Input>;
  _set?: Maybe<Salesforce_Opportunity_Set_Input>;
  where: Salesforce_Opportunity_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Salesforce_Opportunity_By_PkArgs = {
  _inc?: Maybe<Salesforce_Opportunity_Inc_Input>;
  _set?: Maybe<Salesforce_Opportunity_Set_Input>;
  pk_columns: Salesforce_Opportunity_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Salesforce_Opportunity_Portal_UsersArgs = {
  _inc?: Maybe<Salesforce_Opportunity_Portal_Users_Inc_Input>;
  _set?: Maybe<Salesforce_Opportunity_Portal_Users_Set_Input>;
  where: Salesforce_Opportunity_Portal_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Salesforce_Portal_User__CArgs = {
  _inc?: Maybe<Salesforce_Portal_User__C_Inc_Input>;
  _set?: Maybe<Salesforce_Portal_User__C_Set_Input>;
  where: Salesforce_Portal_User__C_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Salesforce_Portal_User__C_By_PkArgs = {
  _inc?: Maybe<Salesforce_Portal_User__C_Inc_Input>;
  _set?: Maybe<Salesforce_Portal_User__C_Set_Input>;
  pk_columns: Salesforce_Portal_User__C_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "salesforce.opportunity" */
  salesforce_opportunity: Array<Salesforce_Opportunity>;
  /** fetch aggregated fields from the table: "salesforce.opportunity" */
  salesforce_opportunity_aggregate: Salesforce_Opportunity_Aggregate;
  /** fetch data from the table: "salesforce.opportunity" using primary key columns */
  salesforce_opportunity_by_pk?: Maybe<Salesforce_Opportunity>;
  /** fetch data from the table: "salesforce.opportunity_portal_users" */
  salesforce_opportunity_portal_users: Array<Salesforce_Opportunity_Portal_Users>;
  /** fetch aggregated fields from the table: "salesforce.opportunity_portal_users" */
  salesforce_opportunity_portal_users_aggregate: Salesforce_Opportunity_Portal_Users_Aggregate;
  /** fetch data from the table: "salesforce.portal_user__c" */
  salesforce_portal_user__c: Array<Salesforce_Portal_User__C>;
  /** fetch aggregated fields from the table: "salesforce.portal_user__c" */
  salesforce_portal_user__c_aggregate: Salesforce_Portal_User__C_Aggregate;
  /** fetch data from the table: "salesforce.portal_user__c" using primary key columns */
  salesforce_portal_user__c_by_pk?: Maybe<Salesforce_Portal_User__C>;
};


/** query root */
export type Query_RootSalesforce_OpportunityArgs = {
  distinct_on?: Maybe<Array<Salesforce_Opportunity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Salesforce_Opportunity_Order_By>>;
  where?: Maybe<Salesforce_Opportunity_Bool_Exp>;
};


/** query root */
export type Query_RootSalesforce_Opportunity_AggregateArgs = {
  distinct_on?: Maybe<Array<Salesforce_Opportunity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Salesforce_Opportunity_Order_By>>;
  where?: Maybe<Salesforce_Opportunity_Bool_Exp>;
};


/** query root */
export type Query_RootSalesforce_Opportunity_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootSalesforce_Opportunity_Portal_UsersArgs = {
  distinct_on?: Maybe<Array<Salesforce_Opportunity_Portal_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Salesforce_Opportunity_Portal_Users_Order_By>>;
  where?: Maybe<Salesforce_Opportunity_Portal_Users_Bool_Exp>;
};


/** query root */
export type Query_RootSalesforce_Opportunity_Portal_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Salesforce_Opportunity_Portal_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Salesforce_Opportunity_Portal_Users_Order_By>>;
  where?: Maybe<Salesforce_Opportunity_Portal_Users_Bool_Exp>;
};


/** query root */
export type Query_RootSalesforce_Portal_User__CArgs = {
  distinct_on?: Maybe<Array<Salesforce_Portal_User__C_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Salesforce_Portal_User__C_Order_By>>;
  where?: Maybe<Salesforce_Portal_User__C_Bool_Exp>;
};


/** query root */
export type Query_RootSalesforce_Portal_User__C_AggregateArgs = {
  distinct_on?: Maybe<Array<Salesforce_Portal_User__C_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Salesforce_Portal_User__C_Order_By>>;
  where?: Maybe<Salesforce_Portal_User__C_Bool_Exp>;
};


/** query root */
export type Query_RootSalesforce_Portal_User__C_By_PkArgs = {
  heroku_connect_id__c: Scalars['String'];
  id: Scalars['Int'];
};

/** columns and relationships of "salesforce.opportunity" */
export type Salesforce_Opportunity = {
  __typename?: 'salesforce_opportunity';
  _hc_err?: Maybe<Scalars['String']>;
  _hc_lastop?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['float8']>;
  closedate?: Maybe<Scalars['date']>;
  createddate?: Maybe<Scalars['timestamp']>;
  heroku_connect_id__c?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isdeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  portal_user__r?: Maybe<Salesforce_Portal_User__C>;
  portal_user_heroku_connect_id__c?: Maybe<Scalars['String']>;
  sfid?: Maybe<Scalars['String']>;
  stagename?: Maybe<Scalars['String']>;
  systemmodstamp?: Maybe<Scalars['timestamp']>;
};

/** aggregated selection of "salesforce.opportunity" */
export type Salesforce_Opportunity_Aggregate = {
  __typename?: 'salesforce_opportunity_aggregate';
  aggregate?: Maybe<Salesforce_Opportunity_Aggregate_Fields>;
  nodes: Array<Salesforce_Opportunity>;
};

/** aggregate fields of "salesforce.opportunity" */
export type Salesforce_Opportunity_Aggregate_Fields = {
  __typename?: 'salesforce_opportunity_aggregate_fields';
  avg?: Maybe<Salesforce_Opportunity_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Salesforce_Opportunity_Max_Fields>;
  min?: Maybe<Salesforce_Opportunity_Min_Fields>;
  stddev?: Maybe<Salesforce_Opportunity_Stddev_Fields>;
  stddev_pop?: Maybe<Salesforce_Opportunity_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Salesforce_Opportunity_Stddev_Samp_Fields>;
  sum?: Maybe<Salesforce_Opportunity_Sum_Fields>;
  var_pop?: Maybe<Salesforce_Opportunity_Var_Pop_Fields>;
  var_samp?: Maybe<Salesforce_Opportunity_Var_Samp_Fields>;
  variance?: Maybe<Salesforce_Opportunity_Variance_Fields>;
};


/** aggregate fields of "salesforce.opportunity" */
export type Salesforce_Opportunity_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Salesforce_Opportunity_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "salesforce.opportunity" */
export type Salesforce_Opportunity_Aggregate_Order_By = {
  avg?: Maybe<Salesforce_Opportunity_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Salesforce_Opportunity_Max_Order_By>;
  min?: Maybe<Salesforce_Opportunity_Min_Order_By>;
  stddev?: Maybe<Salesforce_Opportunity_Stddev_Order_By>;
  stddev_pop?: Maybe<Salesforce_Opportunity_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Salesforce_Opportunity_Stddev_Samp_Order_By>;
  sum?: Maybe<Salesforce_Opportunity_Sum_Order_By>;
  var_pop?: Maybe<Salesforce_Opportunity_Var_Pop_Order_By>;
  var_samp?: Maybe<Salesforce_Opportunity_Var_Samp_Order_By>;
  variance?: Maybe<Salesforce_Opportunity_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "salesforce.opportunity" */
export type Salesforce_Opportunity_Arr_Rel_Insert_Input = {
  data: Array<Salesforce_Opportunity_Insert_Input>;
  on_conflict?: Maybe<Salesforce_Opportunity_On_Conflict>;
};

/** aggregate avg on columns */
export type Salesforce_Opportunity_Avg_Fields = {
  __typename?: 'salesforce_opportunity_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "salesforce.opportunity" */
export type Salesforce_Opportunity_Avg_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "salesforce.opportunity". All fields are combined with a logical 'AND'. */
export type Salesforce_Opportunity_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Salesforce_Opportunity_Bool_Exp>>>;
  _hc_err?: Maybe<String_Comparison_Exp>;
  _hc_lastop?: Maybe<String_Comparison_Exp>;
  _not?: Maybe<Salesforce_Opportunity_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Salesforce_Opportunity_Bool_Exp>>>;
  amount?: Maybe<Float8_Comparison_Exp>;
  closedate?: Maybe<Date_Comparison_Exp>;
  createddate?: Maybe<Timestamp_Comparison_Exp>;
  heroku_connect_id__c?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  isdeleted?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  portal_user__r?: Maybe<Salesforce_Portal_User__C_Bool_Exp>;
  portal_user_heroku_connect_id__c?: Maybe<String_Comparison_Exp>;
  sfid?: Maybe<String_Comparison_Exp>;
  stagename?: Maybe<String_Comparison_Exp>;
  systemmodstamp?: Maybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "salesforce.opportunity" */
export enum Salesforce_Opportunity_Constraint {
  /** unique or primary key constraint */
  HcuIdxOpportunityHerokuConnectIdC = 'hcu_idx_opportunity_heroku_connect_id__c',
  /** unique or primary key constraint */
  HcuIdxOpportunitySfid = 'hcu_idx_opportunity_sfid',
  /** unique or primary key constraint */
  OpportunityPkey = 'opportunity_pkey'
}

/** input type for incrementing integer column in table "salesforce.opportunity" */
export type Salesforce_Opportunity_Inc_Input = {
  amount?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "salesforce.opportunity" */
export type Salesforce_Opportunity_Insert_Input = {
  _hc_err?: Maybe<Scalars['String']>;
  _hc_lastop?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['float8']>;
  closedate?: Maybe<Scalars['date']>;
  createddate?: Maybe<Scalars['timestamp']>;
  heroku_connect_id__c?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  isdeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  portal_user__r?: Maybe<Salesforce_Portal_User__C_Obj_Rel_Insert_Input>;
  portal_user_heroku_connect_id__c?: Maybe<Scalars['String']>;
  sfid?: Maybe<Scalars['String']>;
  stagename?: Maybe<Scalars['String']>;
  systemmodstamp?: Maybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Salesforce_Opportunity_Max_Fields = {
  __typename?: 'salesforce_opportunity_max_fields';
  _hc_err?: Maybe<Scalars['String']>;
  _hc_lastop?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['float8']>;
  closedate?: Maybe<Scalars['date']>;
  createddate?: Maybe<Scalars['timestamp']>;
  heroku_connect_id__c?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  portal_user_heroku_connect_id__c?: Maybe<Scalars['String']>;
  sfid?: Maybe<Scalars['String']>;
  stagename?: Maybe<Scalars['String']>;
  systemmodstamp?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "salesforce.opportunity" */
export type Salesforce_Opportunity_Max_Order_By = {
  _hc_err?: Maybe<Order_By>;
  _hc_lastop?: Maybe<Order_By>;
  amount?: Maybe<Order_By>;
  closedate?: Maybe<Order_By>;
  createddate?: Maybe<Order_By>;
  heroku_connect_id__c?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  portal_user_heroku_connect_id__c?: Maybe<Order_By>;
  sfid?: Maybe<Order_By>;
  stagename?: Maybe<Order_By>;
  systemmodstamp?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Salesforce_Opportunity_Min_Fields = {
  __typename?: 'salesforce_opportunity_min_fields';
  _hc_err?: Maybe<Scalars['String']>;
  _hc_lastop?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['float8']>;
  closedate?: Maybe<Scalars['date']>;
  createddate?: Maybe<Scalars['timestamp']>;
  heroku_connect_id__c?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  portal_user_heroku_connect_id__c?: Maybe<Scalars['String']>;
  sfid?: Maybe<Scalars['String']>;
  stagename?: Maybe<Scalars['String']>;
  systemmodstamp?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "salesforce.opportunity" */
export type Salesforce_Opportunity_Min_Order_By = {
  _hc_err?: Maybe<Order_By>;
  _hc_lastop?: Maybe<Order_By>;
  amount?: Maybe<Order_By>;
  closedate?: Maybe<Order_By>;
  createddate?: Maybe<Order_By>;
  heroku_connect_id__c?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  portal_user_heroku_connect_id__c?: Maybe<Order_By>;
  sfid?: Maybe<Order_By>;
  stagename?: Maybe<Order_By>;
  systemmodstamp?: Maybe<Order_By>;
};

/** response of any mutation on the table "salesforce.opportunity" */
export type Salesforce_Opportunity_Mutation_Response = {
  __typename?: 'salesforce_opportunity_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Salesforce_Opportunity>;
};

/** input type for inserting object relation for remote table "salesforce.opportunity" */
export type Salesforce_Opportunity_Obj_Rel_Insert_Input = {
  data: Salesforce_Opportunity_Insert_Input;
  on_conflict?: Maybe<Salesforce_Opportunity_On_Conflict>;
};

/** on conflict condition type for table "salesforce.opportunity" */
export type Salesforce_Opportunity_On_Conflict = {
  constraint: Salesforce_Opportunity_Constraint;
  update_columns: Array<Salesforce_Opportunity_Update_Column>;
  where?: Maybe<Salesforce_Opportunity_Bool_Exp>;
};

/** ordering options when selecting data from "salesforce.opportunity" */
export type Salesforce_Opportunity_Order_By = {
  _hc_err?: Maybe<Order_By>;
  _hc_lastop?: Maybe<Order_By>;
  amount?: Maybe<Order_By>;
  closedate?: Maybe<Order_By>;
  createddate?: Maybe<Order_By>;
  heroku_connect_id__c?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isdeleted?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  portal_user__r?: Maybe<Salesforce_Portal_User__C_Order_By>;
  portal_user_heroku_connect_id__c?: Maybe<Order_By>;
  sfid?: Maybe<Order_By>;
  stagename?: Maybe<Order_By>;
  systemmodstamp?: Maybe<Order_By>;
};

/** primary key columns input for table: "salesforce.opportunity" */
export type Salesforce_Opportunity_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** columns and relationships of "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users = {
  __typename?: 'salesforce_opportunity_portal_users';
  amount?: Maybe<Scalars['float8']>;
  createddate?: Maybe<Scalars['timestamp']>;
  heroku_connect_id__c?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  portal_user__r?: Maybe<Salesforce_Portal_User__C>;
  portal_user_heroku_connect_id__c?: Maybe<Scalars['String']>;
  sfid?: Maybe<Scalars['String']>;
  stagename?: Maybe<Scalars['String']>;
};

/** aggregated selection of "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Aggregate = {
  __typename?: 'salesforce_opportunity_portal_users_aggregate';
  aggregate?: Maybe<Salesforce_Opportunity_Portal_Users_Aggregate_Fields>;
  nodes: Array<Salesforce_Opportunity_Portal_Users>;
};

/** aggregate fields of "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Aggregate_Fields = {
  __typename?: 'salesforce_opportunity_portal_users_aggregate_fields';
  avg?: Maybe<Salesforce_Opportunity_Portal_Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Salesforce_Opportunity_Portal_Users_Max_Fields>;
  min?: Maybe<Salesforce_Opportunity_Portal_Users_Min_Fields>;
  stddev?: Maybe<Salesforce_Opportunity_Portal_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Salesforce_Opportunity_Portal_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Salesforce_Opportunity_Portal_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Salesforce_Opportunity_Portal_Users_Sum_Fields>;
  var_pop?: Maybe<Salesforce_Opportunity_Portal_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Salesforce_Opportunity_Portal_Users_Var_Samp_Fields>;
  variance?: Maybe<Salesforce_Opportunity_Portal_Users_Variance_Fields>;
};


/** aggregate fields of "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Salesforce_Opportunity_Portal_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Aggregate_Order_By = {
  avg?: Maybe<Salesforce_Opportunity_Portal_Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Salesforce_Opportunity_Portal_Users_Max_Order_By>;
  min?: Maybe<Salesforce_Opportunity_Portal_Users_Min_Order_By>;
  stddev?: Maybe<Salesforce_Opportunity_Portal_Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Salesforce_Opportunity_Portal_Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Salesforce_Opportunity_Portal_Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Salesforce_Opportunity_Portal_Users_Sum_Order_By>;
  var_pop?: Maybe<Salesforce_Opportunity_Portal_Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Salesforce_Opportunity_Portal_Users_Var_Samp_Order_By>;
  variance?: Maybe<Salesforce_Opportunity_Portal_Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Arr_Rel_Insert_Input = {
  data: Array<Salesforce_Opportunity_Portal_Users_Insert_Input>;
};

/** aggregate avg on columns */
export type Salesforce_Opportunity_Portal_Users_Avg_Fields = {
  __typename?: 'salesforce_opportunity_portal_users_avg_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Avg_Order_By = {
  amount?: Maybe<Order_By>;
};

/**
 * Boolean expression to filter rows from the table
 * "salesforce.opportunity_portal_users". All fields are combined with a logical 'AND'.
 */
export type Salesforce_Opportunity_Portal_Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Salesforce_Opportunity_Portal_Users_Bool_Exp>>>;
  _not?: Maybe<Salesforce_Opportunity_Portal_Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Salesforce_Opportunity_Portal_Users_Bool_Exp>>>;
  amount?: Maybe<Float8_Comparison_Exp>;
  createddate?: Maybe<Timestamp_Comparison_Exp>;
  heroku_connect_id__c?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  portal_user__r?: Maybe<Salesforce_Portal_User__C_Bool_Exp>;
  portal_user_heroku_connect_id__c?: Maybe<String_Comparison_Exp>;
  sfid?: Maybe<String_Comparison_Exp>;
  stagename?: Maybe<String_Comparison_Exp>;
};

/** input type for incrementing integer column in table "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Inc_Input = {
  amount?: Maybe<Scalars['float8']>;
};

/** input type for inserting data into table "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Insert_Input = {
  amount?: Maybe<Scalars['float8']>;
  createddate?: Maybe<Scalars['timestamp']>;
  heroku_connect_id__c?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  portal_user__r?: Maybe<Salesforce_Portal_User__C_Obj_Rel_Insert_Input>;
  portal_user_heroku_connect_id__c?: Maybe<Scalars['String']>;
  sfid?: Maybe<Scalars['String']>;
  stagename?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Salesforce_Opportunity_Portal_Users_Max_Fields = {
  __typename?: 'salesforce_opportunity_portal_users_max_fields';
  amount?: Maybe<Scalars['float8']>;
  createddate?: Maybe<Scalars['timestamp']>;
  heroku_connect_id__c?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  portal_user_heroku_connect_id__c?: Maybe<Scalars['String']>;
  sfid?: Maybe<Scalars['String']>;
  stagename?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Max_Order_By = {
  amount?: Maybe<Order_By>;
  createddate?: Maybe<Order_By>;
  heroku_connect_id__c?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  portal_user_heroku_connect_id__c?: Maybe<Order_By>;
  sfid?: Maybe<Order_By>;
  stagename?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Salesforce_Opportunity_Portal_Users_Min_Fields = {
  __typename?: 'salesforce_opportunity_portal_users_min_fields';
  amount?: Maybe<Scalars['float8']>;
  createddate?: Maybe<Scalars['timestamp']>;
  heroku_connect_id__c?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  portal_user_heroku_connect_id__c?: Maybe<Scalars['String']>;
  sfid?: Maybe<Scalars['String']>;
  stagename?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Min_Order_By = {
  amount?: Maybe<Order_By>;
  createddate?: Maybe<Order_By>;
  heroku_connect_id__c?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  portal_user_heroku_connect_id__c?: Maybe<Order_By>;
  sfid?: Maybe<Order_By>;
  stagename?: Maybe<Order_By>;
};

/** response of any mutation on the table "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Mutation_Response = {
  __typename?: 'salesforce_opportunity_portal_users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Salesforce_Opportunity_Portal_Users>;
};

/** input type for inserting object relation for remote table "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Obj_Rel_Insert_Input = {
  data: Salesforce_Opportunity_Portal_Users_Insert_Input;
};

/** ordering options when selecting data from "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Order_By = {
  amount?: Maybe<Order_By>;
  createddate?: Maybe<Order_By>;
  heroku_connect_id__c?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  portal_user__r?: Maybe<Salesforce_Portal_User__C_Order_By>;
  portal_user_heroku_connect_id__c?: Maybe<Order_By>;
  sfid?: Maybe<Order_By>;
  stagename?: Maybe<Order_By>;
};

/** select columns of table "salesforce.opportunity_portal_users" */
export enum Salesforce_Opportunity_Portal_Users_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Createddate = 'createddate',
  /** column name */
  HerokuConnectIdC = 'heroku_connect_id__c',
  /** column name */
  Name = 'name',
  /** column name */
  PortalUserHerokuConnectIdC = 'portal_user_heroku_connect_id__c',
  /** column name */
  Sfid = 'sfid',
  /** column name */
  Stagename = 'stagename'
}

/** input type for updating data in table "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Set_Input = {
  amount?: Maybe<Scalars['float8']>;
  createddate?: Maybe<Scalars['timestamp']>;
  heroku_connect_id__c?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  portal_user_heroku_connect_id__c?: Maybe<Scalars['String']>;
  sfid?: Maybe<Scalars['String']>;
  stagename?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Salesforce_Opportunity_Portal_Users_Stddev_Fields = {
  __typename?: 'salesforce_opportunity_portal_users_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Stddev_Order_By = {
  amount?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Salesforce_Opportunity_Portal_Users_Stddev_Pop_Fields = {
  __typename?: 'salesforce_opportunity_portal_users_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Salesforce_Opportunity_Portal_Users_Stddev_Samp_Fields = {
  __typename?: 'salesforce_opportunity_portal_users_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Salesforce_Opportunity_Portal_Users_Sum_Fields = {
  __typename?: 'salesforce_opportunity_portal_users_sum_fields';
  amount?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Sum_Order_By = {
  amount?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Salesforce_Opportunity_Portal_Users_Var_Pop_Fields = {
  __typename?: 'salesforce_opportunity_portal_users_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Var_Pop_Order_By = {
  amount?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Salesforce_Opportunity_Portal_Users_Var_Samp_Fields = {
  __typename?: 'salesforce_opportunity_portal_users_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Salesforce_Opportunity_Portal_Users_Variance_Fields = {
  __typename?: 'salesforce_opportunity_portal_users_variance_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "salesforce.opportunity_portal_users" */
export type Salesforce_Opportunity_Portal_Users_Variance_Order_By = {
  amount?: Maybe<Order_By>;
};

/** select columns of table "salesforce.opportunity" */
export enum Salesforce_Opportunity_Select_Column {
  /** column name */
  HcErr = '_hc_err',
  /** column name */
  HcLastop = '_hc_lastop',
  /** column name */
  Amount = 'amount',
  /** column name */
  Closedate = 'closedate',
  /** column name */
  Createddate = 'createddate',
  /** column name */
  HerokuConnectIdC = 'heroku_connect_id__c',
  /** column name */
  Id = 'id',
  /** column name */
  Isdeleted = 'isdeleted',
  /** column name */
  Name = 'name',
  /** column name */
  PortalUserHerokuConnectIdC = 'portal_user_heroku_connect_id__c',
  /** column name */
  Sfid = 'sfid',
  /** column name */
  Stagename = 'stagename',
  /** column name */
  Systemmodstamp = 'systemmodstamp'
}

/** input type for updating data in table "salesforce.opportunity" */
export type Salesforce_Opportunity_Set_Input = {
  _hc_err?: Maybe<Scalars['String']>;
  _hc_lastop?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['float8']>;
  closedate?: Maybe<Scalars['date']>;
  createddate?: Maybe<Scalars['timestamp']>;
  heroku_connect_id__c?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  isdeleted?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  portal_user_heroku_connect_id__c?: Maybe<Scalars['String']>;
  sfid?: Maybe<Scalars['String']>;
  stagename?: Maybe<Scalars['String']>;
  systemmodstamp?: Maybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Salesforce_Opportunity_Stddev_Fields = {
  __typename?: 'salesforce_opportunity_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "salesforce.opportunity" */
export type Salesforce_Opportunity_Stddev_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Salesforce_Opportunity_Stddev_Pop_Fields = {
  __typename?: 'salesforce_opportunity_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "salesforce.opportunity" */
export type Salesforce_Opportunity_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Salesforce_Opportunity_Stddev_Samp_Fields = {
  __typename?: 'salesforce_opportunity_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "salesforce.opportunity" */
export type Salesforce_Opportunity_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Salesforce_Opportunity_Sum_Fields = {
  __typename?: 'salesforce_opportunity_sum_fields';
  amount?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "salesforce.opportunity" */
export type Salesforce_Opportunity_Sum_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "salesforce.opportunity" */
export enum Salesforce_Opportunity_Update_Column {
  /** column name */
  HcErr = '_hc_err',
  /** column name */
  HcLastop = '_hc_lastop',
  /** column name */
  Amount = 'amount',
  /** column name */
  Closedate = 'closedate',
  /** column name */
  Createddate = 'createddate',
  /** column name */
  HerokuConnectIdC = 'heroku_connect_id__c',
  /** column name */
  Id = 'id',
  /** column name */
  Isdeleted = 'isdeleted',
  /** column name */
  Name = 'name',
  /** column name */
  PortalUserHerokuConnectIdC = 'portal_user_heroku_connect_id__c',
  /** column name */
  Sfid = 'sfid',
  /** column name */
  Stagename = 'stagename',
  /** column name */
  Systemmodstamp = 'systemmodstamp'
}

/** aggregate var_pop on columns */
export type Salesforce_Opportunity_Var_Pop_Fields = {
  __typename?: 'salesforce_opportunity_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "salesforce.opportunity" */
export type Salesforce_Opportunity_Var_Pop_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Salesforce_Opportunity_Var_Samp_Fields = {
  __typename?: 'salesforce_opportunity_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "salesforce.opportunity" */
export type Salesforce_Opportunity_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Salesforce_Opportunity_Variance_Fields = {
  __typename?: 'salesforce_opportunity_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "salesforce.opportunity" */
export type Salesforce_Opportunity_Variance_Order_By = {
  amount?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C = {
  __typename?: 'salesforce_portal_user__c';
  _hc_err?: Maybe<Scalars['String']>;
  _hc_lastop?: Maybe<Scalars['String']>;
  createddate?: Maybe<Scalars['timestamp']>;
  email__c?: Maybe<Scalars['String']>;
  heroku_connect_id__c: Scalars['String'];
  id: Scalars['Int'];
  isdeleted?: Maybe<Scalars['Boolean']>;
  lastmodifieddate?: Maybe<Scalars['timestamp']>;
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  opportunities: Array<Salesforce_Opportunity>;
  /** An aggregated array relationship */
  opportunities_aggregate: Salesforce_Opportunity_Aggregate;
  password__c?: Maybe<Scalars['String']>;
  sfid?: Maybe<Scalars['String']>;
  systemmodstamp?: Maybe<Scalars['timestamp']>;
};


/** columns and relationships of "salesforce.portal_user__c" */
export type Salesforce_Portal_User__COpportunitiesArgs = {
  distinct_on?: Maybe<Array<Salesforce_Opportunity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Salesforce_Opportunity_Order_By>>;
  where?: Maybe<Salesforce_Opportunity_Bool_Exp>;
};


/** columns and relationships of "salesforce.portal_user__c" */
export type Salesforce_Portal_User__COpportunities_AggregateArgs = {
  distinct_on?: Maybe<Array<Salesforce_Opportunity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Salesforce_Opportunity_Order_By>>;
  where?: Maybe<Salesforce_Opportunity_Bool_Exp>;
};

/** aggregated selection of "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Aggregate = {
  __typename?: 'salesforce_portal_user__c_aggregate';
  aggregate?: Maybe<Salesforce_Portal_User__C_Aggregate_Fields>;
  nodes: Array<Salesforce_Portal_User__C>;
};

/** aggregate fields of "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Aggregate_Fields = {
  __typename?: 'salesforce_portal_user__c_aggregate_fields';
  avg?: Maybe<Salesforce_Portal_User__C_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Salesforce_Portal_User__C_Max_Fields>;
  min?: Maybe<Salesforce_Portal_User__C_Min_Fields>;
  stddev?: Maybe<Salesforce_Portal_User__C_Stddev_Fields>;
  stddev_pop?: Maybe<Salesforce_Portal_User__C_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Salesforce_Portal_User__C_Stddev_Samp_Fields>;
  sum?: Maybe<Salesforce_Portal_User__C_Sum_Fields>;
  var_pop?: Maybe<Salesforce_Portal_User__C_Var_Pop_Fields>;
  var_samp?: Maybe<Salesforce_Portal_User__C_Var_Samp_Fields>;
  variance?: Maybe<Salesforce_Portal_User__C_Variance_Fields>;
};


/** aggregate fields of "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Salesforce_Portal_User__C_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Aggregate_Order_By = {
  avg?: Maybe<Salesforce_Portal_User__C_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Salesforce_Portal_User__C_Max_Order_By>;
  min?: Maybe<Salesforce_Portal_User__C_Min_Order_By>;
  stddev?: Maybe<Salesforce_Portal_User__C_Stddev_Order_By>;
  stddev_pop?: Maybe<Salesforce_Portal_User__C_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Salesforce_Portal_User__C_Stddev_Samp_Order_By>;
  sum?: Maybe<Salesforce_Portal_User__C_Sum_Order_By>;
  var_pop?: Maybe<Salesforce_Portal_User__C_Var_Pop_Order_By>;
  var_samp?: Maybe<Salesforce_Portal_User__C_Var_Samp_Order_By>;
  variance?: Maybe<Salesforce_Portal_User__C_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Arr_Rel_Insert_Input = {
  data: Array<Salesforce_Portal_User__C_Insert_Input>;
  on_conflict?: Maybe<Salesforce_Portal_User__C_On_Conflict>;
};

/** aggregate avg on columns */
export type Salesforce_Portal_User__C_Avg_Fields = {
  __typename?: 'salesforce_portal_user__c_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "salesforce.portal_user__c". All fields are combined with a logical 'AND'. */
export type Salesforce_Portal_User__C_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Salesforce_Portal_User__C_Bool_Exp>>>;
  _hc_err?: Maybe<String_Comparison_Exp>;
  _hc_lastop?: Maybe<String_Comparison_Exp>;
  _not?: Maybe<Salesforce_Portal_User__C_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Salesforce_Portal_User__C_Bool_Exp>>>;
  createddate?: Maybe<Timestamp_Comparison_Exp>;
  email__c?: Maybe<String_Comparison_Exp>;
  heroku_connect_id__c?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  isdeleted?: Maybe<Boolean_Comparison_Exp>;
  lastmodifieddate?: Maybe<Timestamp_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  opportunities?: Maybe<Salesforce_Opportunity_Bool_Exp>;
  password__c?: Maybe<String_Comparison_Exp>;
  sfid?: Maybe<String_Comparison_Exp>;
  systemmodstamp?: Maybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "salesforce.portal_user__c" */
export enum Salesforce_Portal_User__C_Constraint {
  /** unique or primary key constraint */
  HcuIdxPortalUserCHerokuConnectIdC = 'hcu_idx_portal_user__c_heroku_connect_id__c',
  /** unique or primary key constraint */
  HcuIdxPortalUserCSfid = 'hcu_idx_portal_user__c_sfid',
  /** unique or primary key constraint */
  PortalUserCHerokuConnectIdCKey = 'portal_user__c_heroku_connect_id__c_key',
  /** unique or primary key constraint */
  PortalUserCPkey = 'portal_user__c_pkey'
}

/** input type for incrementing integer column in table "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Insert_Input = {
  _hc_err?: Maybe<Scalars['String']>;
  _hc_lastop?: Maybe<Scalars['String']>;
  createddate?: Maybe<Scalars['timestamp']>;
  email__c?: Maybe<Scalars['String']>;
  heroku_connect_id__c?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  isdeleted?: Maybe<Scalars['Boolean']>;
  lastmodifieddate?: Maybe<Scalars['timestamp']>;
  name?: Maybe<Scalars['String']>;
  opportunities?: Maybe<Salesforce_Opportunity_Arr_Rel_Insert_Input>;
  password__c?: Maybe<Scalars['String']>;
  sfid?: Maybe<Scalars['String']>;
  systemmodstamp?: Maybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Salesforce_Portal_User__C_Max_Fields = {
  __typename?: 'salesforce_portal_user__c_max_fields';
  _hc_err?: Maybe<Scalars['String']>;
  _hc_lastop?: Maybe<Scalars['String']>;
  createddate?: Maybe<Scalars['timestamp']>;
  email__c?: Maybe<Scalars['String']>;
  heroku_connect_id__c?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastmodifieddate?: Maybe<Scalars['timestamp']>;
  name?: Maybe<Scalars['String']>;
  password__c?: Maybe<Scalars['String']>;
  sfid?: Maybe<Scalars['String']>;
  systemmodstamp?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Max_Order_By = {
  _hc_err?: Maybe<Order_By>;
  _hc_lastop?: Maybe<Order_By>;
  createddate?: Maybe<Order_By>;
  email__c?: Maybe<Order_By>;
  heroku_connect_id__c?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastmodifieddate?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password__c?: Maybe<Order_By>;
  sfid?: Maybe<Order_By>;
  systemmodstamp?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Salesforce_Portal_User__C_Min_Fields = {
  __typename?: 'salesforce_portal_user__c_min_fields';
  _hc_err?: Maybe<Scalars['String']>;
  _hc_lastop?: Maybe<Scalars['String']>;
  createddate?: Maybe<Scalars['timestamp']>;
  email__c?: Maybe<Scalars['String']>;
  heroku_connect_id__c?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastmodifieddate?: Maybe<Scalars['timestamp']>;
  name?: Maybe<Scalars['String']>;
  password__c?: Maybe<Scalars['String']>;
  sfid?: Maybe<Scalars['String']>;
  systemmodstamp?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Min_Order_By = {
  _hc_err?: Maybe<Order_By>;
  _hc_lastop?: Maybe<Order_By>;
  createddate?: Maybe<Order_By>;
  email__c?: Maybe<Order_By>;
  heroku_connect_id__c?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastmodifieddate?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  password__c?: Maybe<Order_By>;
  sfid?: Maybe<Order_By>;
  systemmodstamp?: Maybe<Order_By>;
};

/** response of any mutation on the table "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Mutation_Response = {
  __typename?: 'salesforce_portal_user__c_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Salesforce_Portal_User__C>;
};

/** input type for inserting object relation for remote table "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Obj_Rel_Insert_Input = {
  data: Salesforce_Portal_User__C_Insert_Input;
  on_conflict?: Maybe<Salesforce_Portal_User__C_On_Conflict>;
};

/** on conflict condition type for table "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_On_Conflict = {
  constraint: Salesforce_Portal_User__C_Constraint;
  update_columns: Array<Salesforce_Portal_User__C_Update_Column>;
  where?: Maybe<Salesforce_Portal_User__C_Bool_Exp>;
};

/** ordering options when selecting data from "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Order_By = {
  _hc_err?: Maybe<Order_By>;
  _hc_lastop?: Maybe<Order_By>;
  createddate?: Maybe<Order_By>;
  email__c?: Maybe<Order_By>;
  heroku_connect_id__c?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isdeleted?: Maybe<Order_By>;
  lastmodifieddate?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  opportunities_aggregate?: Maybe<Salesforce_Opportunity_Aggregate_Order_By>;
  password__c?: Maybe<Order_By>;
  sfid?: Maybe<Order_By>;
  systemmodstamp?: Maybe<Order_By>;
};

/** primary key columns input for table: "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Pk_Columns_Input = {
  heroku_connect_id__c: Scalars['String'];
  id: Scalars['Int'];
};

/** select columns of table "salesforce.portal_user__c" */
export enum Salesforce_Portal_User__C_Select_Column {
  /** column name */
  HcErr = '_hc_err',
  /** column name */
  HcLastop = '_hc_lastop',
  /** column name */
  Createddate = 'createddate',
  /** column name */
  EmailC = 'email__c',
  /** column name */
  HerokuConnectIdC = 'heroku_connect_id__c',
  /** column name */
  Id = 'id',
  /** column name */
  Isdeleted = 'isdeleted',
  /** column name */
  Lastmodifieddate = 'lastmodifieddate',
  /** column name */
  Name = 'name',
  /** column name */
  PasswordC = 'password__c',
  /** column name */
  Sfid = 'sfid',
  /** column name */
  Systemmodstamp = 'systemmodstamp'
}

/** input type for updating data in table "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Set_Input = {
  _hc_err?: Maybe<Scalars['String']>;
  _hc_lastop?: Maybe<Scalars['String']>;
  createddate?: Maybe<Scalars['timestamp']>;
  email__c?: Maybe<Scalars['String']>;
  heroku_connect_id__c?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  isdeleted?: Maybe<Scalars['Boolean']>;
  lastmodifieddate?: Maybe<Scalars['timestamp']>;
  name?: Maybe<Scalars['String']>;
  password__c?: Maybe<Scalars['String']>;
  sfid?: Maybe<Scalars['String']>;
  systemmodstamp?: Maybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Salesforce_Portal_User__C_Stddev_Fields = {
  __typename?: 'salesforce_portal_user__c_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Salesforce_Portal_User__C_Stddev_Pop_Fields = {
  __typename?: 'salesforce_portal_user__c_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Salesforce_Portal_User__C_Stddev_Samp_Fields = {
  __typename?: 'salesforce_portal_user__c_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Salesforce_Portal_User__C_Sum_Fields = {
  __typename?: 'salesforce_portal_user__c_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "salesforce.portal_user__c" */
export enum Salesforce_Portal_User__C_Update_Column {
  /** column name */
  HcErr = '_hc_err',
  /** column name */
  HcLastop = '_hc_lastop',
  /** column name */
  Createddate = 'createddate',
  /** column name */
  EmailC = 'email__c',
  /** column name */
  HerokuConnectIdC = 'heroku_connect_id__c',
  /** column name */
  Id = 'id',
  /** column name */
  Isdeleted = 'isdeleted',
  /** column name */
  Lastmodifieddate = 'lastmodifieddate',
  /** column name */
  Name = 'name',
  /** column name */
  PasswordC = 'password__c',
  /** column name */
  Sfid = 'sfid',
  /** column name */
  Systemmodstamp = 'systemmodstamp'
}

/** aggregate var_pop on columns */
export type Salesforce_Portal_User__C_Var_Pop_Fields = {
  __typename?: 'salesforce_portal_user__c_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Salesforce_Portal_User__C_Var_Samp_Fields = {
  __typename?: 'salesforce_portal_user__c_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Salesforce_Portal_User__C_Variance_Fields = {
  __typename?: 'salesforce_portal_user__c_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "salesforce.portal_user__c" */
export type Salesforce_Portal_User__C_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "salesforce.opportunity" */
  salesforce_opportunity: Array<Salesforce_Opportunity>;
  /** fetch aggregated fields from the table: "salesforce.opportunity" */
  salesforce_opportunity_aggregate: Salesforce_Opportunity_Aggregate;
  /** fetch data from the table: "salesforce.opportunity" using primary key columns */
  salesforce_opportunity_by_pk?: Maybe<Salesforce_Opportunity>;
  /** fetch data from the table: "salesforce.opportunity_portal_users" */
  salesforce_opportunity_portal_users: Array<Salesforce_Opportunity_Portal_Users>;
  /** fetch aggregated fields from the table: "salesforce.opportunity_portal_users" */
  salesforce_opportunity_portal_users_aggregate: Salesforce_Opportunity_Portal_Users_Aggregate;
  /** fetch data from the table: "salesforce.portal_user__c" */
  salesforce_portal_user__c: Array<Salesforce_Portal_User__C>;
  /** fetch aggregated fields from the table: "salesforce.portal_user__c" */
  salesforce_portal_user__c_aggregate: Salesforce_Portal_User__C_Aggregate;
  /** fetch data from the table: "salesforce.portal_user__c" using primary key columns */
  salesforce_portal_user__c_by_pk?: Maybe<Salesforce_Portal_User__C>;
};


/** subscription root */
export type Subscription_RootSalesforce_OpportunityArgs = {
  distinct_on?: Maybe<Array<Salesforce_Opportunity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Salesforce_Opportunity_Order_By>>;
  where?: Maybe<Salesforce_Opportunity_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSalesforce_Opportunity_AggregateArgs = {
  distinct_on?: Maybe<Array<Salesforce_Opportunity_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Salesforce_Opportunity_Order_By>>;
  where?: Maybe<Salesforce_Opportunity_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSalesforce_Opportunity_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootSalesforce_Opportunity_Portal_UsersArgs = {
  distinct_on?: Maybe<Array<Salesforce_Opportunity_Portal_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Salesforce_Opportunity_Portal_Users_Order_By>>;
  where?: Maybe<Salesforce_Opportunity_Portal_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSalesforce_Opportunity_Portal_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Salesforce_Opportunity_Portal_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Salesforce_Opportunity_Portal_Users_Order_By>>;
  where?: Maybe<Salesforce_Opportunity_Portal_Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSalesforce_Portal_User__CArgs = {
  distinct_on?: Maybe<Array<Salesforce_Portal_User__C_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Salesforce_Portal_User__C_Order_By>>;
  where?: Maybe<Salesforce_Portal_User__C_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSalesforce_Portal_User__C_AggregateArgs = {
  distinct_on?: Maybe<Array<Salesforce_Portal_User__C_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Salesforce_Portal_User__C_Order_By>>;
  where?: Maybe<Salesforce_Portal_User__C_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootSalesforce_Portal_User__C_By_PkArgs = {
  heroku_connect_id__c: Scalars['String'];
  id: Scalars['Int'];
};


/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

export type Salesforce_Opportunity_Portal_UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type Salesforce_Opportunity_Portal_UsersQuery = (
  { __typename?: 'query_root' }
  & { salesforce_opportunity_portal_users: Array<(
    { __typename?: 'salesforce_opportunity_portal_users' }
    & Pick<Salesforce_Opportunity_Portal_Users, 'createddate' | 'name' | 'amount' | 'stagename' | 'portal_user_heroku_connect_id__c'>
  )> }
);

export type Salesforce_Opportunity_Portal_UsersSubSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type Salesforce_Opportunity_Portal_UsersSubSubscription = (
  { __typename?: 'subscription_root' }
  & { salesforce_opportunity_portal_users: Array<(
    { __typename?: 'salesforce_opportunity_portal_users' }
    & Pick<Salesforce_Opportunity_Portal_Users, 'createddate' | 'name' | 'amount' | 'stagename' | 'heroku_connect_id__c' | 'portal_user_heroku_connect_id__c'>
  )> }
);

export type UpdateOpportunityMutationVariables = Exact<{
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  amount: Scalars['float8'];
}>;


export type UpdateOpportunityMutation = (
  { __typename?: 'mutation_root' }
  & { update_salesforce_opportunity_portal_users?: Maybe<(
    { __typename?: 'salesforce_opportunity_portal_users_mutation_response' }
    & { returning: Array<(
      { __typename?: 'salesforce_opportunity_portal_users' }
      & Pick<Salesforce_Opportunity_Portal_Users, 'name' | 'amount'>
    )> }
  )> }
);

export type InsertOpportunityMutationVariables = Exact<{
  userId: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  stagename: Scalars['String'];
  closedate: Scalars['date'];
  amount?: Maybe<Scalars['float8']>;
}>;


export type InsertOpportunityMutation = (
  { __typename?: 'mutation_root' }
  & { insert_salesforce_opportunity_one?: Maybe<(
    { __typename?: 'salesforce_opportunity' }
    & Pick<Salesforce_Opportunity, 'name' | 'amount'>
  )> }
);

export type OpportunityQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type OpportunityQuery = (
  { __typename?: 'query_root' }
  & { salesforce_opportunity_portal_users: Array<(
    { __typename?: 'salesforce_opportunity_portal_users' }
    & Pick<Salesforce_Opportunity_Portal_Users, 'createddate' | 'name' | 'amount' | 'stagename' | 'heroku_connect_id__c' | 'portal_user_heroku_connect_id__c'>
  )> }
);

export type DeleteOpportunityMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteOpportunityMutation = (
  { __typename?: 'mutation_root' }
  & { delete_salesforce_opportunity_portal_users?: Maybe<(
    { __typename?: 'salesforce_opportunity_portal_users_mutation_response' }
    & { returning: Array<(
      { __typename?: 'salesforce_opportunity_portal_users' }
      & Pick<Salesforce_Opportunity_Portal_Users, 'name' | 'amount'>
    )> }
  )> }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'query_root' }
  & { salesforce_portal_user__c: Array<(
    { __typename?: 'salesforce_portal_user__c' }
    & Pick<Salesforce_Portal_User__C, 'name' | 'email__c' | 'heroku_connect_id__c'>
  )> }
);

export const Salesforce_Opportunity_Portal_UsersDocument = gql`
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

  @Injectable({
    providedIn: 'root'
  })
  export class Salesforce_Opportunity_Portal_UsersGQL extends Apollo.Query<Salesforce_Opportunity_Portal_UsersQuery, Salesforce_Opportunity_Portal_UsersQueryVariables> {
    document = Salesforce_Opportunity_Portal_UsersDocument;
    
  }
export const Salesforce_Opportunity_Portal_UsersSubDocument = gql`
    subscription salesforce_opportunity_portal_usersSub {
  salesforce_opportunity_portal_users {
    createddate
    name
    amount
    stagename
    heroku_connect_id__c
    portal_user_heroku_connect_id__c
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Salesforce_Opportunity_Portal_UsersSubGQL extends Apollo.Subscription<Salesforce_Opportunity_Portal_UsersSubSubscription, Salesforce_Opportunity_Portal_UsersSubSubscriptionVariables> {
    document = Salesforce_Opportunity_Portal_UsersSubDocument;
    
  }
export const UpdateOpportunityDocument = gql`
    mutation updateOpportunity($id: String!, $name: String, $amount: float8!) {
  update_salesforce_opportunity_portal_users(where: {heroku_connect_id__c: {_eq: $id}}, _set: {name: $name, amount: $amount}) {
    returning {
      name
      amount
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateOpportunityGQL extends Apollo.Mutation<UpdateOpportunityMutation, UpdateOpportunityMutationVariables> {
    document = UpdateOpportunityDocument;
    
  }
export const InsertOpportunityDocument = gql`
    mutation insertOpportunity($userId: String!, $id: String!, $name: String!, $stagename: String!, $closedate: date!, $amount: float8) {
  insert_salesforce_opportunity_one(object: {name: $name, amount: $amount, stagename: $stagename, closedate: $closedate, heroku_connect_id__c: $id, portal_user_heroku_connect_id__c: $userId}) {
    name
    amount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InsertOpportunityGQL extends Apollo.Mutation<InsertOpportunityMutation, InsertOpportunityMutationVariables> {
    document = InsertOpportunityDocument;
    
  }
export const OpportunityDocument = gql`
    query opportunity($id: String!) {
  salesforce_opportunity_portal_users(where: {heroku_connect_id__c: {_eq: $id}}) {
    createddate
    name
    amount
    stagename
    heroku_connect_id__c
    portal_user_heroku_connect_id__c
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OpportunityGQL extends Apollo.Query<OpportunityQuery, OpportunityQueryVariables> {
    document = OpportunityDocument;
    
  }
export const DeleteOpportunityDocument = gql`
    mutation deleteOpportunity($id: String!) {
  delete_salesforce_opportunity_portal_users(where: {heroku_connect_id__c: {_eq: $id}}) {
    returning {
      name
      amount
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteOpportunityGQL extends Apollo.Mutation<DeleteOpportunityMutation, DeleteOpportunityMutationVariables> {
    document = DeleteOpportunityDocument;
    
  }
export const CurrentUserDocument = gql`
    query currentUser {
  salesforce_portal_user__c {
    name
    email__c
    heroku_connect_id__c
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CurrentUserGQL extends Apollo.Query<CurrentUserQuery, CurrentUserQueryVariables> {
    document = CurrentUserDocument;
    
  }
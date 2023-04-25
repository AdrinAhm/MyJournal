/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLogin = /* GraphQL */ `
  query GetLogin($id: ID!) {
    getLogin(id: $id) {
      id
      name
      username
      password
      createdAt
      updatedAt
    }
  }
`;
export const listLogins = /* GraphQL */ `
  query ListLogins(
    $filter: ModelLoginFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        username
        password
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getJournal = /* GraphQL */ `
  query GetJournal($id: ID!) {
    getJournal(id: $id) {
      id
      owner
      date
      rate
      text
      share
      createdAt
      updatedAt
    }
  }
`;
export const listJournals = /* GraphQL */ `
  query ListJournals(
    $filter: ModelJournalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJournals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        date
        rate
        text
        share
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSetting = /* GraphQL */ `
  query GetSetting($id: ID!) {
    getSetting(id: $id) {
      id
      background
      createdAt
      updatedAt
    }
  }
`;
export const listSettings = /* GraphQL */ `
  query ListSettings(
    $filter: ModelSettingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        background
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

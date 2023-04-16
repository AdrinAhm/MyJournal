/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateJournals = /* GraphQL */ `
  subscription OnCreateJournals(
    $userID: String
    $date: String
    $rating: Int
    $journal: String
  ) {
    onCreateJournals(
      userID: $userID
      date: $date
      rating: $rating
      journal: $journal
    ) {
      userID
      date
      rating
      journal
    }
  }
`;
export const onUpdateJournals = /* GraphQL */ `
  subscription OnUpdateJournals(
    $userID: String
    $date: String
    $rating: Int
    $journal: String
  ) {
    onUpdateJournals(
      userID: $userID
      date: $date
      rating: $rating
      journal: $journal
    ) {
      userID
      date
      rating
      journal
    }
  }
`;
export const onDeleteJournals = /* GraphQL */ `
  subscription OnDeleteJournals(
    $userID: String
    $date: String
    $rating: Int
    $journal: String
  ) {
    onDeleteJournals(
      userID: $userID
      date: $date
      rating: $rating
      journal: $journal
    ) {
      userID
      date
      rating
      journal
    }
  }
`;

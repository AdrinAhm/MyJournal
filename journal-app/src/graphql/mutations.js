/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addBook = /* GraphQL */ `
  mutation AddBook($title: String, $author: String) {
    addBook(title: $title, author: $author) {
      title
      author {
        name
        books {
          title
        }
      }
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createJournals = /* GraphQL */ `
  mutation CreateJournals($input: CreateJournalsInput!) {
    createJournals(input: $input) {
      userID
      date
      rating
      journal
    }
  }
`;
export const updateJournals = /* GraphQL */ `
  mutation UpdateJournals($input: UpdateJournalsInput!) {
    updateJournals(input: $input) {
      userID
      date
      rating
      journal
    }
  }
`;
export const deleteJournals = /* GraphQL */ `
  mutation DeleteJournals($input: DeleteJournalsInput!) {
    deleteJournals(input: $input) {
      userID
      date
      rating
      journal
    }
  }
`;

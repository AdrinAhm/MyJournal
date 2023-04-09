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
export const createJournal = /* GraphQL */ `
  mutation CreateJournal(
    $input: CreateJournalInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      userID
      rating
      date
      journal
    }
  }
`;

export const updateJournal = /* GraphQL */ `
  mutation UpdateJournal(
    $input: UpdateJournalInput!
    $condition: ModelJournalConditionInput
  ) {
    updateJournal(input: $input, condition: $condition) {
      userID
      rating
      date
      journal
    }
  }
`;
export const deleteJournal = /* GraphQL */ `
  mutation DeleteJournal(
    $input: DeleteJournalInput!
    $condition: ModelJournalConditionInput
  ) {
    deleteJournal(input: $input, condition: $condition) {
      userID
      rating
      date
      journal
    }
  }
`;

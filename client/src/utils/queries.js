import gql from 'graphql-tag';

export const QUERY_REVIEWS = gql`
  query recipes($username: String) {
    recipes(username: $username) {
      _id
      recipeText
      username
    }
  }
`;

export const QUERY_REVIEW = gql`
  query recipe($id: ID!) {
    recipe(_id: $id) {
      _id
      recipeText
      username
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      recipes {
        _id
        recipeText
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      recipes {
        _id
        recipeText
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;
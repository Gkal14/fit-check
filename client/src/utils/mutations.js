import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}`

export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
      email
    }
  }
}`

export const ADD_REVIEW =gql`
mutation addReview($reviewText: String!) {
  addReview(reviewText: $reviewText) {
    _id
    reviewText
    username
  }
}`

export const DELETE_REVIEW =gql`
  mutation deleteReview($id: ID!) {
    deleteReview(_id: $id) {
      _id
      title
      content
    }
  }
`

export const UPDATE_REVIEW = gql`
  mutation updateReview($id: ID!, $input: ReviewUpdateInput) {
    updateReview(_id: $id, input: $input) {
      _id
      title
      content
    }
  }
`
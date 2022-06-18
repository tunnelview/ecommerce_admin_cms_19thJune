# E-commerce admin cms API server

This is a projct is a Backend server api build for the admin to create and manage their e commerce store.

This is only the API server part. the client UI is available at rep `....`

## How to use

1. run `git clone <put your git url here>`
2. run `npm i`
3. run `cd <folder name>`
4. run `npm run dev` for the local developemt. Not that you must have nodemon install in your system, if not run `npm i nodemon -g`

## APIS

All our api url follow the following patterns: '{rootUrl}/api/v1'

### Admin Registration and login api

This section show you how can access the api admin registration and login.

Note: TODO: Make sure the admin registration api is protected after the first admin is created because only admin can add another admin user.

All registration and login api follow the follwoing patterns '{rootUrl}/api/v1/register-login'

| #   | PATH | METHOD | IS PRIVATE | DESCRIPTION                    |
| --- | ---- | ------ | ---------- | ------------------------------ | ---------------------------------------- |
| 1.  | '/'  | POST   | yes        | Send user data fName, lName... | to create new admin user in the database |

# News API Documentation

## Entity Relationship Diagram (ERD)

![add](./ERD.png "add")

## Endpoint CMS

- POST /articles
- GET /articles
- GET /articles/:id
- DELETE /articles/:id
- GET /categories
- POST /register
- POST /login
- PUT /articles/:id
- PATCH /articles/:id
- GET /histories

## Endpoint Public Api

- POST /api/register
- POST /api/login
- GET /api/articles
- GET /api/articles/:id
- POST /api/bookmarks
- GET /api/bookmarks
- POST /api/articles/:id

# Endpoint CMS

## 1. POST /articles

- Description : create a new article

### Request

- request headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlh"
}
```

- request body

```json
{
  "title": "praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent",
  "content": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices.",
  "imgUrl": "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
  "authorId": 1,
  "categoryId": 6
}
```

### Response

- Response (201) - Success created an article

```json
{
  "message": "Success create article",
  "data": {
    "title": "praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent",
    "content": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices.",
    "imgUrl": "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
    "authorId": 1,
    "categoryId": 6
  }
}
```

- Response (400) - Failed created an article

```json
{
  "message" : "Title is required"
}
OR
{
  "message" : "Content is required"
}
OR
{
  "message" : "Author is required"
}
OR
{
  "message" : "Category is required"
}
```

## 2. GET /articles

- Description : get all articles

### Request

- request headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlh"
}
```

### Response

- Response (200) - Success get data articles

```json
{
 "message": "Success get data",
 "data": [
   {
     "title": "praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent",
     "content": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices.",
     "imgUrl": "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
     "authorId": 1,
     "categoryId": 6,
     "Author": {
       "username": "mbartolomeu0",
       "email": "znester0@blogspot.com"
     },
     "Category": {
       "name": "Politics"
     }
   },
   {
     "title": "a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ltrices vel",
     "content": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
     "imgUrl": "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
     "authorId": 2,
     "categoryId": 3,
     "Author": {
       "username": "twestberg1",
       "email": "jbourke1@seesaa.net"
     },
     "Category": {
       "name": "Entertainment"
     }
  },
 ...
 ]
}
```

## 3. GET /articles/:id

- Description : get an article by id

### Request

- request headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlh"
}
```

### Response

- Response (200) - Success get an article

```json
{
  "message": "Success get data",
  "data": {
    "title": "praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent",
    "content": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices.",
    "imgUrl": "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
    "authorId": 1,
    "categoryId": 6,
    "Author": {
      "username": "mbartolomeu0",
      "email": "znester0@blogspot.com"
    },
    "Category": {
      "name": "Politics"
    }
  }
}
```

- Response (404) - Article not found

```json
{
  "message": "Data is not found"
}
```

## 4. DELETE /articles/:id

- Description : Delete an article by id

### Request

- request headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlh"
}
```

### Response

- Response (200) - Success delete article

```json
{
  "message": "Article succcess to delete",
  "data": {
    "title": "praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent",
    "content": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices.",
    "imgUrl": "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
    "authorId": 1,
    "categoryId": 6
  }
}
```

- Response (403) - Forbidden

```json
{
  "message": "You are not authorized"
}
```

- Response (404) - Article not found

```json
{
  "message": "Data is not found"
}
```

## 5. GET /categories

- Description : get all categories

### Request

- request headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlh"
}
```

### Response

- Response (200) - Success get data categories

```json
{
 "message": "Success get data",
 "data": [
   {
     "name": "Politics"
   },
   {
     "name": "Sports"
   },
   {
     "name": "Entertainment"
   },
 ...
 ]
}
```

## 6. POST /register

- Description : create a new user account

### Request

- request body

```json
{
  "username": "admintest",
  "email": "admin@test.com",
  "password": "admintest"
}
```

### Response

- Response (201) - Success registered user

```json
{
  "message": "Success registered user",
  "data": {
    "id": 11,
    "email": "admin@test.com",
    "username": "admintest"
  }
}
```

- Response (400) - Failed create account

```json
{
   "message": "Username is required"
}
OR
{
   "message": "Email is required"
}
OR
{
   "message": "Password is required"
}
```

## 6. POST /login

- Description : login the user with their account

### Response

- Response (200) - Success to login

```json
{
  "message": "Success to login",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg0MjQ3MzA5fQ.wKWMyOpWjhyJHOeRSCc0wraOqdMHqpvT9invZr_38gs",
  "username": "mbartolomeu0",
  "role": "Staff"
}
```

- Response (400) - Failed login because of empty input

```json
{
  "message": "Email / password is required"
}
```

- Response (401) - Invalid user credentials

```json
{
  "message": "Email / password is incorrect"
}
```

## 7. PUT /articles/:id

- Description : update article content

### Request

- request headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlh"
}
```

- request body

```json
{
  "title": "example title",
  "content": "example content",
  "imgUrl": "example.jpg",
  "categoryId": 1
}
```

### Response

- Response (200) - Success update article

```json
{
  "message": "Article with id 32 updated"
}
```

## 8. PATCH /articles/:id

- Description : change article status (admin only)

### Request

- request headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlh"
}
```

- request body

```json
{
  "status": "Inactivea"
}
```

### Response

- Response (200) - Success to change article status

```json
{
  "message": "Status is incorrect",
  "name": "StatusInvalid"
}
```

## 8. GET /histories

- Description : get logs/histories article

### Request

- request headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlh"
}
```

### Response

- Response (200) - Success to get logs/histories article

```json
{
    "message": "Success get data",
    "data": [
        {
            "id": 1,
            "name": "example 1",
            "description": "Article with id 1 updated",
            "updatedBy": "admin@test.com",
            "createdAt": "2023-05-23T11:19:36.710Z",
            "updatedAt": "2023-05-23T11:19:36.710Z"
        },
        {
            "id": 2,
            "name": "example 1",
            "description": "New article with id 2 created",
            "updatedBy": "admin@test.com",
            "createdAt": "2023-05-23T11:18:16.658Z",
            "updatedAt": "2023-05-23T11:18:16.658Z"
        },
        ...
    ]
}

```

# Endpoint Public Api

## 1. POST /api/register

- Description : create a new user account

### Request

- request body

```json
{
  "email": "customer@test.com",
  "password": "customer"
}
```

### Response

- Response (201) - Success registered user

```json
{
  "message": "Success registered user",
  "data": {
    "id": 11,
    "email": "admin@test.com"
  }
}
```

- Response (400) - Failed create account

```json
{
   "message": "Email is required"
}
OR
{
   "message": "Password is required"
}
```

## 2. POST /api/login

- Description : login the user with their account

### Response

- Response (200) - Success to login

```json
{
  "message": "Success to login",
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjg0MjQ3MzA5fQ.wKWMyOpWjhyJHOeRSCc0wraOqdMHqpvT9invZr_38gs",
  "username": "mbartolomeu0",
  "role": "Customer"
}
```

- Response (400) - Failed login because of empty input

```json
{
  "message": "Email / password is required"
}
```

- Response (401) - Invalid user credentials

```json
{
  "message": "Email / password is incorrect"
}
```

## 3. GET /api/articles

- Description : get all articles

### Request

- request query (optional)

```json
{
  "page[size]": "number",
}
OR
{
  "page[number]": "number",
}
OR
{
  "filter[category]": "1,2,3",
}
```

### Response

- Response (200) - Success get data articles

```json
{
 "message": "Success get data",
 "data": [
   {
     "title": "praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent",
     "content": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices.",
     "imgUrl": "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
     "authorId": 1,
     "categoryId": 6,
     "Author": {
       "username": "mbartolomeu0",
       "email": "znester0@blogspot.com"
     },
     "Category": {
       "name": "Politics"
     }
   },
   {
     "title": "a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ltrices vel",
     "content": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.",
     "imgUrl": "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
     "authorId": 2,
     "categoryId": 3,
     "Author": {
       "username": "twestberg1",
       "email": "jbourke1@seesaa.net"
     },
     "Category": {
       "name": "Entertainment"
     }
  },
 ...
 ]
}
```

## 4. GET /articles/:id

- Description : get an article by id

### Response

- Response (200) - Success get an article

```json
{
  "message": "Success get data",
  "data": {
    "title": "praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent",
    "content": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices.",
    "imgUrl": "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
    "authorId": 1,
    "categoryId": 6,
    "Author": {
      "username": "mbartolomeu0",
      "email": "znester0@blogspot.com"
    },
    "Category": {
      "name": "Politics"
    }
  }
}
```

- Response (404) - Article not found

```json
{
  "message": "Data is not found"
}
```

## 5. GET /api/bookmarks

- Description : get bookmarks with user who is login

### Request

- request headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlh"
}
```

### Response

- Response (200) - Success get an article

```json
{
    "message": "Success get data",
    "data": [
        {
            "id": 1,
            "CustomerId": 4,
            "ArticleId": 1,
            "createdAt": "2023-05-30T15:28:40.865Z",
            "updatedAt": "2023-05-30T15:28:40.865Z",
            "Article": {
                "id": 1,
                "title": "praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia",
                "content": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
                "imgUrl": "http://dummyimage.com/233x100.png/5fa2dd/ffffff",
                "authorId": 1,
                "categoryId": 6,
                "status": "Active",
                "createdAt": "2023-05-30T11:12:24.052Z",
                "updatedAt": "2023-05-30T11:12:24.052Z"
            }
        },
        ...
    ]
}
```

## 6. POST /api/bookmarks/:id

- Description : bookmarked an article

### Request

- request headers

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImlh"
}
```

### Response

- Response (201) - Success bookmarked an article

```json
{
  "message": "Success added article to bookmarks",
  "data": {
    "id": 21,
    "CustomerId": 4,
    "ArticleId": "23"
  }
}
```

- Response (404) - Failed bookmarked an article because no article with that id

```json
{
  "message": "Data is not found",
  "name": "NotFound"
}
```

## 7. POST /api/articles/:id

- Description : generate an article QR Code

### Response

- Response (200) - Success generate article QR Code

```html
<svg>......</svg>
```

## Global Errors

- Response (401) - Unauthenticated

```json
{
  "message": "Unauthenticated"
}
```

- Response (500) - Internal Server Error

```json
{
  "message": "Internal Server Error"
}
```

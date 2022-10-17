# Project 3 - Group 37

This is the repository of project 3. Project 3 is a search engine where you can search movies based on actors, genres and title.

## Table of Contents

[Project setup (english)](#project-setup)  
[Documentation (norwegian)](#project-documentation)

## Project setup

### Technologies

This project is using the MERN stack.

- MongoDB
- Express with graphQL
- React with typescript
- Node.js

### File structure

The the project is divided into backend and frontend.

<details>
<summary>Click to see folder structure</summary>

### Folder structure

```
project
│   README.md
│
└───backend
│   │   ...     <-- Config files
│   └───data
│           imdb_top_1000.csv <-- Data
│   │
│   └───src
│       └───graphql <--GraphQL files
│       └───models  <--MongoDB schemas
│       │   index.ts
│
└───frontend
│   │   ...     <-- Config files
│   └───public  <-- Public content
│       │   ...
│   │
│   └───src  <-- Developed code
│       │   ...
│
```

</details>

### Frontend

Run these commands from /frontend.

```
1. npm ci
2. npm start
```

Frontend should now be accessible at `localhost:3000`

### Database - mongoDB

MongoDB instance should be installed and running locally. [Link to mongoDB setup](https://www.mongodb.com/docs/manual/installation/)

Import data to the database instance with the following command from `/backend`:

```
mongoimport -d imdb_movies -c movies --type csv --file data/imdb_top_1000.csv --headerline
```

### Backend

Run these commands from /backend.

```
1. npm ci
2. npm run dev
```

Console should output `App running on port 4000`.

Backend will be accessible at `localhost:4000/api`

## Project documentation

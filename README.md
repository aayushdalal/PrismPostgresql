# PrismaPostgresql

# To-Do List Project with Prisma & PostgreSQL

## Overview
This project is a To-Do List application built using **PostgreSQL** as the database and **Prisma ORM** for database interactions. Prisma simplifies working with databases in Node.js by providing an intuitive and type-safe query builder.

## Features
- **User Management**: Create and manage users
- **Work List (Posts)**: Each user can have multiple tasks
- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on tasks
- **Prisma ORM**: Simplified database interactions using Prisma

## Technologies Used
- **Node.js** - Server-side development
- **Prisma ORM** - Modern database ORM for PostgreSQL
- **PostgreSQL** - Relational database management system

## Installation

### Prerequisites
- Install **Node.js** and **PostgreSQL**

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/aayushdalal/PrismaPostgresql.git
   cd PrismaPostgresql
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Configure environment variables in a `.env` file:
   ```env
   DATABASE_URL=postgres://username:password@localhost:5432/todo_db
   ```

4. Initialize the database using Prisma:
   ```sh
   npx prisma migrate dev --name init
   ```

5. Start the application:
   ```sh
   node server.js
   ```

## Usage
- **Users Table**: Stores user information
- **Posts Table**: Stores tasks assigned to users
- API endpoints allow managing users and tasks

## Learning Outcomes
- Learned how to work with **Prisma ORM**
- Understood relational data modeling with PostgreSQL
- Improved database query efficiency using Prisma Client


## Author
[AAYUSH DALAL]

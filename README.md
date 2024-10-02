# User Address Registration API

This project is a backend application built using **Node.js**, **Express.js**, and **Sequelize** to manage user registrations and their associated addresses. It employs a **PostgreSQL** database to store user and address data with a one-to-many relationship between users and their addresses.

## Features

- User registration
- Address storage
- One-to-many relationship between users and addresses
- API endpoints for adding users and addresses

## Technologies Used

- **Node.js**: JavaScript runtime for server-side programming
- **Express.js**: Web framework for building the API
- **Sequelize**: Promise-based ORM for Node.js, used for interacting with the PostgreSQL database
- **PostgreSQL**: Relational database for storing user and address information

## Database Models

### User Model

```javascript
const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
```
### Address Model

```javascript
const Address = sequelize.define("Address", {
  addressLine: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
```

## Set-Up



## Endpoints

### 1. Add User and Address

- **Endpoint**: `/add`
- **Method**: `POST`
- **Description**: This endpoint allows the registration of a new user along with their address. The user's name and address details are stored in the respective tables.

#### Request

- **Content-Type**: `application/json`
- **Request Body**:

```json
{
  "name": "John Doe",
  "addressLine": "123 Main St",
  "city": "Springfield",
  "state": "IL"
}
```

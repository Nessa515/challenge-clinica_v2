
# Challenge - Veterinary 2.0

This is a small project that consists of a REST API for a Veterinary Clinic.

The main HTTP request methods have been implemented:
GET - Retrieves requested data.
POST - Creates new data.
PUT - Updates existing data.
DELETE - Deletes data.


## Table of Contents
* [Technologies](#technologies)
* [Installation](#clone-the-project)
* [Running](#running-locally)


## Technologies

Project created using:

* Express: 4.18.2
* Typescript: 5.1.3
* NodeJs: 2.0.0
* JsonWebtoken: 9.0.0
* MongoDB



## Clone the project

```bash
  git clone https://github.com/Nessa515/challenge-clinica_v2.git
```

Enter the project directory

```bash
  cd challenge-clinica-v2
```

Install the dependencies

```bash
  npm install
```


## Running locally

After installing and following the instructions above, run the following command to run the application:

```bash
    npm run dev
```

## Environment variables

To run this project, you will need to add the following environment variables to your .env

`- MONGO_URI`

`- JWT_SECRET`
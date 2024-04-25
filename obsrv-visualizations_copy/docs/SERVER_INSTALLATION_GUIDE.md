# Obsrv Sample Server Application

This is a sample nodejs project which can be used to invoke Obsrv Data Api's.

## Prerequisites

Before you proceed with the installation, please ensure you have the following prerequisite:

- Latest stable version of Node.js installed on your system.

## Installation

Follow the steps below to set up and run the project locally:

#### 1. Clone the Repository

```bash
git clone https://github.com/yravinderkumar33/sunbird-obsrv-workshop-example-application
```

#### 2. Navigate to project directory

```bash
cd server 
```

#### 3. Install Dependencies

```bash
npm install
```

#### 4. Configure Environment variables

Configure below mentioned environment variables to run your server

| Environment variable key | Description |
|----------|----------|
| PORT  | Port number to run your server   | 
| OBSRV_API_KEY   | Obsrv API Key  | 
| OBSRV_API_HOST    | Obsrv API Host  | 
| DATASOURCE    | Datasource name to run sql query  | 
| SQL_QUERY    | SQL Query to fetch data  | 

** Please reach out to the administrator for API key access.**

#### 5. Run the development server

```bash
npm run start
```

The application should now be up and running at http://localhost:4000/. Port number might vary as per the configuration.


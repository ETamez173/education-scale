## Application 

SchoolScale is a single page responsive CRUD web application that helps users weigh school choices quickly and avoid overpaying for education. The app takes users thru a menu of degree / program options they can choose from and presents the users with career earnings research and tuition costs and give them the opportunity to enter savings, grants and scholarship data into the app so they can generate a Benefit/ Cost Ratio Analysis which reveals the long term benefits of each potential Education Plan.

## Wireframe

https://app.moqups.com/qrM1RaKh2X/edit/page/a3891d6b7


## ERD
https://dbdiagram.io/d/5e39d6399e76504e0ef108a1


## Install JSON Server

`npm install -g json-server`

Create a database.json file with some data

```
{
  "customers": [

  ],
  "schools": [
    {
      "id": 1,
      "schoolName": "MTSU"
    },
    {
      "id": 2,
      "schoolName": "Tennesse Tech"
    },
    {
      "id": 3,
      "schoolName": "Vanderbilt"
    },
    {
      "id": 4,
      "schoolName": "U of I Chicago"
    },
    {
      "id": 5,
      "schoolName": "U of I Urbana"
    },
    {
      "id": 6,
      "schoolName": "Kentucky State"
    },
    {
      "id": 7,
      "schoolName": "University of OH"
    },
    {
      "id": 8,
      "schoolName": "Columbia State"
    },
    {
      "id": 9,
      "schoolName": "Nashville School of Software"
    },
    {
      "id": 10,
      "schoolName": "Bubbas School of Learning"
    }
  ],
  "degreeschools": [
    {
      "id": 1,
      "schoolId": 1,
      "degreeId": 1,
      "studyYears": 4,
      "annualCost": 12500,
      "totalCost": 50000,
      "schoolSearch": false
    },
    {
      "id": 3,
      "schoolId": 3,
      "degreeId": 1,
      "studyYears": 4,
      "annualCost": 25000,
      "totalCost": 100000,
      "schoolSearch": false
    },
    {
      "id": 4,
      "schoolId": 4,
      "degreeId": 1,
      "studyYears": 4,
      "annualCost": 20000,
      "totalCost": 80000,
      "schoolSearch": false
    },
    {
      "id": 5,
      "schoolId": 5,
      "degreeId": 1,
      "studyYears": 4,
      "annualCost": 12000,
      "totalCost": 48000,
      "schoolSearch": false
    },
    {
      "id": 6,
      "schoolId": 6,
      "degreeId": 1,
      "studyYears": 4,
      "annualCost": 8000,
      "totalCost": 32000,
      "schoolSearch": false
    },
    {
      "id": 7,
      "schoolId": 7,
      "degreeId": 1,
      "studyYears": 4,
      "annualCost": 10000,
      "totalCost": 4000,
      "schoolSearch": false
    },
    {
      "id": 8,
      "schoolId": 8,
      "degreeId": 1,
      "studyYears": 4,
      "annualCost": 6500,
      "totalCost": 26000,
      "schoolSearch": false
    },
    {
      "id": 9,
      "schoolId": 10,
      "degreeId": 1,
      "studyYears": 4,
      "annualCost": 1200,
      "totalCost": 4800,
      "schoolSearch": false
    },
    {
      "id": 10,
      "schoolId": 1,
      "degreeId": 5,
      "studyYears": 4,
      "annualCost": 8500,
      "totalCost": 34000,
      "schoolSearch": false
    },
    {
      "id": 11,
      "schoolId": 4,
      "degreeId": 5,
      "studyYears": 4,
      "annualCost": 15000,
      "totalCost": 60000,
      "schoolSearch": false
    },
    {
      "id": 13,
      "schoolId": 1,
      "degreeId": 3,
      "studyYears": 4,
      "annualCost": 9500,
      "totalCost": 38000,
      "schoolSearch": false
    },
    {
      "id": 14,
      "schoolId": 2,
      "degreeId": 3,
      "studyYears": 4,
      "annualCost": 13000,
      "totalCost": 52000,
      "schoolSearch": false
    },
    {
      "id": 15,
      "schoolId": 3,
      "degreeId": 3,
      "studyYears": 4,
      "annualCost": 15000,
      "totalCost": 60000,
      "schoolSearch": false
    },
    {
      "id": 16,
      "schoolId": 4,
      "degreeId": 3,
      "studyYears": 4,
      "annualCost": 16000,
      "totalCost": 64000,
      "schoolSearch": false
    },
    {
      "id": 17,
      "schoolId": 5,
      "degreeId": 3,
      "studyYears": 4,
      "annualCost": 7500,
      "totalCost": 30000,
      "schoolSearch": false
    },
    {
      "id": 18,
      "schoolId": 6,
      "degreeId": 3,
      "studyYears": 4,
      "annualCost": 9000,
      "totalCost": 36000,
      "schoolSearch": false
    },
    {
      "id": 19,
      "schoolId": 7,
      "degreeId": 3,
      "studyYears": 4,
      "annualCost": 7000,
      "totalCost": 28000,
      "schoolSearch": false
    },
    {
      "id": 20,
      "schoolId": 8,
      "degreeId": 3,
      "studyYears": 4,
      "annualCost": 800,
      "totalCost": 3200,
      "schoolSearch": false
    },
    {
      "id": 21,
      "schoolId": 1,
      "degreeId": 4,
      "studyYears": 4,
      "annualCost": 10000,
      "totalCost": 40000,
      "schoolSearch": false
    },
    {
      "id": 22,
      "schoolId": 2,
      "degreeId": 4,
      "studyYears": 4,
      "annualCost": 12500,
      "totalCost": 50000,
      "schoolSearch": false
    },
    {
      "id": 23,
      "schoolId": 3,
      "degreeId": 4,
      "studyYears": 4,
      "annualCost": 15000,
      "totalCost": 60000,
      "schoolSearch": false
    },
    {
      "id": 24,
      "schoolId": 4,
      "degreeId": 4,
      "studyYears": 4,
      "annualCost": 17000,
      "totalCost": 68000,
      "schoolSearch": false
    },
    {
      "id": 25,
      "schoolId": 5,
      "degreeId": 4,
      "studyYears": 4,
      "annualCost": 9000,
      "totalCost": 36000,
      "schoolSearch": false
    },
    {
      "id": 26,
      "schoolId": 6,
      "degreeId": 4,
      "studyYears": 4,
      "annualCost": 8750,
      "totalCost": 35000,
      "schoolSearch": false
    },
    {
      "id": 27,
      "schoolId": 7,
      "degreeId": 4,
      "studyYears": 4,
      "annualCost": 4000,
      "totalCost": 16000,
      "schoolSearch": false
    },
    {
      "id": 28,
      "schoolId": 8,
      "degreeId": 4,
      "studyYears": 4,
      "annualCost": 900,
      "totalCost": 3600,
      "schoolSearch": false
    }
  ],
  "degrees": [
    {
      "id": 1,
      "educationName": "Electical Engineer",
      "earningsAvg": 90000,
      "earningsHigh": 98000,
      "earningsLow": 84000,
      "userId": 1
    },
    {
      "id": 2,
      "educationName": "Chemical Engineer",
      "earningsAvg": 90000,
      "earningsHigh": 98000,
      "earningsLow": 84000,
      "userId": 1
    },
    {
      "id": 3,
      "educationName": "Registered Nurse",
      "earningsAvg": 60000,
      "earningsHigh": 73000,
      "earningsLow": 55000,
      "userId": 1
    },
    {
      "id": 4,
      "educationName": "Computer Science",
      "earningsAvg": 95000,
      "earningsHigh": 105000,
      "earningsLow": 80000,
      "userId": 1
    },
    {
      "id": 5,
      "educationName": "Liberal Arts",
      "earningsAvg": 30000,
      "earningsHigh": 33000,
      "earningsLow": 24000,
      "userId": 1
    },
    {
      "id": 6,
      "educationName": "Full Stack Software Developer",
      "earningsAvg": 95000,
      "earningsHigh": 105000,
      "earningsLow": 80000,
      "userId": 1
    },
    {
      "id": 7,
      "educationName": "Front-End Web Desinger/Developer",
      "earningsAvg": 95000,
      "earningsHigh": 105000,
      "earningsLow": 80000,
      "userId": 1
    },
    {
      "id": 8,
      "educationName": "Data Science",
      "earningsAvg": 95000,
      "earningsHigh": 105000,
      "earningsLow": 80000,
      "userId": 1
    },
    {
      "id": 9,
      "educationName": "Data Analytics",
      "earningsAvg": 95000,
      "earningsHigh": 105000,
      "earningsLow": 80000,
      "userId": 1
    }
  ],
  "mycareeroptions": [
   
  ],
  "loans": [
   
  ]
}
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.





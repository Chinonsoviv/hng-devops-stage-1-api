# HNG DevOps Stage 1 - Personal API

## Overview
This project is a simple Node.js API deployed on an Ubuntu server using Nginx as a reverse proxy and PM2 as a process manager. It was built as part of the HNG DevOps Stage 1 task.

---

## Live URL
http://YOUR-SERVER-IP

---

## API Endpoints

### GET /
Returns API status

Response:
{
  "message": "API is running"
}

---

### GET /health
Returns system health status

Response:
{
  "message": "healthy"
}

---

### GET /me
Returns personal information

Response:
{
  "name": "Chinonso Vivian Ojeri",
  "email": "chinonsovivianojeri@gmail.com",
  "github": "https://github.com/Chinonsoviv"
}

---

## Tech Stack
- Node.js
- Express.js
- PM2
- Nginx
- Ubuntu Server

---

## Deployment Steps Summary
- API built with Node.js
- Hosted on Ubuntu EC2 instance
- Managed using PM2
- Nginx used as reverse proxy
- GitHub used for version control

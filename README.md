# 🔗 URL Shortener API

Welcome to the URL Shortener API project! 🎯 This API allows users to shorten long URLs and redirect them to the original URL using a unique short URL.

## 🛠️ Tech Stack

Node.js 🌐

Express.js 🚀

MongoDB 🍃

TypeScript 🔥

Mongoose 📄

Valid-url

Short-Unique-Id

## 📌 Features

✅ Shorten any URL
✅ Redirect to the original URL
✅ URL Validation
✅ MongoDB Integration

## 🔑 Prerequisites

Make sure you have the following installed:

Node.js (>= 18.x.x)

MongoDB

npm or yarn

## ⚙️ Installation

### Clone the repository:

$ git clone https://github.com/your-username/urlshortner.git

$ cd urlshortner

### Install dependencies:

$ npm install

### Configure Environment Variables:
Create a .env file in the root directory and add your MongoDB URI:

### Start the Server:

npm run dev

## 🚦 API Endpoints

POST  /shorten      Shorten a URL

GET   /:shortUrl   Redirect to Original URL

### Example Request

POST /shorten

{
  "originalUrl": "https://example.com"
}

Response:

{
  "shortUrl": "http://localhost:5000/abc123"
}

## 🎯 How It Works

The API validates the given URL.

If the URL is valid, a unique short URL is generated.

The original URL and its corresponding short URL are saved to the MongoDB database.

When accessing the short URL, the API will redirect to the original URL.

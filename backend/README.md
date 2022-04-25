# CHALLENGE BACKEND - Voice Recorder

## Project description

This is the repository for an audio recorder API.

## Technologies used:

- Node JS
- Express
- Sequelize
- Dotenv
- Multer
- Mocha & Chai

## How to start

- Console : git clone https://github.com/keilty/audio-record-app.git
            cd backend
            npm install
            
- Change file name from .env.example to .env and insert your database info.
- Change folder name from .env.uploadas to uploads that is the destination of the record files.

- Generate de database:
    * sequelize db:create
    * sequelize db:migrate
    * sequelize db:seed:all

- Console: npm start.
- The app will run at localhost:3100

## Testing

- Console: npm start.

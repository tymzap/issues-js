# issues.js
Simple issue tracker written in Express and React

## Installation
- `docker-compose up`: run Docker containers. App will be exposed on [localhost:3000](localhost:3000)

## Development
- `npm run build`: build the app
- `npm run watch`: run concurrent watcher for both server and client. Browsersync will be exposed on [localhost:3010](localhost:3010)
- `sequelize db:seed:all`: install sample data

## What has been done

- Issue list on frontend, with functionality of pushing issues to next columns and dialog window for adding new task. I used Material Design to quickly achieve aesthetic look and fetch API for communication with backend. React code was structured by hooks to achieve modularity.
- Backend is serving static files as well as exposing API endpoints. Models were structured via Sequelize to allow fast development of next models and benefactions of migrations and seeders. There are two models: issues and users so it is ready to extend with login functionality.
- App is fully dockerized, task of adding new services to extend it should be very easy. Foundation for thorough testing was also made as app supports switching between local and test environments and databases. App has all tools for development including watchers and browsersync.

## What should be improved

- Backend is testable as foundation for testing was made, but it has no tests. Frontend neither
- Backend and frontend lacks input validation
- Frontend and backend lacks error handling
- Frontend lacks responsiveness on mobile devices
- Backend should have many security and optimalization improvements, like compression, use of authorization and authentication, etc

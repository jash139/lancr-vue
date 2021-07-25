# Lancr
  Lancr is a full-stack application which allows user to create profiles, projects, etc and hire as well as work for someone based on requirements. Users can also connect and interact with each other.

  The app uses `Nuxtjs`, `Vue` and `Vuex` for state management.
  `Vuetify` and `Buefy` have been used for UI components.
  `Firebase` is used for user authentication and chat functionality.

* Website: [https://lancr.netlify.app]
* Backend: [https://github.com/jash139/lancr-vue-backend]

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run generate
```

Create a `.env` file in the root directory of the project with following values of firebase config and `BASE_URL` if running backend other than `localhost:5000`.

```dosini
API_KEY=
AUTH_DOMAIN=
PROJECT_ID=
STORAGE_BUCKET=
MESSAGING_SENDER_ID=
APP_ID=
BASE_URL=
```

Your front-end application is good to go!
Proceed to [backend](https://github.com/jash139/lancr-vue-backend) setup.
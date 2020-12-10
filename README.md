## Third party application
- **Github** - code storage (https://github.com/federatedrealty)
- **GCloud Platform** - backed server (**Federa App** project) (https://console.cloud.google.com/)
- **Firebase** - frontend server (**Federa App** project) (https://console.firebase.google.com/)
- **Firebase** - frontend test server (**Federa Test Enviroment** project) (https://console.firebase.google.com/)
- **Figma** - apps design (https://www.figma.com/)
- **Zoho** - ecosystem for interactions with team like chat and sprints (https://connect.federa.com/)

## Website
This project aims to give a complete website over Firebase Functions and Nuxt.js SSR.
It is developed with Vue.js and Nuxt.js.

To get information about api you need to go to **federa-api** repository to docs folder.

###Endpoints
- Website test env - https://federa-test-enviroment.web.app/
- Api - api.federa.com

## Branches
For our version management we are using Git.
Each branch is responsible for its own task.

There are 2 branches responsible for deployment:
- Master - current state of production server.
- Develop - current state of test server.

If you want to update them, you need, for develop, create the branch with its own name and related changes
(info about custom branches locates below), and then crete PR (pull request) to develop branch.
For master, you need to create pull request form develop to master.

When you want to create a custom branch, you need to checkout form develop branch and name a new branch with this pattern
```bash
[feature|hotfix|fix]/[TASK_ID](/[TASK_NAME])?
```

Examples:
- feature/YK-123/Task-name
- feature/YK-121
- hotfix/YK-134/helloWorld
- fix/YK-873

## Getting started
To install dependencies locally you need to navigate to *./federa-app/nuxt-ssr/* 
and run command in this directory.

```bash
~# yarn install
or
~# npm install
```

### Local server
To start server locally you need to navigate to *./federa-app/nuxt-ssr/* 
and run command in this directory.

```bash
~# yarn start
or
~# npm run start
```

### Development and Production Deployment
For deployment, we are using github ci cd.
All what you need to deploy your changes is to create pull request to development branch.
When changes are deployed to development branch and tested, you can create
pull request to master and finally update production server.

#### vue build folder for firebase
federa-app/functions/.nuxt/

#### nuxt public asset folder for firebase
federa-app/public/_nuxt/

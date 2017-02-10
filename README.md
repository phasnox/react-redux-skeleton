
# React Redux Skeleton

This project uses [react](https://github.com/facebook/react), [redux](https://github.com/rackt/redux), [redux-router](https://github.com/rackt/redux-router) and [font-awesome]() as it's basis and forms a skeleton around these tools to allow you to get your app started quickly and easily.

This skeleton is suitable for both small and larger apps with multiple routes and numerous components and connecting to APIs.

It is based on https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e, thanks to Will Becker for those pointers.

Install with:

```
$ npm i
```

Run the local server with:

```
$ npm start
```

Or, if you have docker-compose just run

```
docker-compose up
```


## About this fork

This project is a fork from lsjroberts [react-redux-skeleton](https://github.com/lsjroberts/react-redux-skeleton), adding the following:

1. **Dockerfile and docker-compose.yml**. To get the docker container up and
   running do: `docker-compose up`, you can access the server on
   http://localhost:8077/. The first time, you will also need to run `docker
   exec -it reactreduxskeleton_app_1 setup`
2. **Nginx config**. The app runs behind an nginx server so it can be paired up
   with any API application you have. Just edit and or replace 
   the `location /api` in `conf/app_nginx.conf`.
3. **Fontawesome**. Also added an `<Icon />` component for ease of use(see the
   example)
4. **Production conf**: Production ready configuration files for nginx and
   docker



## Examples

The skeleton comes with some examples of routing and components:

1. Counter (demonstrating basic redux usage)
2. Current converter (more complex data and asynchronous actions with an API middleware)



## Components & Containers

It is important to maintain a distinction between dumb components that simply render content and smart components (containers) that handle business logic. This separation increases the reusability of both types.

A component must only contain html (jsx) and styling, deferring any dom events to it's parent container. Containers define event handlers and pass these to their children, they must not include any styling or content.

For example you may have a `<SearchForm />` container that defines an `onSubmit` handler. This is passed down to it's child `<Form />` component which would then only specify how the form is styled.

### Shared vs. route components and containers

Generic components and containers that you are likely to reuse across multiple routes should be kept in `shared/`.

Many routes will have components that are specific to them and will likely all have their own container. These should be kept in `routes/my-route/`.



## State

Your app's store is configured in `modules/store.js`.



## Modules: actions, reducers and dispatching

Modules are stored in `modules/`.



## Routes

Your app's routes are defined in `routes/routes.js`.



## Import aliases

Webpack is configured to allow you to import your local files via aliases instead of long references to relative paths such as `../../../`.

| Alias | Directory | Example |
|-------|-----------|---------|
| modules | modules/ | `import example from 'modules/example';` |
| components | shared/components | `import example from 'components/example';` |
| containers | shared/containers | `import example from 'containers/example';` |
| styles     | assets/styles     | `@import '~styles/mixins/example';` |
| images     | assets/images     | `import logo from 'images/logo.png';` |
| fonts      | assets/fonts      | `src: url('fonts/comic-sans.woff');` |



## NOTE: Font-awesome License as of v4.7.0
- The Font Awesome font is licensed under the SIL OFL 1.1:
  - http://scripts.sil.org/OFL
- Font Awesome CSS, LESS, and Sass files are licensed under the MIT License:
  - https://opensource.org/licenses/mit-license.html
- The Font Awesome documentation is licensed under the CC BY 3.0 License:
  - http://creativecommons.org/licenses/by/3.0/
- Attribution is no longer required as of Font Awesome 3.0, but much appreciated:
  - `Font Awesome by Dave Gandy - http://fontawesome.io`
- Full details: http://fontawesome.io/license/

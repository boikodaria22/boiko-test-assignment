# test-assignment

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



## Technologies
Vue 3 - the main framework for creating Single Page Applications (SPA).
Pinia - a modern state management library, used instead of Vuex.
Vuetify - a component library for building interfaces with Material Design.
Vue Router - a router for managing page navigation.
TypeScript - added for static typing and improving code quality.
Babel - used for code transpilation, ensuring compatibility with older browsers.
ESLint + Prettier - used for code quality, linting, and formatting.

## Configuration

<!-- This section explains the choices made for configuring the project, including tooling and libraries. -->

When creating the project, I decided to place configurations for Babel, ESLint, and other tools in `package.json`. This approach is convenient for small projects because it avoids the need to create additional files. However, in larger projects, it is better to create separate configuration files, as they are easier to manage and can be reused across multiple projects. Storing configurations in separate files simplifies the use of various tools for managing configurations, such as IDEs or CI/CD systems.

I also chose to use Babel with TypeScript, as Babel alongside TypeScript enhances compatibility and flexibility for the project.

By default, Vue Router operates in hash mode, but I opted to use history mode for "clean" URLs and better SEO performance.

Additionally, I used the Composition API, as it is currently the officially recommended approach for development in Vue 3.

I also used Pinia. Unlike Vuex, Pinia has built-in TypeScript support, making it more convenient and modern.

---

## Implementation

<!-- This section explains the structure and how the application was implemented, including use of composables, store management, and file organization. -->

I created a store using Pinia for the convenience of writing the code. I also created composables for easier handling of API requests.

I created a folder for types to facilitate easy access and data validation.

In the `components` folder, I store all reusable code, which significantly reduces the amount of code in parent components.

In the `pages` folder, I store components that will be displayed when navigating through routes.

I also created several composables for data validation and formatting.

---

## File Structure

<!-- If applicable, explain the file structure of the project to provide additional clarity on organization. -->
src/
├── assets/          # images
├── components/      # Reusable components
├── pages/           # Pages
├── store/           # State managed via Pinia
├── types/           # Type definitions for TypeScript
└── composables/     # Utility functions



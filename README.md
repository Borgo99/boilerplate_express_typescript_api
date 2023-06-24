# Boilerplate for Express-Typescript Project

To test it run

```shell
npm run dev
```

To build it run

```shell
npm run build
```

To run in produciton

```shell
npm run start
```

## Add MongoDB

Install Mongo dependencies

```shell
npm run install:mongo
```

Uncomment the lines in the file utils/connectToMongo.ts and the line follow line in server.ts.

```js
await connectToMongo();
```

It will install also a security library for Mongo. Uncomment the following line in app.ts.

```js
app.use(mongoSanitize());
```

## Add Security Packages

Run and uncomment the lines in app.ts.

```shell
npm run install:security-packages
```

## Add authentication with JWT

```shell
npm run install:auth
```

## Add JEST

First install dependencies with

```shell
npm run install:jest
```

Then, create a jest.config.js file in the root directory

```js
module.exports = {
  transform: { "^.+\\.ts?$": "ts-jest" },
  testEnvironment: "node",
  testRegex: "/test/.*\\.(test|spec)?\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
```

Finally, create a directory "test" and create a file "index.test.ts" inside it.

```js
describe("first_tests", () => {
  test("task1", () => {
    // put your code to test here
  });
  // put other tasks here
});
// put other descriptions here
```

Try it in terminal with

```shell
clear & jest
```

# c23-wsp-project-8-tw

1. create a project folder and enter the folder

```
mkdir project1
cd project1
```

2. initialize a npm project

```
npm init
```

3. create tsconfig.json

```
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "lib": ["es6", "dom"],
        "sourceMap": true,
        "allowJs": true,
        "jsx": "react",
        "esModuleInterop":true,
        "moduleResolution": "node",
        "noImplicitReturns": true,
        "noImplicitThis": true,
        "noImplicitAny": true,
        "strictNullChecks": true,
        "suppressImplicitAnyIndexErrors": true,
        "noUnusedLocals": true
    },
    "exclude": [
        "node_modules",
        "build",
        "scripts",
        "index.js"
    ]
}
```

4. npm install typescript ts-node @types/node

```
npm install typescript ts-node @types/node
```

5. create index.js

```
require('ts-node/register');
require('./main');
```

6. add "start" script in package.json

```
"scripts": {
	"start": "ts-node main.ts",
	"test": "echo \"Error: no test specified\" && exit 1"
}
```

7. create main.ts

8. to run the ts file

```
node index.js
or
npm start
or
npm run start  // need to add start from scripts of package.json
or
npx ts-node importData.ts  // no need to have npm install
```

9. Remember to add `.gitignore` file !!!
   Sample of `.gitignore` file:

```text
node_modules

```

10.

```
npm i express @types/express


```

Then,

    Check the express file here or not from package.json

## Session setup ##

```
npm install express-session
npm install -D @types/express-session
```

11. 
    ```
npm i pg @types/pg dotenv

```

12.<h1>Bcrypt</h1>
    ```
npm install bcryptjs @types/bcryptjs

```

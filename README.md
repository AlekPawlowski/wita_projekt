# About project
This project is project to hold all data about real estate and with details of every single estate.
Project goal is to increase my front end skills.

## Current todos (to remember):
- add to estate form possibility to add new images
- make from Estate LIst generic element
- add first img to estate list
- add Loading component
- change estate id from number to uuid (in supabase)
- add to ci cd test after every pull request
## current questions:
- Component CreateEstateDetailsData -> how to describe correctly create function to satisfay and check if elements inside was added properly


## Technologies:
1. supbase to hold all user/estates (database)
2. Front  
    - react + ts
    - redux/context api to hold state
    - vite as a builder
    - react hook form
    - zoda for form scheme 
    - to find: some react picture carousel
    - tanstack query

## requirements
1. adding and cataloging estate (owner, is rent / sold, adreess, price, door code, avibility, segment (ex. premimum, low budget))
2. Contract management (tenant/owner data, contract period, attaching scans)
3. Payment management (rent, electricity, tax, etc. with payment deadlines)
4. Failures (assignment to real estate and failure description)
5. Employees (revenue, number of properties, etc.)
6. Three categories of access: Employee/Administrator/Accounting
7. add push notification if something need qdditional intrest (ex. contract period runinnig out for a month or some failure was added)

## additional requiremnets 
- add payment history to single esate or if there is some 
- history of contractors ( those guys who rent )
- add dark mode
- pagination at all list sites

## sites :
### all ( admin / employee / account ):
- list of estates (admin and account see all, employee see only those that he manages):
    1. estate main details ( avatar, name, adress, avibility ) with details button
    2. form to sort properties by name (alphabetical order, segment order, avibility order)
    3. form to look by name (input name and sort)
    4. form to sort by employee (admin user)

- esatate details
    1. estate details (owner, adress, avibility, price, door code, segment)
    2. contract menagment (contract start, contract period, for admin and acconting: attaching scans, admin: owner)
    3. payment enagment (admin & acconting)
    4. failure description
    5. emploee who is a keeper (admin and account)
    6. form to change properties details
    7. current revanue of estate (if available then 0)
    8. estate pictures in carousel
    9. add new failures 

- form to add failures
    - description of a failure
    - status of a failure (solved, to do, in progress)

- form to add estate (fields in list):
    - name
    - adress
    - keeper (default unassigned)
    - owner (name and phone number)
    - market price
    - contract start data (optional)
    - contract period (optional)
    - avibility
    - door code (optional)
    - failure description (optional)
    - rent price (revanue)
    - fixed cost with payment deadlines:
        1. rent 
        2. electricity
        3. tax

- form to change properties details (basicly copy of add estate but with filled form properties)

## admin and acconting:
- list of all employees 
    - name of employee where its link to employee details
    - number of properties that employee maintain
    - detail link button
    - form to sort by alphabetical order or by number of properties
    - sort by name and surname
- employee details:
    - awatar
    - employee name
    - salary
    - revanue
    - number of properties 
    - contract

## admin
- list of all estate owners:
    1. owner name
    2. number of properties
    3. details link button
-  owner details:
    - owner name and phone number
    - keepers name (list of keepers of estates with employee detail link)
    - list of estates that owner have:
        - avatar
        - name
        - adress
        - segment
        - details link

- list of all app user:
    - all admin / account / employee accounts with:
        - name
        - access 
        - details link
        - update user details
        - block user
        - edit user
    - sort users by acces level or name
    - add new user button (go to add new user form)

- add new user form:
    - name
    - acces level
    - email
    - phone number
    - location


## scenarios:
    - if user gonna be blocked by admin, then all estates that belongs to that account change the keeper status to unassign and needs to be assing manualy in every estate details - to think about it
    - there is a possibility to add only failures, so there is no need to change whole state each time when some flaw will happen

## summary:
- **regular** employer can:
    - add estate (only with his as a keeper)
    - see estates that he maintain
    - see the details of estate
    - add flaws in apartments
    - can update estate details
- **account** employer can:
    - see all estates
    - see details of estate
    - cannot change details of estate
    - cannot add estates
    - can see a list of all user with employees status
    - can see a details of single employer
    - can see all revanues and damage lists
- **admin** can all:
    - see all estates
    - add estates
    - add user and change or remove users details
    - see all owners site
    - see owner details
    - see list of all users
    - can change acces level

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## question 
- formSchema.ts, refineFunc and transformToNumber args types
- supabasce cache -> any caching or something?
- organize difrent level of acces levels, where to 
- estate form types for default values
- where put estateFormFields element (my target would be another folder in src directory that calls formFieldsDetails)
- help with add images to db
- pass props in HOC without knowing what the props will be and how to type them
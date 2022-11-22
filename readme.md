 ## Redesign the todolist app ## 

<h3><b>  Postgres database setup </h3></b>
The database should have two tables: users and todo.
Table “users” should have the following properties:
1. id
2. username
3. password
Table “todo” should have the following properties:
1. id
2. title
3. description
4. is_completed
5. user_id
You need to create tables with the information above and insert some records to the tables.

<h3><b> Basic express app</h3></b>
1. The express app should handle the API routes and serve the static files.
2. You should have two folders for serving the files: public and private. 
  - The “public” folder should have a html, js and css for login feature. 
  -  And the “private” folder should contain html, js, css for presenting the todo items.
3.  Please note that the application should have a guard middleware to protect the files in the
private folder.

<h3><b>Authentication</h3></b>
User should login in order to view his/her todo items. Please create a login function with
express-session. Website should redirect to the task list page after login successfully.

<h3><b>Get all todo items</h3></b>
1. In the task list page, the user should be able to view his/her all todo items. 
2. Please create an endpoint for the todo item retrieving and the UI to present the retrieved todo items.
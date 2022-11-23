DROP TABLE IF EXISTS todo;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR,
	password VARCHAR,
	created_at TIMESTAMP DEFAULT NOW(),
	updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE todo (
	id SERIAL PRIMARY KEY,
	title VARCHAR,
	description VARCHAR,
    is_completed VARCHAR,
	user_id INT,
	created_at TIMESTAMP DEFAULT NOW(),
	updated_at TIMESTAMP DEFAULT NOW(),
	FOREIGN KEY(user_id) REFERENCES users(id)
);

INSERT INTO "users" ("username", "password") VALUES ('colin', 'colin');
INSERT INTO "users" ("username", "password") VALUES ('peter', 'peter');

INSERT INTO "todo" ("title", "description", "is_completed", "user_id") VALUES ('peter','go to class', 'completed', 1), ('mary', 'go to dance', 'incompleted', 2), ('peter', 'go to bed', 'completed', 3);

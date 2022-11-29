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
INSERT INTO "users" ("username", "password") VALUES ('bruce', 'bruce');


INSERT INTO "todo" ("title", "description", "is_completed", "user_id") VALUES ('go to class','9am to 6pm go to computer class', 'yes', 1), ('go to dance', '7pm to 10pm go to latin dance class', 'not_yet', 2), ('go to bed', '11pm to 8am go sleeping', 'yes', 3);

-- Active: 1700477906003@@127.0.0.1@5432@fullstack

CREATE DATABASE fullstack;

-- CREATE EXTENSION citext;

-- CREATE DOMAIN domain_email AS citext

-- CHECK(

--    VALUE ~ '^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$'

-- );

-- SELECT 'anvesh@gmail.com'::domain_email;

CREATE TABLE
    IF NOT EXISTS users(
        user_id uuid PRIMARY KEY DEFAULT gen_random_uuid (),
        name TEXT,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
        contactNumber NUMERIC,
        payment TEXT,
        address JSONB DEFAULT '{"country": "", "city": "", "street":"", "zip_code":""}'
    );

CREATE TABLE IF NOT EXISTS cartitems (
    product_id UUID PRIMARY KEY,
    user_id UUID,
    quantity NUMERIC,
    UNIQUE(product_id, user_id),
    CONSTRAINT user_id
    FOREIGN KEY(user_id) 
	REFERENCES users(user_id)
);




CREATE TABLE IF NOT EXISTS reviews(
    user_id UUID NOT NULL,
    product_id UUID NOT NULL,
    review TEXT,
    CONSTRAINT user_id
    FOREIGN KEY(user_id) 
	REFERENCES users(user_id)
);

DROP Table users ;
DROP Table cartitems ;
DROP Table reviews ;

INSERT INTO
    cartitems (product_id, user_id, quantity)
VALUES (
        'dbdd2ff6-c240-4e2a-b1a2-51be8724f5ca',
        'dbdd2ff6-c240-4e2a-b1a2-51be8724f0ca',
        '11'
    )

    INSERT INTO
    users (name, email, password)
VALUES (
        'moshe',
        'ilan',
        '11'
    )

UPDATE users
SET
add = jsonb_set(
        add
,
            '{country}',
            '"israel"'
    );

jsonb_set(
    add
        jsonb,
        "{country}",
        '{0,country}',
        '"israel"' jsonb [,
        create_missing FALSE]
);

UPDATE users
SET
add = jsonb_set(
        add
,
            '{country}',
            '"israel"',
            false
    );

INSERT INTO
    cartitems (name, email, password, payment)
VALUES (
        'm',
        'moisi6510@gmail.com',
        '11',
        'Payment Method'
    )

UPDATE users
SET
add = jsonb_set(
        add
,
            '{country}',
            '"israel"'
    );

SELECT add ->> 'country' AS Feeling FROM users;

SELECT add FROM users 

CREATE TABLE cartitmes 
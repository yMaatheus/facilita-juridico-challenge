CREATE TABLE IF NOT EXISTS customers (
		id uuid DEFAULT gen_random_uuid(),
    name VARCHAR NOT NULL,
  	email VARCHAR NOT NULL,
		phone VARCHAR NOT NULL,
  	x INTEGER NOT NULL,
		y INTEGER NOT NULL,

		PRIMARY KEY (id)
);
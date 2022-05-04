DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mini Dress", "Clothing", 55, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("T-Shirt", "Clothing", 20.99, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Satchel","Acessories", 100.89, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dior Purfume", "Cosmetics", 120.50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("YSL Lipstick", "Cosmetics", 38.60, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MAC Foundation", "Cosmetics", 29.99, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Clay mask", "Skincare", 4.99, 420);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Face serum", "Skincare", 30, 60);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Raw Honey", "Food", 16, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chocolate", "Food", 9.99, 100);

SELECT * FROM products;
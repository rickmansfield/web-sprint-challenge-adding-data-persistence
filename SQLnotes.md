## SQL EXAMPLES

### USERS left joined to posts
```sql
SELECT 
    posts.id as post_id,
    posts.contents,
    users.username as user
FROM users
LEFT JOIN posts ON users.id = posts.user_id;
```

### Users left Joined to posts WITH FILTER
```sql
SELECT 
    p.id as post_id,
    p.contents,
    u.username as user,
    u.id as user_id
from users as u
LEFT join posts as p on u.id = p.user_id
WHERE u.id = 4;
```

### POSTS left joined to users
```sql
SELECT 
    posts.id as post_id,
    posts.contents,
    users.username as user
FROM posts
LEFT JOIN users ON users.id = posts.user_id;
```

### using alias
```sql
SELECT 
    p.id as post_id,
    p.contents,
    u.username as user
from posts as p
LEFT join users as u on u.id = p.user_id;
```

### Swap SupplierID & CategoryID with SupplierName & CategoryName... becuase names are easier to read than numbers AND GROUP by a category
```sql
SELECT 
	p.productID, p.productName, s.supplierName, categoryID, p.unit, p.price
FROM products as p
JOIN suppliers as s on p.supplierID = s.supplierID
JOIN categories as c on p.CategoryID = c.CategoryID
```

### Count the number of products per categoryName
```sql
SELECT 
	c.CategoryName, count(p.productName) as ProductCount
FROM products as p
JOIN suppliers as s on p.supplierID = s.supplierID
JOIN categories as c on p.CategoryID = c.CategoryID
group by c.CategoryName
order by productCount desc;
```
### Count number of products per SupplierName
```sql
SELECT 
	s.SupplierName, count(p.productName) as ProductCount
FROM products as p
JOIN suppliers as s on p.supplierID = s.supplierID
group by s.SupplierName
order by productCount desc;
```
### Even better group by supplierID
```sql
SELECT 
	s.SupplierName, count(p.productName) as ProductCount
FROM products as p
JOIN suppliers as s on p.supplierID = s.supplierID
group by s.SupplierID
order by productCount desc;
```

### Find the most expensive item per categroy
```sql
SELECT 
	productName, c.categoryName, max(p.price) as price 
FROM Products as p
JOIN categories as c on p.categoryid = c.categoryid
GROUP by c.categoryID
order by price desc;
```
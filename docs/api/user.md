# User

[Improve this doc](https://github.com/Xtraball/SiberianCMS-Doc/blob/master/docs/api/user.md)

---

## Create

### Description

Create a new user by providing at least an email address.

```php
$endpoint = "http://www.domain.com/admin/api_account/create"
```

#### Example

```json
{
    "role_id": 2,
    "email": "email@domain.com",
    "password": "mypassword",
    "firstname": "Firstname",
    "lastname": "Lastname"
}
```


### Request

Param|Type|Details|Default
-----|----|-------|-------
role_id|int|ACL role identifier set to the user|1
email *|string|User email|
password|string|User password - At least 6 characters|
firstname|string|User firstname|
lastname|string|User lastname

**\* Required fields**

#### Success - Example

```json
{
    "success": 1,
    "user_id": 1,
    "token": "aFef235fygd3dz3kLo98hKHfdxFguGf753f654ee"
}
```

#### Error - Example

```json
{
    "error": 1,
    "message": "This email address is already used"
}
```

### Response

Param|Type|Details|Default
-----|----|-------|-------
success/error|int|Indicate whether there was an error during the process|1
user_id|int|User unique identifier|
token|string|Use to log-in to this user account

---

## Update

### Description

Update an existing user.

```php
$endpoint = "http://www.domain.com/admin/api_account/update"
```

#### Example

```json
{
    "user_id": 1,
    "email": "new.email@domain.com",
    "firstname": "New firstname",
    "lastname": "New lastname"
}
```

### Request

Param|Type|Details|Default
-----|----|-------|-------
user_id *|int|Unique identifier received when creating a new user|
role_id|int|ACL role identifier set to the user|1
email|string|User email|
password|string|User password - At least 6 characters|
firstname|string|User firstname|
lastname|string|User lastname

**\* Required fields**

#### Success - Example

```json
{
    "success": 1,
    "user_id": 1,
}
```

#### Error - Example

```json
{
    "error": 1,
    "message": "This email address is already used"
}
```

### Response

Param|Type|Details|Default
-----|----|-------|-------
success/error|int|Indicate whether there was an error during the process|1
user_id|int|User unique identifier|

---

## Exists

### Description

Check whether a user exists.

```php
$endpoint = "http://www.domain.com/admin/api_account/exist"
```

#### Example

```json
{
    "email": "email@domain.com",
}
```

### Request

Param|Type|Details
-----|----|-------
email *|string|User email to test whether it already exists

**\* Required fields**

#### Success - Example

```json
{
    "success": 1,
    "exists": "true",
}
```

#### Error - Example

```json
{
    "error": 1,
    "message": "The email is required"
}
```

### Response

Param|Type|Details|Default
-----|----|-------|-------
success/error|int|Indicate whether there was an error during the process|1
exists|boolean|Indicate whether the given email aleady exist

---

## Authentication

### Description

Check whether the email/password combination is correct.
Return a token that should be used in a HTTP redirection allowing the user to automatically log-in.

```php
$endpoint = "http://www.domain.com/admin/api_account/authenticate"
```

#### Example

```json
{
    "email": "email@domain.com",
    "password": "mypassword",
}
```

### Request

Param|Type|Details
-----|----|-------
email *|string|User email
password *|string|User password

**\* Required fields**

#### Success - Example

```json
{
    "success": 1,
}
```

#### Error - Example

```json
{
    "error": 1,
    "message": "Authentication failed."
}
```

### Response

Param|Type|Details|Default
-----|----|-------|-------
success/error|int|Indicate whether there was an error during the process|1

---

## Forgot Password

### Description

Reset the password of a given email address and send it by email.

```php
$endpoint = "http://www.domain.com/admin/api_account/forgotpassword"
```

#### Example

```json
{
    "email": "email@domain.com",
}
```

### Request

Param|Type|Details
-----|----|-------
email *|string|User email

**\* Required fields**


#### Success - Example

```json
{
    "success": 1,
}
```

#### Error - Example

```json
{
    "error": 1,
    "message": "This email address does not exist."
}
```

### Response

Param|Type|Details|Default
-----|----|-------|-------
success/error|int|Indicate whether there was an error during the process|1
message|string|In case of error, a message is sent back by the server to provide more information|1
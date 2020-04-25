# Quick crud

An easy CRUD operation based on Factory pattern with [Mongoose](https://mongoosejs.com). There are four CRUD operations we can do:

- **`index(Model, populateOptions ,paginationOptions)`** : Finds the documents from the collection. You can also get `paginationsOptions` where you can paginate your data and `populateOptions` where you can populate the schema properties <br>
  `paginationOptions` can get three parameters:
  - `limit:number` - Resource count to show. Default is 10
  - `page:number` - Pagination page number. Default is 1.
  - `sort:string` - MongoDB property sort key. Default is `'-createdAt'`
- **`store(Model, data)`** - You can create a doc and store it to MongoDB.
- **`show(Model, where, populationOptions)`**:You can get the data by filtering the properties. `populationOptions` : schema properties seperated by space
- **`update(Model, where, data)`** - updates the first document that matches `where`. `data` is the object where you want to update the data.
- **`destroy(Model, where)`** - Deletes the first documents that matches `where` from the collection. it returns the document that has been deleted.

## Examples

### Store

```js
const qc = require('quick-crud')

qc.store(UserModel, {
	name: 'John',
	username: 'johnDoe'
}).then((d) => console.log(d))
```

**Example Response**

```js
{
  _id: 'xxxx',
  name: 'John',
  username: 'johnDoe',
  __v: 0
}
```

## Index

Fetch all resources with pagination

**Fetch all users**

```js
const qc = require('quick-crud')

qc.index(UserModel).then((doc) => {
	console.log(doc)
})
```

**Response**

```js
{
  currentPage: 1,
  pageCount: 1,
  resourceCount: 4,
  data: [
    {
      _id: 'xxxxxx',
      name: 'User 1',
      username: 'username1',
      __v: 0
    },
    {
      _id: 'xxxxxx',
      name: 'User 2',
      username: 'username2',
      __v: 0
    },
    //..............
  ]
}
```

**Fetch all posts with user polulation**

```js
const qc = require('quick-crud')

qc.index(PostModel, 'user', {
	page: 2,
	limit: 5
}).then((doc) => {
	console.log(doc)
})
```

**Response**

```json
{
	"currentPage": 2,
	"pageCount": 2,
	"resourceCount": 10,
	"data": [
		{
			"_id": "xxxx",
			"title": "example title 1",
			"body": "example body 1",
			"user": {
				"_id": "xxxx",
				"name": "User 1",
				"username": "username1",
				"__v": 0
			},
			"__v": 0
		},
		{
			"_id": "xxxx",
			"title": "example title 1",
			"body": "example body 1",
			"user": {
				"_id": "xxxx",
				"name": "User 2",
				"username": "username2",
				"__v": 0
			},
			"__v": 0
		}
		// ........................
		// ........................
	]
}
```

### Update

**Update a post by id**

```js
const qc = require('quick-crud')

qc.update(
	Post,
	{ _id: 'xxxx' },
	{
		title: 'title updated'
	}
).then((doc) => console.log(doc))
```

**Response**

```js
{
    _id: 'xxxx',
    title: 'title updated',
    body: 'example body 10',
    user: 'xxxx',
    __v: 0
}
```

### Destroy

**Delete a user with username**

```js
const qc = require('quick-crud')

qc.destroy(User, {
	username: 'newusername'
}).then((doc) => {
	console.log(doc)
})
```

**Response**

```js
{
  _id: 'xxxx',
  name: 'new name',
  __v: 0,
  username: 'newusername'
}
```

**Throws exception if no document found**

```js
// Exception
UnhandledPromiseRejectionWarning: Error: Resource not found
```

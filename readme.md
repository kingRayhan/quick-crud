# QuickCrud.js

![](https://img.shields.io/npm/dt/quick-crud)
![](https://img.shields.io/bundlephobia/minzip/quick-crud)
![](https://img.shields.io/github/repo-size/kingrayhan/quick-crud)
![](https://img.shields.io/github/issues/kingrayhan/quick-crud)
![](https://img.shields.io/github/license/kingrayhan/quick-crud)


**Installation**
```bash
npm i quick-crud
```

or

```bash
yarn add quick-crud
```


An easy CRUD operation based on Factory pattern with [Mongoose](https://mongoosejs.com). There are four CRUD operations we can do:

- **`index({model, where, populateOptions, paginationOptions})`** : Fetch all documents with pagination.

  - `model` - Mongoose model.
  - `where` - MongoDB filter object.
  - `populateOptions` - Mongoose population object/string.
  - `paginationOptions` can get three parameters.
    - `limit:number` - Resource count to show. Default is 10
    - `page:number` - Pagination page number. Default is 1.
    - `sort:string` - MongoDB property sort key. Default is `'-createdAt'`

- **`store({model, data})`** - You can create a doc and store it to MongoDB.
  - `model` - Mongoose model.
  - `data` - An object of data to store in MongoDB based on Mongoose Schema

- **`show({model, where, populationOptions})`**: Fetch a single document via filter key.
  - `model` - Mongoose model.
  - `where` - MongoDB filter object.
  - `populateOptions` - Mongoose population object/string.

- **`update({model, where, data})`** - updates the first document that matches `where`. `data` is the object where you want to update the data.
  - `model` - Mongoose model.
  - `where` - MongoDB filter object.
  - `data` - An object of data to update that matches with where filter key(s).

- **`destroy({model, where})`** - Deletes the first documents that matches `where` from the collection. it returns the document that has been deleted.
  - `model` - Mongoose model.
  - `where` - MongoDB filter object.
- **`destroyAll({model: where})`** - Deletes all documents that matches `where` from the collection.
  - `model` - Mongoose model.
  - `where` - MongoDB filter object.

## Examples

### Store

```js
const qc = require('quick-crud')

qc.store({model: UserModel, data: {
	name: 'John',
	username: 'johnDoe'
}}).then((d) => console.log(d))
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

qc.index({model: UserModel}).then((doc) => {
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

qc.index({model: PostModel, paginationOptions: {
	page: 2,
	limit: 5
} , populationOptions: {path : 'user'}}).then((doc) => {
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

**Fetch all posts those are published**
```js
qc.index({model: PostModel, where: { published: true }, paginationOptions: {
	page: 2,
	limit: 5
}}).then((doc) => {
	console.log(doc)
})
```

**Response**
```js
{
  currentPage: 1,
  pageCount: 1,
  resourceCount: 3,
  data: [
    {
      _id: 'xxxx',
      title: 'post1',
      published: true,
      __v: 0
    },
    {
      _id: 'xxxx',
      title: 'post1',
      published: true,
      __v: 0
    },
    {
      _id: 'xxxx',
      title: 'post1',
      published: true,
      __v: 0
    }
  ]
}
```


### Update

**Update a post by id**

```js
const qc = require('quick-crud')

qc.update(
{	model: Post,
	where: { _id: 'xxxx' },
  	data: {
		title: 'title updated'
	}}
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

qc.destroy({model: User, where: {
	username: 'newusername'
}}).then((doc) => {
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
UnhandledPromiseRejectionWarning: QuickCrudException: Resource not found
```

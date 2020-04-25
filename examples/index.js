const qc = require('quick-crud')
const mongoose = require('mongoose')

let dbURL = ''

mongoose.connect(dbURL, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false
})

const userScehama = new mongoose.Schema({
	name: String,
	username: String
})
const User = mongoose.model('User', userScehama)

const postSchema = new mongoose.Schema({
	title: String,
	body: String,
	user: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: 'User'
	}
})

const Post = mongoose.model('Post', postSchema)

crud
	.store(Post, {
		title: 'example title 10',
		body: 'example body 10',
		user: '5ea3cf889af8292b1c6c381e'
	})
	.then((d) => console.log(d))

qc.index(Post, 'user').then((doc) =>
	console.log(JSON.stringify(doc, undefined, 4))
)
qc.update(
	Post,
	{ _id: '5ea3d1161edcf540e49bc2f5' },
	{
		title: 'title updated'
	}
).then((doc) => console.log(doc))

qc.destroy(User, {
	username: 'unknownuser'
}).then((doc) => {
	console.log(doc)
})

qc.index(User).then((doc) => console.log(doc))

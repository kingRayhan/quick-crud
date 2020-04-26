const mongoose = require('mongoose')
// const index = require('../dist/index')
// const destroy = require('../dist/destroy')
// const show = require('../dist/show')
// const store = require('../dist/store')
// const update = require('../dist/update')
const qc = require('../dist/quick-crud')

// let dbURL = 'mongodb://rayhan:rayhan123@ds253284.mlab.com:53284/blogapi'

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
const UserModel = mongoose.model('User', userScehama)

const postSchema = new mongoose.Schema({
	title: String,
	body: String,
	published: Boolean,
	user: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: 'User'
	}
})

const PostModel = mongoose.model('Post', postSchema)

// update(UserModel, { _id: '5ea5487fa586ab2c54e14f27' })
// 	.then((d) => console.log(d))
// 	.catch((e) => console.log(e.message))

// qc.store(UserModel).then(d => console.log(d))

// store(PostModel, { title: 'post1', published: true }).then((d) => {
// 	console.log(d)
// })

// qc.index(PostModel).then((d) => {
// 	console.log(d)
// })

// update(
// 	PostModel,
// 	{ _id: '5ea59d3d008bb81c84e287de' },
// 	{ published: false }
// ).then((d) => {
// 	console.log(d)
// })

// destroyAll(PostModel, { published: false })
// 	.then((d) => {
// 		console.log(d)
// 	})
// 	.catch((e) => console.log(e.message))

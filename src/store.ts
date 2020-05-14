import { Model } from 'mongoose'

/**
 * Create a document
`* 
 * @param obj.model - Mongoose Model reference
 * @param obj.data - An object of data to store in MongoDB based on Mongoose Schema`
 *
 * @since 0.2.1
 * @author KingRayhan <me@rayhan.info>
 */
const store = (options: { model: Model<any>; data: any }) => {
	let { model, data } = options
	return model.create(data)
}

export default store

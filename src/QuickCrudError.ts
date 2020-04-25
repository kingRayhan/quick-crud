export class QuickCrudException extends Error {
	constructor(msg: string) {
		super(msg)
		this.name = 'QuickCrudException'
		this.message = msg
	}
}

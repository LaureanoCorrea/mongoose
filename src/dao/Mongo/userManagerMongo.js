import messageModel from "../models/messages.model.js"

class MessageManagerMongo {
    async getMessages(){
        return await userModel.find({})
    }

}
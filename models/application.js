const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ApplicationSchema = new Schema({
  appPass: {type: String, required: true},
  appName: {type: String, required: true},
  appOwner: {type: Schema.Types.objectId, required: true},
  applicationKey: {type: String, requried: true},
  revokedTokens: [{type: Schema.Types.ObjectId, ref: 'AppToken'}]
});

const AppTokenSchema = new Schema({
  appId: {type: Schema.Types.ObjectId, ref: 'Application' },
  token: {type: String, required: true}
});

module.exports = {
  Application: mongoose.model("Application", ApplicationSchema),
  AppToken: mongoose.model('AppToken', AppTokenSchema)
};

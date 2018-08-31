import mongoose from 'mongoose'
var bcrypt   = require('bcrypt-nodejs');

let userSchema = mongoose.Schema({
    name : { type: String, default: 'Anonimus' },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

let Users = mongoose.model('User', userSchema);

export default Users
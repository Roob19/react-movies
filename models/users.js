const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;

const userSchema = new Schema({
    name: {type: String, required: true, unique: true, trim: true},
    password: {
      type: String,
      trim: true,
      minLength: 3,
      required: true
    }
  }, {
    timestamps: true, 
    // Even though it's hashed - don't serialize the password
    toJSON: {
        transform: function(doc, ret) {
        delete ret.password;
        return ret;
        }
    }
  });

userSchema.pre('save', function (next) {
    // Save the reference to the user doc
    const user = this;
    if (!user.isModified('password')) return next();
    // password has been changed - salt and hash it
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        return next();
    });
});

module.exports = mongoose.model('User', userSchema);
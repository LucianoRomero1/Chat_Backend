const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  online: {
    type: Boolean,
    default: false,
  },
});

//Esto se llama la retornarlo con un .json en el controlador
UserSchema.method("toJSON", function () {
  //Las primeras son las que saco, el object es lo que queda
  const { __v, _id, password, online, ...object } = this.toObject();
  object.uid = _id;
  return object;
});

module.exports = model("User", UserSchema);

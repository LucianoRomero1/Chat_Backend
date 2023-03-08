const { Schema, model } = require("mongoose");

const MessageSchema = Schema({
  from: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  to: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  message: {
    type: String,
    required: true
  }
}, {
    timestamps: true
});

//Esto se llama la retornarlo con un .json en el controlador
MessageSchema.method("toJSON", function () {
  //Las primeras son las que saco, el object es lo que queda
  const { __v, _id, ...object } = this.toObject();
  return object;
});

module.exports = model("Message", MessageSchema);

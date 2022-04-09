const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ServiceSchema = new Schema({
  name: { type: String, required: true, maxLength: 30 },
  description: { type: String, required: true },
  img: { type: Object },
});
const Service = mongoose.model('Service', ServiceSchema);
module.exports = Service;
///////////////

// const stringToArray = (powerString) => {
//   return powerString !== null
//     ? powerString.split(',').map((a) => a.trim())
//     : [];
// };

// const CharacterSchema = new Schema(
//   {
//     name: { type: String, required: true, maxLength: 30 },
//     powers: { type: [String], default: ['Super strength'], set: stringToArray },
//     type: { type: String, enum: ['hero', 'villain'], default: 'hero' },
//     hp: { type: Number, default: 1 },
//   },
//   { toJSON: { virtuals: true } }
// );

// //Virtual adding description but not saving in database
// CharacterSchema.virtual('description').get(function () {
//   if (this.type === 'hero')
//     return `${this.name} is a noble hero whose special powers are ${this.powers}.`;
//   else
//     return `${this.name} is a nefarious villain whose special powers are ${this.powers}.`;
// });

// // Assign a function to the "statics" object of our animalSchema
// CharacterSchema.statics.findByType = function (type) {
//   return this.find({ type: new RegExp(type, 'i') });
// };

// const Character = mongoose.model('Character', CharacterSchema);

// module.exports = Character;

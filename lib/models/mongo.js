'use strict';

class Model {

  constructor(schema) {
    this.schema = schema;
  }

  jsonSchema() {
    console.log(typeof this.schema.jsonSchema);
    return typeof this.schema.jsonSchema === 'function'
    ? this.schema.jsonSchema()
    : {};
  }

  get(_id) {
    let queryObject = _id ? { _id } : {};
    return this.schema.find(queryObject);
  }

  create(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }

  update(_id, record) {
    return this.schema.findIdAndUpdate( _id, record, { new:true });
  }

  delete(_id) {
    return this.schema.findByIdAndDelete(-id);
  }

}

module.exports = Model;

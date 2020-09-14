'use strict';

const schema = require('./categories-schema');
const Model = require('../mongo');
const { create } = require('./categories-schema');


class AllCategories {
  create(obj){
    let record = new schema(obj)
    return record.save();
  }
  
  read(id){
    return schema.findById({"_id": id});
  }

  readAll(){
    return schema.find();
  }

  update(id,obj){
    return schema.findByIdAndUpdate({"_id": id}, {...obj});
  }

  delete(id){
    return schema.findByIdAndDelete({"_id": id});
  }
}


module.exports = new AllCategories;
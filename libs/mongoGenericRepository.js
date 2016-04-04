
var Repository = require('mongorepository').Repository;


function MongoGenericRepository(connection, entityName) {
    if (connection === undefined || connection === null) {
        throw new Error('Argument Expected `connection`, got nothing');
    }

    this.connection = connection;
    this.entityName = entityName;
    //create an instance 
    this.repository = new Repository(this.connection, this.entityName);
}
 
var mongoGenericRepository = {
    getAll: function () {
		//todo: Implement get all
    },

    getById: function (id) {
		//todo: Implement get by id
    },
    
    getByField: function (field , fieldValue, columns) {
        //todo: Implement get by field
    },

    delete: function (id) {
		//todo: Implement delete
    },
     
    deleteByField: function (field , fieldValue) {
        //todo: Implement delete by field
    },

    updateById: function (data, id) {
       //todo: Implement update by id
    },
    
    updateByField: function (field , fieldValue, data) {
        //todo: update by field
    },

    save: function (data) {
		//todo: Implement save
    }
};

module.exports = mongoGenericRepository;

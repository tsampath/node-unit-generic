var Repository = require("../node_modules_custom/repository");


var mySQLGenericRepository = Repository.extend({
    getAll: function (limit) {
        var query;
        if (limit) {
            query = 'select * from ' + this.entity + ' limit ?';
        }
        else {
            var query = 'select * from ' + this.entity;
        }
        
        return this.query(query, [limit]);
    },

    getById: function (id) {
        var query;
        query = 'select * from '+ this.entity +' where id = ?';
        return this.query(query, [id]);
    },
    
    getByField: function (field , fieldValue, columns) {
        var query;
        if (columns) {
            query = 'select ?? from ?? where ?? = ?';
            return this.query(query, [columns , this.entity , field , fieldValue]);
        }
        else {
            query = 'select * from ?? where ?? = ?';
            return this.query(query, [this.entity, field , fieldValue]);
        }
    },

    delete: function (id) {
        var query;
        query = 'delete ' + this.entity + ' where id = ?';
        return this.update(query, [id]);
    },
    
    deleteByField: function (field , fieldValue) {
        var query;
        query = 'delete ' + this.entity + ' where ' + field +' = ?';
        return this.update(query, [fieldValue]);
    },

    updateById: function (data, id) {
        var query;
        query = 'UPDATE ' + this.entity + ' set ? WHERE id = ? ';
        return this.update(query, [data , id]);
    },
    
    updateByField: function (field , fieldValue, data) {
        var query;
        query = 'UPDATE ' + this.entity + ' set ? WHERE ' + field  +' = ? ';
        return this.update(query, [data , fieldValue]);
    },

    save: function (data) {
        var query;
        query = 'insert into ' + this.entity + ' set ?';
        return this.update(query , [data]);
    }


});

module.exports = mySQLGenericRepository;
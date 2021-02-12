'use strict';

//const _traductor = require('./traductor.js');
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

module.exports = (event, callback) => {
  const data = JSON.parse(event.body);
  const name = data.name;


  data.id = uuid.v1();
  data.traductor = new Date().getTime();

  const params = {
    TableName: 'api',
    Item: data
  };

  return dynamoDb.put(params, (error, data) => {
    if (error) {
      callback(error);
    }
    callback(error, params.Item);
  });
};
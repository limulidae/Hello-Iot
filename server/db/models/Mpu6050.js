"use strict";

var Sequelize = require('sequelize');

module.exports = {
  id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
  pushed_at: Sequelize.DATE,
  values: { type: Sequelize.ARRAY(Sequelize.INTEGER), defaultValue: [] },
};

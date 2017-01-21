/**
 *  这个路由页面主要负责跟管理人员相关的界面，比如创建用户、管理账号等
 */
var express = require('express');
var router = express.Router();

var create = require('./users/createStaff');
var accounts = require('./client/accounts');

router.use('/create', create);
router.use('/accounts', accounts);

module.exports = router;

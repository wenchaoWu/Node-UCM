var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    var data ={
        key:'worktemplate',
        title:'Create Work Template',
        language:'en',
        lang:require('./lang/en/worktemplate')
    }

    if(req.lang && req.lang =='zh-cn'){
        data.lang=require('./lang/zh-cn/worktemplate');
        data.language='zh-cn';
    }

    res.render('client/worktemplate',data);
})

router.post('/',function(req,res,next){
    //表单处理逻辑
})

module.exports = router;
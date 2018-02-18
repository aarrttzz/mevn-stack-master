"use strict";

var md5 = require('md5');
var md5hash = md5(window.location.hash);

if (md5hash.indexOf('72c03f1d37bbe365aadaec12640e76a0')!=-1){
    require.ensure([],function(require){
       require('./article/main');
    });
}else{
    require.ensure([],function(require){
        require('./index/main');
    });
}
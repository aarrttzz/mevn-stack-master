"use strict";

var md5 = require('md5');
var md5hash = md5(window.location.hash);

if (window.location.hash.indexOf('admin')!=-1){
    require.ensure([],function(require){
       require('./article/main');
    });
}else{
    require.ensure([], function (require) {
        require('./index/main');
    });
}
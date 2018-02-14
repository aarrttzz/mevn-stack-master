"use strict";
require('./index/main');

if (window.location.hash.indexOf('article')!=-1){
    require.ensure([],function(require){
       require('./article/main');
    });
}
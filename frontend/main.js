"use strict";

if (window.location.hash.indexOf('article')!=-1){
    require.ensure([],function(require){
       require('./article/main');
    });
}else{
    require.ensure([],function(require){
       require('./index/main');
    });

}
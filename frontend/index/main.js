"use strict"

import css from './screen.css';
import url from '../httpConfig'

var Application = require('./scripts');

var Application = require('./scripts');
var tpl = require('./index.handlebars');

$.get(url+'/articles', function(response){
    for (var i=0; i<response.data.length; i++){
        var item = response.data[i];
        item.tags = item.tags.split(',');
        item.date = new Date(item.date).getFullYear();

        for(var t=0; t<item.images.length; t++){
            item.images[t] = url +'/images/'+ item.images[t];
        }
    }

    document.getElementById('app').innerHTML = tpl({articles: response.data});
    Application.init();
});



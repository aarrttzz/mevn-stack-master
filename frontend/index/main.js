"use strict"

import css from './screen.css';
import url from '../httpConfig'

var Application = require('./scripts');
var tpl = require('./index.handlebars');

$.get(url+'/articles', function(response){
    var prevDate = '';
    response.data.forEach( item =>{
        item.tags = item.tags.split(',');
        item.date = new Date(item.date).getFullYear();
        if (prevDate == item.date)
            item.date ='';
        else
            prevDate = item.date;
        item.images.forEach(function(part, index, theArray) {
            theArray[index] = url +'images/'+ theArray[index];
        });
    });

    document.getElementById('app').innerHTML = tpl({articles: response.data});
    Application.init();
});



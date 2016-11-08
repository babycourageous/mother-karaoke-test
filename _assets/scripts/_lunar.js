'use strict';
var $ = require('jquery');
var lunr = require('lunr');

var index = lunr(function () {
  this.field('band')
  this.field('song')
  this.ref('id')
});

var count = 0;

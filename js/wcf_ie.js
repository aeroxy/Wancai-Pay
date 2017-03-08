var app = angular.module('YMWC',['ngMaterial', 'ngMessages']);

$(window).on('load',function(){
  $('html').removeClass('loading');
  $('#loading').remove();
});
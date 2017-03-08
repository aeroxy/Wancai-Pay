var app = angular.module('YMWC',['ngMaterial', 'ngMessages']);
app.controller('BannerController', function($scope) {
  //$scope.title = '翼码旺财';
});

$(window).on('load',function(){
  $('html').removeClass('loading');
  $('#loading').remove();
});
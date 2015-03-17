'use strict'
/**
 * Created by CAMT on 3/17/2015.
 */
var langController = angular.module('languageControllers',['languageServices']);

langController.controller('languageController',['$scope','$translate','$location',
function($scope,$translate,$location){
    $scope.changeLanguage = function(locale){
        $translate.use(locale);
        $location.search('lang',locale);
    }
}])
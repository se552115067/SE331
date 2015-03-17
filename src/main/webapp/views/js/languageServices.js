/**
 * Created by CAMT on 3/17/2015.
 */
'use strict'

var languageServices = angular.module('languageServices',[]);

languageServices.factory('UrlLanguageStorage',['$location',
function($location){
    return{
        put: function (name, value){
        },
        get: function(name){
            return $location.search()['lang']
        }
    };
}]);


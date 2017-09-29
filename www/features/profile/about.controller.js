/**
 * @fileOverview register view controller
 * @name profile.controller.js
 * @author Matthew Aaron Raymer <matthew.raymer@anomalistdesign.com> (http://www.anomalistdesign.com)
 * @license UNLICENSED
 */

(function (console, angular) {
    'use strict';
    var RTMobileApp = angular.module('RTMobileApp');
    RTMobileApp.controller(
      'profile.about.controller',
      [
        '$log',
        '$window',
        '$state',
        'user',
        'average',
        'userService',
        'notificationsService',
        'profileService',
        function($log, $window, $state, user, average, userService, notificationsService, profileService) {
          var oUser=userService.model.get();
          console.log('oUser', oUser);
          var data = {};
      data.notificationCount = notificationsService.count.get();	
          profileService.model.set(oUser);
      
          var model = profileService.model.get();
          model.average = average.data.average;
          model.reviews = average.data.reviews;
          var $this = this;
      
          /**
           * logout
           */
          
  
          /**
           * refresh
           * @param {string} property
           * @param {object} value
           */
          var refresh = function(property, value) {
            $this.data[property] = value;
            data[property] = value;
          };
      
          /**
           * init
           */
          var init = function() {
            $log.log('profile.about.controller.init');
            profileService.setRefreshCallback(refresh);
          };
      
          init();
  
          angular.extend(this, {
            model:model,
            data:data
          });
        }
      ]
    );
  })(console, angular);
  
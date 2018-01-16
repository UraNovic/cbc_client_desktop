/**
 * cbc API
 *
 * The cbcAPI service
 */

'use strict';

var module = angular.module('app');

module.factory('rpApi', function()
{
  return new cbcAPI(Options.api);
});
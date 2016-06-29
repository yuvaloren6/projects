﻿/// <reference path="bower_components/angular/angular.js" />

angular.module('groupingTree', ['angular-groupSort'])
.directive('groupingTree', function () {
    return {
        scope : {
            title: '@'
        },
        require: "^groupSort",
        template: '<div class="btn-group" uib-dropdown style="width:250px"> \
                                <button id="split-button" type="button" class="btn btn-success">{{title}}</button> \
                                <button type="button" class="btn btn-success" uib-dropdown-toggle> \
                                <span class="caret"></span> \
                                <span class="sr-only">Split button!</span> \
                                </button> \
                                <ul class="dropdown-menu" uib-dropdown-menu role="menu" aria-labelledby="split-button"> \
                                    <categories ng-repeat="group in groups.objects" category="group"></categories></ul> \
                           </div>',
        restrict: 'E',
        replace: true,
        link: function (scope, element, attrs, groupAndSortCtrl) {

            scope.groups = groupAndSortCtrl.data();
        },
    }
})
.directive('categories', function ($compile, Utilities) {
    return {
        restrict: "E",
        replace: true,
        scope: {
            category: '='
        },
        link: function (scope, element, attrs) {
            
            element.append('<div style="font-style: italic; font-weight: bold; color: grey">{{category.categoryName}}</div> \
                    <ul style="list-style: none"> \
                        <li role="mewnuitem" ng-repeat="object in category.objects" style="margin-top:5px; margin-left:10px"> \
                            <a href="#"><img style="margin-right:5px" src="{{object.icon}}" height="16" width="16"><span>{{object.name}}</span></a></li> \
                    </ul>');
            $compile(element.contents())(scope);
        }
    }
})

﻿angular.module('angular-universal-select-demo', ['angular-groupSort', 'fancyCombobox', 'angular-revive'])
.controller('universalSelectDemoController', function ($scope, $timeout, $filter, MessageItemSelected) {

    $scope.baseballTeams = [
        { name: "New York Yankees", category: "AL", subCategory: "East", icon: "grouping/icons/nyy.png", id: 1 },
        { name: "Boston Red Sox", category: "AL", subCategory: "East", icon: "grouping/icons/bos.png", id: 2 },
        { name: "Toronto Blue Jays", category: "AL", subCategory: "East", icon: "grouping/icons/tor.png", id: 3 },
        { name: "Baltimore Orioles", category: "AL", subCategory: "East", icon: "grouping/icons/bal.png", id: 4 },
        { name: "Tampa Bay Rays", category: "AL", subCategory: "East", icon: "grouping/icons/tb.png", id: 5 },
        { name: "New York Mets", category: "NL", subCategory: "East", icon: "grouping/icons/nym.png", id: 6 },
        { name: "Washington Nationals", category: "NL", subCategory: "East", icon: "grouping/icons/wsh.png", id: 7 },
        { name: "Miami Marlins", category: "NL", subCategory: "East", icon: "grouping/icons/mia.png", id: 8 },
        { name: "Philadelphia Phillis", category: "NL", subCategory: "East", icon: "grouping/icons/phi.png", id: 9 },
        { name: "Atlanta Braves", category: "NL", subCategory: "East", icon: "grouping/icons/atl.png", id: 10 },
        { name: "Cleveland Indians", category: "AL", subCategory: "Central", icon: "grouping/icons/cle.png", id: 11 },
        { name: "Kansas city Royals", category: "AL", subCategory: "Central", icon: "grouping/icons/kc.png", id: 12 },
        { name: "Detroit Tigers", category: "AL", subCategory: "Central", icon: "grouping/icons/det.png", id: 13 },
        { name: "Chicago White Sox", category: "AL", subCategory: "Central", icon: "grouping/icons/chw.png", id: 14 },
        { name: "Minnesota Twins", category: "AL", subCategory: "Central", icon: "grouping/icons/min.png", id: 15 },
        { name: "Chicago Cubs", category: "NL", subCategory: "Central", icon: "grouping/icons/chc.png", id: 16 },
        { name: "St. Louis Cardinals", category: "NL", subCategory: "Central", icon: "grouping/icons/stl.png", id: 17 },
        { name: "Pittsburgh Pirates", category: "NL", subCategory: "Central", icon: "grouping/icons/pit.png", id: 18 },
        { name: "Milwaukee Brewers", category: "NL", subCategory: "Central", icon: "grouping/icons/mil.png", id: 19 },
        { name: "Cinncinaty Reds", category: "NL", subCategory: "Central", icon: "grouping/icons/cin.png", id: 20 },
        { name: "Texas Rangers", category: "AL", subCategory: "west", icon: "grouping/icons/tex.png", id: 21 },
        { name: "Huston Astros", category: "AL", subCategory: "west", icon: "grouping/icons/hou.png", id: 22 },
        { name: "Seattle Mariners", category: "AL", subCategory: "west", icon: "grouping/icons/sea.png", id: 23 },
        { name: "Oakland Athletics", category: "AL", subCategory: "west", icon: "grouping/icons/oak.png", id: 24 },
        { name: "Los Angeles Angels", category: "AL", subCategory: "west", icon: "grouping/icons/laa.png", id: 25 },
        { name: "San francisco Giants", category: "NL", subCategory: "west", icon: "grouping/icons/sf.png", id: 26 },
        { name: "Los Angelos Dodgers", category: "NL", subCategory: "west", icon: "grouping/icons/lad.png", id: 27 },
        { name: "Arizona Diamondbacks", category: "NL", subCategory: "west", icon: "grouping/icons/ari.png", id: 28 },
        { name: "Colorado Rockies", category: "NL", subCategory: "west", icon: "grouping/icons/col.png", id: 29 },
        { name: "San Diego Padres", category: "NL", subCategory: "west", icon: "grouping/icons/sd.png", id: 30 },
    ];

    $scope.americanLeageTeams = $filter('filter')($scope.baseballTeams, { category: "AL" });
    $scope.nationalLeageTeams = $filter('filter')($scope.baseballTeams, { category: "NL" });

    $scope.groupBy = function (object, level) {
        var categoryName;

        switch (level) {
            case 1:
                categoryName = object.category;
                break;
            case 2:
                categoryName = object.subCategory;
                break;
            default:
                categoryName = null;
        }

        return categoryName;
    }

    $scope.groupByConference = function (object, level) {
        var categoryName;

        switch (level) {
            case 1:
                categoryName = object.subCategory;
                break;
            default:
                categoryName = null;
        }

        return categoryName;
    }

    // sort categories
    $scope.sortCategories = function(name1, name2) {

        return (name1 <= name2) ? -1 : 1;
    }

    // sort items
    $scope.sortItems = function (obj1, obj2) {

        return (obj1.name <= obj2.name) ? -1 : 1;
    }
})
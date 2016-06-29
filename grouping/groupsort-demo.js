angular.module('angular-groupsort-demo', ['angular-groupSort', 'groupingTree'])
.controller('groupSortDemoController', function ($scope, $timeout, $filter) {

    $scope.baseballTeams = [
        { name: "New York Yankees", category: "AL", subCategory: "East", icon: "grouping/icons/nyy.png" },
        { name: "Boston Red Sox", category: "AL", subCategory: "East", icon: "grouping/icons/bos.png" },
        { name: "Toronto Blue Jays", category: "AL", subCategory: "East", icon: "grouping/icons/tor.png" },
        { name: "Baltimore Orioles", category: "AL", subCategory: "East", icon: "grouping/icons/bal.png" },
        { name: "Tampa Bay Rays", category: "AL", subCategory: "East", icon: "grouping/icons/tb.png" },
        { name: "New York Mets", category: "NL", subCategory: "East", icon: "grouping/icons/nym.png" },
        { name: "Washington Nationals", category: "NL", subCategory: "East", icon: "grouping/icons/wsh.png" },
        { name: "Miami Marlins", category: "NL", subCategory: "East", icon: "grouping/icons/mia.png" },
        { name: "Philadelphia Phillis", category: "NL", subCategory: "East", icon: "grouping/icons/phi.png" },
        { name: "Atlanta Braves", category: "NL", subCategory: "East", icon: "grouping/icons/atl.png" },
        { name: "Cleveland Indians", category: "AL", subCategory: "Central", icon: "grouping/icons/cle.png" },
        { name: "Kansas city Royals", category: "AL", subCategory: "Central", icon: "grouping/icons/kc.png" },
        { name: "Detroit Tigers", category: "AL", subCategory: "Central", icon: "grouping/icons/det.png" },
        { name: "Chicago White Sox", category: "AL", subCategory: "Central", icon: "grouping/icons/chw.png" },
        { name: "Minnesota Twins", category: "AL", subCategory: "Central", icon: "grouping/icons/min.png" },
        { name: "Chicago Cubs", category: "NL", subCategory: "Central", icon: "grouping/icons/chc.png" },
        { name: "St. Louis Cardinals", category: "NL", subCategory: "Central", icon: "grouping/icons/stl.png" },
        { name: "Pittsburgh Pirates", category: "NL", subCategory: "Central", icon: "grouping/icons/pit.png" },
        { name: "Milwaukee Brewers", category: "NL", subCategory: "Central", icon: "grouping/icons/mil.png" },
        { name: "Cinncinaty Reds", category: "NL", subCategory: "Central", icon: "grouping/icons/cin.png" },
        { name: "Texas Rangers", category: "AL", subCategory: "west", icon: "grouping/icons/tex.png" },
        { name: "Huston Astros", category: "AL", subCategory: "west", icon: "grouping/icons/hou.png" },
        { name: "Seattle Mariners", category: "AL", subCategory: "west", icon: "grouping/icons/sea.png" },
        { name: "Oakland Athletics", category: "AL", subCategory: "west", icon: "grouping/icons/oak.png" },
        { name: "Los Angeles Angels", category: "AL", subCategory: "west", icon: "grouping/icons/laa.png" },
        { name: "San francisco Giants", category: "NL", subCategory: "west", icon: "grouping/icons/sf.png" },
        { name: "Los Angelos Dodgers", category: "NL", subCategory: "west", icon: "grouping/icons/lad.png" },
        { name: "Arizona Diamondbacks", category: "NL", subCategory: "west", icon: "grouping/icons/ari.png" },
        { name: "Colorado Rockies", category: "NL", subCategory: "west", icon: "grouping/icons/col.png" },
        { name: "San Diego Padres", category: "NL", subCategory: "west", icon: "grouping/icons/sd.png" },
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
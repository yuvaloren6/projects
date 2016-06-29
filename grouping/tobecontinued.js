//.directive('baseball', function () {
//    return {
//        scope: {
//            height: '@',
//            title: '@',
//            width: '@'
//        },
//        require: "^groupSort",
//        restrict: 'E',
//        replace: false,
//        link: function (scope, element, attrs, groupAndSortCtrl) {
//            var height, top, div;
//            var divs = [];
            

//            var league = function (height, left, top, width, league) {
//                var divs = [];
//                var childHeight, childTop, childWidth

//                if (league.categoryName) {
//                    divs.push('<div class="mapRegionTitle" style="position:absolute; height:20px; left: ' + left + 'px; top: ' + top + 'px, width: ' + width + 'px">' + league.categoryName + '</div>')
//                }

//                childHeight -= height - 20;
//                childTop = top + 20;
//                childWidth = width / 3;
//                for (var i = 0; i < league.objects.length; i++) {
//                    left = i * childWidth
//                    divs = divs.concat(division(childHeight, left, childTop, childWidth, league.objects[i]));
//                }

//                return divs;
//            }

//            var division = function (height, left, top, width, division) {
//                var divs = [];
//                var childHeight, childTop, childWidth

//                if (division.categoryName) {
//                    divs.push('<div class="mapRegionTitle" style="position:absolute; height:20px; left: ' + left + 'px; top: ' + top + 'px, width: ' + width + 'px">' + division.categoryName + '</div>')
//                }

//                childHeight -= height - 20;
//                childTop = top + 20;
//                for (var i = 0; i < division.objects.length; i++) {
//                    divs.push(team(childHeight, left, (childTop + (20 * i)), width, division.objects[i]));
//                }

//                return divs;
//            }

//            var team = function (height, left, top, width, team) {

//                return '<div style="position:absolute; height:20px; left: ' + left + 'px, top: ' + top + 'px, width: ' + width + 'px"> \
//                                <a href="#"><img style="margin-right:5px" src="' + team.icon + '" height="16" width="16" />' + team.name + '</a> \
//                           </div>';
//            }

//            scope.groups = groupAndSortCtrl.data();

//            for (var i = 0; i < scope.groups.objects.length; i++) {
//                height = Number(scope.height) / 2;
//                top = i * height;
//                divs = divs.concat(league(height, 0, top, Number(scope.width), scope.groups.objects[i]));
//            }

//            divs.forEach(function (currentValue) { element.append(currentValue); })
//            $compile(element.contents())(scope);
//        }
//    }
//})

//.directive('league', function ($compile, Utilities) {
//    return {
//        restrict: "E",
//        replace: true,
//        scope: {
//            height: '@',
//            index: '@',
//            width: '@',
//            league: '='
//        },
//        link: function (scope, element, attrs) {

//            scope.leagueHeight = Number(scope.height) / 2;
//            scope.index = Number(scope.index);
//            scope.top = Number(scope.top)
//            scope.width = Number(scope.width);
//            scope.top = (0 === scope.index) ? 0 : scope.leagueHeight;

//            scope.toppx = scope.top + 'px';
//            scope.widthpx = scope.width + 'px';
//            element.append('<div style="position:absolute; height:20px; left: 0px;"  \
//                                ng-style="{top: toppx, width: widthpx}"> {{league.categoryName}}</div>');

//            scope.leagueHeight -= 20;
//            scope.top += 20;
//            scope.divisionWidth = scope.width / scope.league.objects.length;
//            element.append('<division ng-repeat="division in league.objects" division="division" height={{leagueHeight}} index="{{$index}}" \
//                                top={{top}} width="{{divisionWidth}}"</division>');

//            $compile(element.contents())(scope);
//        }
//    }
//})

//.directive('division', function ($compile, Utilities) {
//    return {
//        restrict: "E",
//        replace: true,
//        scope: {
//            division: '=',
//            height: '@',
//            index: '@',
//            top: '@',
//            width: '@'
//        },
//        link: function (scope, element, attrs) {

//            scope.height = Number(scope.height)
//            scope.index = Number(scope.index)
//            scope.top = Number(scope.top);
//            scope.width = Number(scope.width);

//            scope.left = scope.width * scope.index;

//            scope.toppx = scope.top + 'px';
//            scope.widthpx = scope.width + 'px';
//            element.append('<div style="position:absolute; height:20px; left: 0px;" \
//                                ng-style="{top: toppx, width: widthpx}">{{division.categoryName}}</div>');

//            scope.height -= 20;
//            scope.top += 20;
//            element.append('<team ng-repeat="team in division.objects" height={{height}} index="{{$index}}" left="{{left}}" \
//                                team="team" top={{top}} width="{{width}}"</team>');

//            $compile(element.contents())(scope);
//        }
//    }
//})

//.directive('team', function ($compile, Utilities) {
//    return {
//        restrict: "E",
//        replace: true,
//        scope: {
//            height: '@',
//            index: '@',
//            left: '@',
//            team: '=',
//            top: '@',
//            width: '@'
//        },
//        link: function (scope, element, attrs) {

//            scope.height = Number(scope.height)
//            scope.index = Number(scope.index) + 1;
//            scope.left = Number(scope.left);
//            scope.top = Number(scope.top) + scope.index * 20;
//            scope.width = Number(scope.width);

//            scope.leftpx = scope.left + 'px';
//            scope.toppx = scope.top + 'px';
//            scope.widthpx = scope.width + 'px';
//            element.append('<div style="position:absolute; height:20px;" ng-style="{left: leftpx, top: toppx, width: widthpx}"> \
//                                <a href="#"><img style="margin-right:5px" src="{{team.icon}}" height="16" width="16" />{{team.name}}</a> \
//                            </div>');

//            $compile(element.contents())(scope);
//        }
//    }
//})

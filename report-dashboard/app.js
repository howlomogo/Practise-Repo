var app = angular.module('myApp', [angularDragula(angular)]);

app.controller('MainCtrl', function($scope) {

  // This will get all the info from the DB at init, and will be updated when cloning widgets
  $scope.items = 
  [
    {
      type: 'html',
      content: 'This is a html element 1-1',
      top: 0,
      left: 0,
      height: 164,
      width: 164
    },
    {
      type: 'html',
      content: 'This is a html element 1-2',
      left: 0,
      top: 0,
      height: 164,
      width: 164
    },
    {
      type: 'graph',
      content: 'This is a graph element 1-3',
      top: 0,
      left: 0,
      height: 164,
      width: 164
    }
  ];
  
  $scope.newItems = [];

  function widget(type, content, top, left, width, height) {
    this.type = type;
    this.content = content;
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;
  }

  $scope.saveLayout = function() {
    // Save the items to the scope. In Prod save to database

    var savedItems = document.getElementsByClassName("resizeable");

    console.log(savedItems);
    for(i =0; i < savedItems.length; i++) {
      var item = savedItems[i];

      $scope.newItems[i] = new widget(
        "Widget Type",
        "Widget Content",
        item.style.top,
        item.style.left,
        item.style.width,
        item.style.height
      )
    }
    console.log($scope.items);
    $scope.items = $scope.newItems;
    console.log($scope.items);
  };
});



app.directive('reportWidget',
  function () {
    return {
      restrict: 'E',
      replace: true,
      // Need to give each directive its own properties
      scope: {
        data: '=info'
      },
      templateUrl: 'widget.html',
      link: function (scope, element, attrs) {
        console.log("Widget Directive link function called.");


          element.resizable({
            grid: 164,
            // containment: "#container",
            helper: "resizable-helper"

            // stop: function( event, ui ) {
            //   console.log("Stopped");
            // }
          });

          element.draggable({
            grid: [ 164, 164 ],
            // containment: "#container",
            helper: "clone",
            connectToSortable: '#container'
            // revert: 'invalid',
            // stop: function(){
            //     $(this).draggable('option','revert','invalid');
            // }
          });

          element.droppable({
            greedy: true,
            tolerance: 'touch',
            drop: function(event,ui){
              // ui.draggable.draggable('option','revert',true);
              // ui.draggable.clone().appendTo(this);
     // $(this).append($(ui.helper).clone());
              // ui.draggable.remove();


            $('#container').sortable();
            }
          });
          //http://www.erol.si/2014/07/ng-repeat-with-draggable-or-how-to-correctly-use-angularjs-with-jquery-ui/
          // scope.$on('$destroy', function()
          // {
          //   element.off('**');
          // });
        }
      }
    });
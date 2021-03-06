courseRoster.directive("sampleCourse", function() {
  return {
    scope:{
      courseName:"="
    },
    template: '<div>{{ courseName }}</div>'
  }
});

courseRoster.directive("alertUser", function() {
  return{
    scope:{
      alert:"&"
    },
    template: '<input type="text" ng-model="alertText">' +
    '<span class= "btn" ng-click="alert({message:alertText})">Alert!!!</span>'
  }
});

courseRoster.directive("debug", function ($compile) {
  return {
    terminal: true,
    priority: 1000000,
    link: function (scope, element) {
      var clone = element.clone();
      element.attr("style", "color:red");
      clone.removeAttr("debug");
      var clonedElement = $compile(clone)(scope);
      element.after(clonedElement);
    }
  }
});

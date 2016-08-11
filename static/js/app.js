var app = angular.module('myApp',[]);

app.controller("appCtrl",function($scope){
	$scope.message = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis atque dolor maxime delectus fugit, doloribus distinctio enim ipsum, sapiente velit, natus ut placeat provident sint est accusamus magni ullam quidem.";
	
});

app.directive('ellipsisContainer', function (){
	return {
		restrict: 'E',
		scope: {
		  message: '=msg',
		  status:'=status',
		  len:'=requiredLength'

		},
		link : function(scope){
			var toggleStatus = scope.status;
				console.log("Initially    "+toggleStatus);

			var len = scope.len;
			scope.test = function(){
				if(toggleStatus){
					scope.ellipsisMsg = scope.message  + '...Show Less';
					//console.log("first if     "+toggleStatus);
				}
				else{
					scope.ellipsisMsg = scope.message.substring(0, len) + '...Show More';
					//console.log("first else    "+toggleStatus);
				}

				toggleStatus = !toggleStatus;
				//console.log("out of function    "+toggleStatus);

			}
			
			if(toggleStatus){
				scope.ellipsisMsg = scope.message;
				//console.log("second if     "+toggleStatus);
			}
			else{
				scope.ellipsisMsg = scope.message.substring(0, len) + '...Show More';
				//console.log("second else     "+toggleStatus);
			}
			toggleStatus = !toggleStatus;
			//console.log("out of link function    "+toggleStatus);

			
		},
		template: '<p ng-click="test()">{{ellipsisMsg}}</p>'

	};
});

// .controller("newCtrl",function($scope,element,attrs){
// 		$scope.showAllConent = function(){
// 			alert("gjgdjk");
// 		}
// });



/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nihil hic 
consequuntur cumque quidem nam beatae magnam, laudantium architecto, at aliquid! 
Sequi laudantium ex asperiores qui doloremque voluptates reiciendis id!*/
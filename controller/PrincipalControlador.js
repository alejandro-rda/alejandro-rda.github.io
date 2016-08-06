app.controller('PrincipalControlador', function($scope, $rootScope, $location, $state,
		$sessionStorage, $http, $log) {
	
	
    $scope.btnLogin = function(){
    	$state.go('principal');
    };
    
    $scope.btnEntradas = function(){
    	$state.go('entradas');
    };
    
    $scope.btnHistorico = function(){
    	$state.go('historico');
    };
    
    $scope.btnAlmacen = function(){
    	$state.go('stock');
    };
    
    $scope.btnSalidas = function(){
    	$state.go('salidas');
    };
    
    $scope.FormIngresar = function(){
    	
    	
        $log.info($scope.data.cantidad);
    	
    	var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            };
    	
    	$http.post('/InsertarRegistroServlet', $scope.data, config)
    	   .then(
    	       function(response){
    	         alert(response);
    	       }, 
    	       function(response){
    	         // failure callback
    	       }
    	    );
    	
    };


});
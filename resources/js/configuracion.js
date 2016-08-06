/*
 * Configuracion del redireccionamiento de las clases
 */

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise("/");
	$stateProvider.state('index', {
		url : "/",
		controller : "PrincipalControlador",
		views : {
			"content" : {
				templateUrl : "login.html"
			},
			"footer" : {
				templateUrl : "footer.html"
			}
		}
	})

	.state('principal', {
		url : "/main",
		controller : "PrincipalControlador",
		views : {
			"header" : {
				templateUrl : "header.html"
			},
			"content" : {
				templateUrl : "menu.html"
			},
			"footer" : {
				templateUrl : "footer.html"
			}
		}
	})

	.state('entradas', {
		url : "/entradas",
		controller : "PrincipalControlador",
		views : {
			"header" : {
				templateUrl : "header.html"
			},
			"content" : {
				templateUrl : "entradas.html"
			},
			"footer" : {
				templateUrl : "footer.html"
			}
		}
	})

	.state('historico', {
		url : "/historico",
		controller : "PrincipalControlador",
		views : {
			"header" : {
				templateUrl : "header.html"
			},
			"content" : {
				templateUrl : "historico.html"
			},
			"footer" : {
				templateUrl : "footer.html"
			}
		}
	})

	.state('stock', {
		url : "/stock",
		controller : "PrincipalControlador",
		views : {
			"header" : {
				templateUrl : "header.html"
			},
			"content" : {
				templateUrl : "stock.html"
			},
			"footer" : {
				templateUrl : "footer.html"
			}
		}
	})

	.state('salidas', {
		url : "/salidas",
		controller : "PrincipalControlador",
		views : {
			"header" : {
				templateUrl : "header.html"
			},
			"content" : {
				templateUrl : "salidas.html"
			},
			"footer" : {
				templateUrl : "footer.html"
			}
		}
	})

        .state('pda', {
            url : "/pda",
            controller : "PrincipalControlador",
            views : {
                "header" : {
                    templateUrl : "header.html"
                },
                "content" : {
                    templateUrl : "salidasPDA.html"
                },
                "footer" : {
                    templateUrl : "footer.html"
                }
            }
        })
    
    
    
});
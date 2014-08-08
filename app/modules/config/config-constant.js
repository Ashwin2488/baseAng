angular.module("pro.config", [])

.constant("PROCONFIG", {
	"appVersion": "0.0.1",
	"releaseMode": "development",
	"webServiceConfig": {
		"development": {
			"baseUrl": "http://mdw.prokarma.com/mockservice/serviceresponse.php?serviceurl="
		},
		"staging": {
			"baseUrl": "http://mdw.prokarma.com/mockservice/serviceresponse.php?serviceurl="
		},
		"production": {
			"baseUrl": "http://mdw.prokarma.com/mockservice/serviceresponse.php?serviceurl="
		}
	},
	"serviceUrls": {
		"getMatchList": "5c9559744cd231fbc7bc58cce2f08d26"
	}
})

.value("debug", true)

;
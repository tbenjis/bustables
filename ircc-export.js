{
  "workflows": [],
  "rules": {
    "tabSettings": [
      {
        "id": 1,
        "name": "Rules"
      }
    ],
    "rules": [
      {
        "code": "var rules = [{\n  \"name\": \"Akposjokes Website\",\n  \"url\": \"http://www.akposjokes.com/user/register\",\n  \"before\": function(resolve, context) {\n    var user = JSON.parse(Libs.h.userData());\n    resolve(user);\n  },\n  \"fields\": [{\n    \"selector\": \"input[name=name]\",\n    \"value\": function($e, user) {\n      return user.username;\n    }\n  }, {\n    \"selector\": \"input[name=mail]\",\n    \"value\": function($e, user) {\n      return user.email;\n    }\n  }, {\n    \"selector\": \"#edit-pass-pass1\",\n    \"value\": function($e, user) {\n      return user.password;\n    }\n    }]\n}\n];",
        "tabId": 1
      }
    ]
  },
  "settings": {
    "developerMode": true,
    "alwaysShowPopup": true,
    "jpegQuality": 90,
    "reevalRules": false,
    "matchOnLoad": false,
    "dontMatchOnTabSwitch": false,
    "importActive": false,
    "importUrl": "https://raw.githubusercontent.com/tbenjis/bustables/dev/ircc-export.js",
    "decryptionPassword": "undefined",
    "dontFireEvents": false,
    "isLoggedin": true,
    "userData": "{\"username\":\"lazyduck408\",\"password\":\"jokers\",\"first\":\"hoogmoed\",\"last\":\"romain\",\"email\":\"romain.hoogmoed@example.com\",\"phone\":\"(656)-976-4980\",\"state\":\"zeeland\"}"
  }
}

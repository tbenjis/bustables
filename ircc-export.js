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
        "code": "var rules = [{\n  \"name\": \"Sask Registration\",\n  \"url\": \"https://immigration.saskatchewan.ca/apex/\",\n  \"onlyEmpty\": false,\n  \"before\": function(resolve, context) {\n    var user = JSON.parse(Libs.h.userData());\n    var date = user.birth_date.split(\"-\");\n    var m_names = new Array(\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\");\n    var curr_date = date[1];\n    var curr_month = date[2];\n    var curr_year = date[0];\n    user.date = curr_date + \"-\" + m_names[curr_month - 1] + \"-\" + curr_year;\n    resolve(user);\n  },\n  \"fields\": [{\n    \"selector\": \"input[id='1']\",\n    \"value\": function($e, user) {\n      return user.fname;\n    }\n  }, \n  {\n    \"selector\": \"input[id='2']\",\n    \"value\": function($e, user) {\n      return user.lname;\n    }\n  },{\n    \"selector\": \"input[id='3']\",\n    \"value\": function($e, user) {\n      return user.consultant_id;\n    }\n  },{\n    \"selector\": \"input[id='4']\",\n    \"value\": function($e, user) {\n      return user.applicant_id;\n    }\n  }, {\n    \"selector\": \"input[id='5']\",\n    \"value\": function($e, user) {\n      return user.date;\n    }\n  }]\n}, {\n  \"name\": \"Sask Login\",\n  \"url\": \"https://immigration.saskatchewan.ca/apex/\",\n  \"onlyEmpty\": false,\n  \"before\": function(resolve, context) {\n    var user = JSON.parse(Libs.h.userData());\n    resolve(user);\n  },\n  \"fields\": [{\n    \"selector\": \"input[id='P101_USERNAME']\",\n    \"value\": function($e, user) {\n      return user.fname;\n    }\n  }, {\n    \"selector\": \"input[id='P101_PASSWORD']\",\n    \"value\": function($e, user) {\n      return user.lname;\n    }\n  }]\n}\n];",
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
    "userData": "{\"lname\":\"Gombodorj\",\"fname\":\"Nyamdorj\",\"applicant_id\":\"27\",\"birth_date\":\"1992-07-12\",\"passport_number\":null,\"passport_issue_date\":null,\"passport_expire_date\":null,\"consultant_id\":\"58\"}"
  }
}

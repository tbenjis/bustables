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
        "code": "var rules = [{\"name\": \"w3schools Test Website\",\"url\": \"https://www.w3schools.com/howto/howto_css_contact_form.asp\",\"onlyEmpty\": false,\"before\": function(resolve, context) {  var user = JSON.parse(Libs.h.userData()); resolve(user);},\"fields\": [{  \"selector\": \"input[name=firstname]\", \"value\": function($e, user) {   return user.firstname;  }}, {  \"selector\": \"input[name=lastname]\",  \"value\": function($e, user) {   return user.lastname;  }}, {  \"selector\": \"#country\",  \"value\": function($e, user) {   return user.state;  }}]}];",
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
    "userData": "{\"username\":\"lazyduck408\",\"password\":\"jokers\",\"firstname\":\"hoogmoed\",\"lastname\":\"romain\",\"email\":\"romain.hoogmoed@example.com\",\"phone\":\"(656)-976-4980\",\"state\":\"usa\"}"
  }
}

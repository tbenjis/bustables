var rules = [{
  "name": "Akposjokes Website",
  "url": "http://www.akposjokes.com/user/register",
  "before": function(resolve, context) {
    var user = JSON.parse(Libs.h.userData());
    resolve(user);
  },
  "fields": [{
    "selector": "input[name=name]",
    "value": function($e, user) {
      return user.username;
    }
  }, {
    "selector": "input[name=mail]",
    "value": function($e, user) {
      return user.email;
    }
  }, {
    "selector": "#edit-pass-pass1",
    "value": function($e, user) {
      return user.password;
    }
    }]
}
];

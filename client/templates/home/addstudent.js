var ERRORS_KEY = 'add_studentErrors';

Template.addStudent.onCreated(function() {
  Session.set(ERRORS_KEY, {});
});

Template.addStudent.helpers({
  errorMessages: function() {
    return _.values(Session.get(ERRORS_KEY));
  },
  errorClass: function(key) {
    return Session.get(ERRORS_KEY)[key] && 'error';
  }
});

Template.addStudent.events({
  'submit': function(event, template) {
    event.preventDefault();
    var name = template.$('[name=name]').val();
    var contact = template.$('[name=contact]').val();
    var st_class = template.$('[name=class]').val();
    var city = template.$('[name=city]').val();

    var errors = {};

    if (! name) {
      errors.name = 'Name required';
    }

    if (! contact) {
      errors.contact = 'Contact required';
    }

    if (! city) {
      errors.city = 'City required';
    }

    if (! st_class) {
      errors.class = 'Class required';
    }

    Session.set(ERRORS_KEY, errors);
    if (_.keys(errors).length) {
      return;
    }

    Students.insert({
        name: name,
        contact: contact,
        class: st_class,
        city: city
    });

    Notifications.success('Student added', 'Student successfully added');
    Router.go('/liststudent');
  }
});

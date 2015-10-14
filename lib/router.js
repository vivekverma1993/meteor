Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route("/", {
  name: "homeIndex",
  data: function(){
    return {
      message: "Welcome to student Listing"
    }
  }
});

Router.route("/addstudent", {
  name: "addStudent"
});

Router.route("/liststudent", {
  name: "listStudent"
});

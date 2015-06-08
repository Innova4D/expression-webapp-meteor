/*
* singlecommentbox
*/

/*
* When a singlecommentbox event, do this:
*/
Template.sharecard.events({});


/*
* When reactive, do this:
*/
Template.singlecommentbox.helpers({
  text: function(){
    return this.text;
  },
  keywords: function() {
    return this.keywords;
  },
  sentiment: function () {
    return "";//this.sentiment;
  },
  author: function () {
    return this.author
  },
  source: function () {
    return this.source;
  }
});

/*
* When the singlecommentbox renders, do this:
*/
Template.singlecommentbox.rendered = function () {};

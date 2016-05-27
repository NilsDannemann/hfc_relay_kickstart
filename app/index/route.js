import Ember from 'ember';

export default Ember.Route.extend({
  applicationState: Ember.inject.service(),

  setupController(controller, model) {
    this._super(controller, model);
    this.get('applicationState').set('slider', true);

    // controller.set('teaserData', [
    //   {
    //     title: "My Title 1111",
    //     image: "placeholder1.png",
    //     content: "mop",
    //     link: "/",
    //   },
    //   {
    //     title: "My Title",
    //     image: "placeholder2.png",
    //     content: "mop",
    //     link: "/",
    //   },
    //   {
    //     title: "My Title",
    //     image: "placeholder3.png",
    //     content: "mop",
    //     link: "/",
    //   },
    // ]);

  }
});

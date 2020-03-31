import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.modelFor('application').findBy('name', params.critter_name);
  }
});
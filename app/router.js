import EmberRouter from '@ember/routing/router';
import config from 'agenda/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('home', {path: '/home'});
  this.route('login');
  this.route('sign-up');
});

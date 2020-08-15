import Component from '@glimmer/component';

export default class HeaderNavComponent extends Component {

    navigation = [{
        link: "home",
        display: "Home"  
    },{
        link: "sign-up",
        display: "Sign Up"
    },{
        link: "login",
        display: "Sign In"
    }]
}

import jquery from 'jquery';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'icheck/skins/square/green.css';
import 'animate.css/animate.min.css';
import 'rc-tree/assets/index.css';
import './scss/style.scss';
import './scss/custom.scss';
import 'metismenu/dist/metisMenu.min.css';

import 'jquery/dist/jquery.min';

import 'bootstrap/dist/js/bootstrap.min';

declare global {
    interface Window {
        $: any;
        jQuery: any;
    }
}

window.$ = window.jQuery = jquery;
require('jquery-slimscroll');

import './js/theme';

import 'metismenu/dist/metisMenu.min';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faChevronRight, faChevronLeft, faHome, faChartBar, faChartArea, faBuilding, faUsersCog} from '@fortawesome/free-solid-svg-icons';

library.add(faChevronRight, faChevronLeft, faHome, faChartBar, faChartArea, faBuilding, faUsersCog);
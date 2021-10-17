import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

console.log(



);
const MenuTree = (props) => (
    <li>
        <a aria-expanded="false" href="#">
            {/* <i className={`fa fa-${props.icon}`} /> */}
            <i>

                <FontAwesomeIcon icon={["fas", props.icon]} />
            </i>

            <span className="nav-label">{props.label}</span>
            <span className="fa arrow" />
        </a>
        <ul className="nav nav-second-level ">
            {props.children}
        </ul>
    </li>
);

MenuTree.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    children: PropTypes.array.isRequired,
};

export default MenuTree;

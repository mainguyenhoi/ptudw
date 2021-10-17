import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const MenuItem = (props) => {
    const listClass = props.isActive ? 'mm-active' : '';
    return (
        <li className={listClass}>
            <Link to={props.path}>
                {props.icon && <i>
                    <FontAwesomeIcon icon={["fas", props.icon]} />
                </i>}
                <span className="nav-label">{props.label}</span>
            </Link>
        </li>
    );
}

MenuItem.propTypes = {
    path: PropTypes.string.isRequired,
    icon: PropTypes.string,
    label: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
};

export default MenuItem;

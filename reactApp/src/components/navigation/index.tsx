import React, {useState, useRef, useEffect, useMemo} from 'react';
import {Link} from 'react-router-dom';
import {isEmpty} from 'lodash';
import Avatar from '../assests/images/avatar.jpg';
import $ from 'jquery';
import MenuItem from './menuItem';
import MenuTree from './menuTree';
import logoDefaut from '../../assets/images/avatardefaut.jpg';
import {smoothlyMenu} from '@helpers/theme';
import {NavigationConstant} from '@constants';

import {getTreeMenu} from '@helpers/permission';
import {toastr} from 'react-redux-toastr';
import {findDOMNode} from 'react-dom';
import {useRouteMatch, useLocation} from 'react-router-dom';

interface User {
    firstName: string,
    lastName: string,
    avatar: string
}


interface LocationState {
    from: {
        pathname: string;
    };
}

const {NavigationMenu, navMenu} = NavigationConstant;

const listNavigationMenu = Object.values(NavigationMenu);

const Navigation = (props) => {
    const location = useLocation();

    const {pathname} = location;

    const menuRef = useRef(null);

    const {user } = props;
    //console.log(user);

    const [menu, setMenu] = useState(listNavigationMenu);

    const [navMenuState, setNavMenuState] = useState(getTreeMenu(navMenu));


    const renderMenu = (item, fullPath = '') => {
        const {match} = props;

        return item.map((currentItem, index) => {
            let children: JSX.Element[] = [];
            if (currentItem.children && currentItem.children.length > 0) {
                children = renderMenu([...currentItem.children], fullPath + currentItem.path);
            }

            const {icon, path, label} = currentItem;

            const currentPath = fullPath + path;
            if (children.length > 0) {
                return (
                    <MenuTree
                        key={index}
                        icon={icon}
                        label={label}
                    >
                        {children}
                    </MenuTree>
                );
            } else {
                return (
                    <MenuItem
                        key={index}
                        isActive={pathname === currentPath}
                        path={currentPath}
                        icon={icon}
                        label={label}
                    />
                );
            }
        });
    }

    const listMenuELM = useMemo(() => {
        return renderMenu([...menu]);
    }, [menu]);

    useEffect(() => {
        $(function () {
            $(menuRef.current).metisMenu({
                toggle: false,
                preventDefault: true,
            });
        });

        $('body').toggleClass('mini-navbar');

        smoothlyMenu();
    }, [])
    
    const {name, avatar, role} = user;

    const renderProfile = () => (

        <div className="dropdown profile-element">
            <img alt="" className="img-circle logo" src={(avatar === null)?logoDefaut: avatar} />
            <span data-toggle="dropdown" className="dropdown-toggle" style={{cursor: 'pointer'}}>
                <span className="block m-t-xs font-bold">{name}</span>
                <span className="text-muted text-xs block">
                    {role?.name}
          <b className="caret" />
                </span>
            </span>
            <ul className="dropdown-menu animated fadeInRight m-t-xs">
                {navMenuState.map((menuNav, index) => {
                    if (menuNav.divider) {
                        return (<li key={index} className="dropdown-divider" />);
                    }
                    return (<li key={index}><Link className="dropdown-item" to={menuNav.path}>{menuNav.label}</Link></li>);
                })}
            </ul>
        </div>
    );



    return (
        <nav className="navbar-default navbar-static-side" role="navigation">
            <div className="sidebar-collapse">
                <ul className="nav metismenu" id="side-menu" ref={menuRef} style={{zIndex: 2000}}>
                    <li className="nav-header">
                        {renderProfile()}
                        <div className="logo-element">
                            <img alt="" className="img-circle logo" src={(avatar === null)?logoDefaut: avatar} />
                        </div>
                    </li>
                    {listMenuELM}
                </ul>
            </div>
        </nav>
    );


}



export default Navigation;

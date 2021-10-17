import React, {useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import {Collapse} from '@material-ui/core';
import {Transition} from 'react-transition-group';
import * as CSS from 'csstype';

const customStyle = {
    small: {
        paddingLeft: '8px',
    }
};

interface IboxInterface {
    title: string,
    label?: string | JSX.Element,
    style?: CSS.Properties,
    isClose?: boolean,
    children: JSX.Element | JSX.Element[],
    subTitle?: string | JSX.Element,
}

const Ibox: React.FC<IboxInterface> = (props) => {
    const {
        title, label, children, isClose, subTitle,
    } = props;

    const [isOpen, setIsOpen] = useState(true);
    const [collapse, setCollapse] = useState(true);

    const onClickCollapse = () => {
        setCollapse(!collapse);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    const IconCollapse = (
            <a className="collapse-link" onClick={onClickCollapse}>
                <i className={`fa ${collapse ? 'fa-chevron-down' : ' fa-chevron-up'}`} />
            </a>
        );

    return (
        <>
            {isOpen
                && (
                    <div className="wrapper wrapper-content animated fadeInRight">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <div>
                                            <h5>
                                                {title}
                                                <small style={customStyle.small}>
                                                    {subTitle}
                                                </small>
                                            </h5>
                                        </div>

                                        {label}
                                        <div className="ibox-tools">
                                            {IconCollapse}

                                            {isClose && (
                                                <a className="close-link" onClick={onClose}>
                                                    <i className="fa fa-times" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <Collapse in={collapse}>
                                        <div className="ibox-content">
                                            {children}
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </>
    );
};

Ibox.defaultProps = {
    label: '',
    isClose: false,
    children: <></>,
};


export default Ibox;

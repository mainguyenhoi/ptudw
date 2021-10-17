import React, {useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import {Collapse} from '@material-ui/core';
import {Transition} from 'react-transition-group';

const customStyle = {
    small: {
        paddingLeft: '8px',
    },
    leftToRight: {
        default: {
            width: '2em',
            transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        },
        transition: {
            entering: {width: '100%'},
            entered: {width: '100%'},
            exiting: {
                width: '2em'
            },
            exited: {
                width: '2em'
            }
        }


    },
};

const duration = 100;

const IboxHoriSontal = (props) => {
    const {
        title, label, children, isCollapse, isClose, subTitle,
    } = props;

    const [isOpen, setIsOpen] = useState(true);
    const [collapse, setCollapse] = useState(true);

    const onClickCollapse = () => {
        setCollapse(!collapse);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen
                && (
                    <div className="wrapper wrapper-content animated fadeInRight">
                        <Transition in={collapse} timeout={duration}>
                            {state => (
                                <div style={{
                                    ...customStyle.leftToRight.default,
                                    ...customStyle.leftToRight.transition[state]
                                }} >
                                    <div className="ibox" >
                                        <div className="ibox-title" style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '0', paddingLeft: '15px'}}>
                                            <div>
                                                {collapse && (<h5 style={{margin: 0}}>
                                                    {title}
                                                    <small style={customStyle.small}>
                                                        {subTitle}
                                                    </small>
                                                </h5>)}

                                            </div>

                                            {label}
                                            <div className="ibox-tools" style={{right: !collapse ? '40%' : '15px'}}>
                                                {isCollapse && (<>
                                                    <a className="collapse-link" onClick={onClickCollapse}>
                                                        <i className={`fa ${collapse ? 'fa-chevron-right' : ' fa-chevron-left'}`} />
                                                    </a>
                                                </>)}

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
                            )}
                        </Transition>

                    </div>
                )}
        </>
    );
};

IboxHoriSontal.defaultProps = {
    label: null,
    style: {},
    isCollapse: true,
    isClose: false,
    children: null,
    subTitle: null,
};

IboxHoriSontal.propTypes = {
    title: PropTypes.string.isRequired,
    label: PropTypes.element,
    style: PropTypes.object,
    isCollapse: PropTypes.bool,
    isClose: PropTypes.bool,
    children: PropTypes.element,
    subTitle: PropTypes.element,
};
export default IboxHoriSontal;

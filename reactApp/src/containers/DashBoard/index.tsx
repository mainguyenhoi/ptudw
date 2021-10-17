import React, {Component, useEffect, useState, useRef, useCallback, useMemo} from 'react';


import {toastr} from 'react-redux-toastr';
import {filter} from 'lodash';
import Ibox from '@components/Ibox';
import IboxHorisontal from '@components/iboxHorisontal/index';
import {Link} from '@interfaces/link';
import {link} from 'fs';
const Dashboard = () => {
    const [allLinks, setAllLinks] = useState<Link[]>([]);
    const [currentLink, setCurrentLink] = useState<Link>();
    const getLinks = async () => {
        try {
      
        } catch {

        }

    }
    const onClickLink = (link: Link) => {
        setCurrentLink(link);
        return;
    }
    useEffect(() => {
        getLinks();
    }, []);

    return (
        <>
            <div className="d-flex">
                <div className="" style={{maxWidth: '23%'}}>
                    <IboxHorisontal title="Menu">
                        <ul >
                            {
                                allLinks.map((link) => {
                                    return <li onClick={() => onClickLink(link)}> <a>
                                        Click to show report {link.name}
                                    </a> </li>
                                })
                            }
                        </ul>
                    </IboxHorisontal>


                </div>

                <div className=" flex-grow-1"  >
                    <Ibox title="Data analys"

                        subTitle={<small>Data analys</small>}
                        label={<span className="label label-success " style={{float: 'right'}}>Monthly</span>} isClose={false}>
                        <div style={{height: '80vh'}}>
                            <iframe src={currentLink?.url} width='100%' height='100%' title="description" />

                        </div>

                    </Ibox>
                </div>
            </div>

        </>
    )
};

export default Dashboard;

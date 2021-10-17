import React, {Component, useEffect, useState, useRef, useCallback, useMemo} from 'react';


import {toastr} from 'react-redux-toastr';
import {filter} from 'lodash';
import Ibox from '@components/Ibox';
import IboxHorisontal from '@components/iboxHorisontal/index';
import {GeneralTable, THRowInterface, THCellInterface} from '@components/GeneralTable';

import { UnitService, LanguageService } from '@services';

const  getColumns = (): THCellInterface<any>[] => {

    return [{
        key: 'name',
        content: 'Ngôn ngữ',
        width: 100
    },
    {
        key: 'count',
        content: 'Số nhân viên',
    },
    {
        key: 'userRatio',
        content: 'Tỉ lệ',
        formatter: ({row}) => {
            return <>{row.userRatio} %</>
        }
    },

]; 
}

const  getColumnsUnit = (): THCellInterface<any>[] => {

    return [{
        key: 'name',
        content: 'Đơn vị',
        width: 100
    },
    {
        key: 'count',
        content: 'Số nhân viên',
    },
    {
        key: 'userRatio',
        content: 'Tỉ lệ',
        formatter: ({row}) => {
            return <>{row.userRatio} %</>
        }
    },

]; 
}
const Dashboard = () => {
    const [languages, setLanguages] = useState<any>([]);
    const [units, setUnits] = useState<any>([]);

    const getLanguages = async () => {
        try {
            const languages = await LanguageService.getAll();
            setLanguages(languages.languages)
        } catch {

        }
    }
    const totalUserLanguage = useMemo(()=>{
        return languages && languages.reduce((prev, cur)=>{
            return prev + cur.users.length;
        },0);
    },[languages]);

    const getUnits = async () => {
        try {
            const units = await UnitService.getAll();
            setUnits(units.units)
        } catch {
        }
    }

    const totalUserUnit = useMemo(()=>{
        return units && units.reduce((prev, cur)=>{
            return prev + cur.users.length;
        },0);
    },[units]);
    
    useEffect(() => {
        getLanguages();
        getUnits();
    }, []);

    const renderLanguageRatio = () => {
        const ratios = languages.map((language:any) => {
            const { users } = language;
            return {
                name: language.name,
                userRatio: (users.length/totalUserLanguage * 100).toFixed(2) ,
                count: users.length
            }
        })
        return  <GeneralTable columns={getColumns()} rows={ratios} directionDesc />

    }

    const renderUnitRatio = () => {
        const ratios =  units.map((unit:any) => {
            const { users } = unit;
            return {
                name: unit.name,
                userRatio: (users.length/totalUserUnit  * 100).toFixed(2),
                count: users.length
            }
        });

        return  <GeneralTable columns={getColumnsUnit()} rows={ratios} directionDesc />

    };


    
    return (
        <>
            <div className="d-flex">

                <div className=" flex-grow-1"  >
                    <Ibox title="Ngôn ngữ"

                        subTitle={<small>Ngôn ngữ</small>}
                        >
                        <div >
                            {
                                renderLanguageRatio()
                            }
                        </div>

                    </Ibox>
                </div>

                <div className=" flex-grow-1"  >
                    <Ibox title="Đơn vị"

                        subTitle={<small>Đơn vị</small>}
                         isClose={false}>
<div >
                            {
                                renderUnitRatio()
                            }
                        </div>

                    </Ibox>
                </div>
            </div>

        </>
    )
};

export default Dashboard;

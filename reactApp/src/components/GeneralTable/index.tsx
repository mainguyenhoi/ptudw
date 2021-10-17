import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './index.scss';

import TRow from './TRow';

import {THRow, THRowInterface} from './THRow';
import {THCell, THCellInterface} from './THCell';
import * as CSS from 'csstype';

export * from './THRow';
export * from './THCell';

export interface GeneralTablePropsInterface<R> {
    columns: THCellInterface<R>[];
    rows: R[],
    className?: string,
    style?: CSS.Properties,
    onClickAction?: (row: R) => void,
    labelSort?: string,
    directionDesc?: boolean,
}

export interface GeneralTableStateInterface<R> {
    currentLabelSort: string,
    directionDesc: boolean,
    rows: R[],
}

const compareValues = (key, order = 'asc') => (a, b) => {
    if (
        !Object.prototype.hasOwnProperty.call(a, key) ||
        !Object.prototype.hasOwnProperty.call(b, key)
    ) {
        return 0;
    }

    if (a[key] === null || a[key] === undefined) {
        a[key] = '';
    }

    if (b[key] === null || b[key] === undefined) {
        b[key] = '';
    }

    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

    let comparison = 0;

    if (varA > varB) {
        comparison = 1;
    } else if (varA < varB) {
        comparison = -1;
    }

    return order === 'desc' ? comparison * -1 : comparison;
};

export const GeneralTable: React.FC<GeneralTablePropsInterface<any>> = (props) => {

    const [labelSortState, setLabelSortState] = useState<string | null>();
    const [directionDescState, SetDirectionDescState] = useState<boolean>(false);

    const {
        columns,
        rows,
        className,
        style,
        onClickAction,
        labelSort,
        directionDesc,
    } = props;

    let tHeadLabel;

    const body = rows.map((row) => {
        return <TRow row={row} THCells={columns} onClickAction={onClickAction} />
    });
    // if (rows && rows.length > 0) {
    //     const body = rows;
    //     const sortType = directionDesc ? 'desc' : 'asc';
    //     const labelSort = Object.keys(data[0])[currentLabelSort];

    //     body.sort(this.compareValues(labelSort, sortType));

    //     tBodyElement = body.map((currentValue, index) => {
    //         let currentValueArr = Object.entries(currentValue);

    //         currentValueArr = currentValueArr.map((value, indexChildren) => {
    //             if (value[0] === 'id') {
    //                 return (
    //                     <TCell key={indexChildren}>
    //                         <Link to={`${service}/edit/${value[1]}`} className="text-navy">
    //                             {' '}
    //                             {value[1]}{' '}
    //                         </Link>
    //                     </TCell>
    //                 );
    //             }

    //             if (value[0] === 'action') {
    //                 const content = [];
    //                 const idItem = value[1][1];
    //                 const url = `${service}/edit/${idItem}`;
    //                 const editElement = (
    //                     <Link
    //                         key={indexChildren + 1}
    //                         to={url}
    //                         style={{paddingRight: '5px'}}
    //                     >
    //                         <i className="fa fa-pencil text-navy" />
    //                     </Link>
    //                 );

    //                 const deleteElement = (
    //                     <a
    //                         style={{paddingRight: '5px'}}
    //                         onClick={() => onClickAction({type: 'delete', id: idItem})}
    //                         key={indexChildren + 2}
    //                     >
    //                         <i className="fa fa-trash text-danger" />
    //                     </a>
    //                 );

    //                 if (value[1][0].includes('edit')) {
    //                     content.push(editElement);
    //                 }
    //                 if (value[1][0].includes('delete')) {
    //                     content.push(deleteElement);
    //                 }

    //                 return <TCell key={indexChildren}>{content}</TCell>;
    //             }

    //             if (value[0] === 'status') {
    //                 let statusElement = '';
    //                 switch (value[1].toUpperCase()) {
    //                     case 'PUBLISHED':
    //                         statusElement = (
    //                             <span className="label label-primary">
    //                                 {t('common.published')}
    //                             </span>
    //                         );
    //                         break;
    //                     case 'UNPUBLISHED':
    //                         statusElement = (
    //                             <span className="label label-danger">
    //                                 {t('common.unpublished')}
    //                             </span>
    //                         );
    //                         break;
    //                     case 'DELETED':
    //                         statusElement = (
    //                             <span className="label label-danger">
    //                                 {t('common.deleted')}
    //                             </span>
    //                         );
    //                         break;
    //                     case 'ACTIVATED':
    //                         statusElement = (
    //                             <span className="label label-primary">
    //                                 {t('common.activated')}
    //                             </span>
    //                         );
    //                         break;
    //                     case 'INACTIVATED':
    //                         statusElement = (
    //                             <span className="label label-warning">
    //                                 {t('common.inactivated')}
    //                             </span>
    //                         );
    //                         break;
    //                     default:
    //                         break;
    //                 }
    //                 return <TCell key={indexChildren}>{statusElement}</TCell>;
    //             }
    //             return <TCell key={indexChildren}>{value[1]}</TCell>;
    //         });

    //         return <TRow key={index}>{currentValueArr}</TRow>;
    //     });
    // }

    // const changeLabelSort = async (newLabelSort) => {
    //     newLabelSort = parseInt(newLabelSort);
    //     const {currentLabelSort, directionDesc, data} = this.state;
    //     let newDirectionDesc = directionDesc;

    //     if (currentLabelSort === newLabelSort) {
    //         newDirectionDesc = !directionDesc;
    //     } else {
    //         newDirectionDesc = false;
    //     }

    //     await this.setState({
    //         ...this.state,
    //         currentLabelSort: newLabelSort,
    //         directionDesc: newDirectionDesc,
    //     });
    // };

    return (
        <>
            <div style={style} className={className}>
                <div className="table-responsive">
                    <table className="table table-stripped table-custom">
                        <thead >
                            <THRow columns={columns} directionDesc labelSort={labelSort} />
                        </thead>

                        <tbody>
                            {body}
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
}


export default GeneralTable;

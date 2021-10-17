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

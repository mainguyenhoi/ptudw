import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as CSS from 'csstype';
import {
    faSort,
    faSortDown,
    faSortUp,
} from '@fortawesome/free-solid-svg-icons';

import './index.scss';

export interface THCellInterface<TRow> {
    content: JSX.Element | string,
    key: string,
    className?: string,
    style?: CSS.Properties,
    width?: number | string,
    changeLabelSort?: (label) => void,
    directionDesc?: boolean,

    formatter?: React.ComponentType<FormatterProps<TRow>>;
    isSorting?: boolean,
    sortable?: boolean
}


export declare interface FormatterProps<TRow> {
    column?: THCellInterface<TRow>;
    row: TRow;
}

export const THCell: React.FC<THCellInterface<any>> = (props) => {

    const onClick = async (key) => {
        const {sortable, changeLabelSort} = props;
        if (sortable === false) {
            return;
        }
        // await changeLabelSort(key);
    };

    const {content, className, sortable, key, directionDesc, style, formatter} = props;
    let labelSort: JSX.Element | null = null;
    if (sortable !== false) {
        let icon = faSort;

        if (directionDesc === true) {
            icon = faSortUp;
        }
        if (directionDesc === false) {
            icon = faSortDown;
        }
        labelSort = (
            <>
                <FontAwesomeIcon icon={icon} className="footable-sort-indicator" />
            </>
        );
    }

    return (
        <>
            <th
                className={`footable-sortable sorting ${className} thead-sorting`}
                style={style}
                onClick={() => onClick(key)}
            >
                {content}
                {labelSort}
            </th>
        </>
    );
}

export default THCell;

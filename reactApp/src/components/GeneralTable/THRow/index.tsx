import React, {Component, isValidElement, cloneElement} from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import {THCellInterface, THCell} from '../THCell';
import * as CSS from 'csstype';

export interface THRowInterface<R> {
    columns: THCellInterface<R>[],
    className?: string,
    changeLabelSort?: (key) => void,
    directionDesc?: boolean,
    labelSort?: string,
    style?: CSS.Properties,
}

const defaultProps: THRowInterface<any> = {
    columns: [],
};

export const THRow: React.FC<THRowInterface<any>> = (props) => {
    const {
        columns,
        className,
        labelSort,
        changeLabelSort,
        directionDesc,
        style,
    } = props;

    const generateTHRows = columns.map((currentTHCell) => {
        if (currentTHCell.key === labelSort) {
            return (
                <THCell {...currentTHCell} isSorting directionDesc={directionDesc} />
            )

        }
        return (<THCell {...currentTHCell} />)
    }
    );

    return (
        <>
            <tr className={className} style={style}>
                {generateTHRows}
            </tr>
        </>
    );
}

THRow.defaultProps = defaultProps;


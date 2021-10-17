import React, {Component, isValidElement, cloneElement, MouseEventHandler} from 'react';
import PropTypes from 'prop-types';
import * as CSS from 'csstype';
import './index.scss';
import THCell, {THCellInterface} from '../THCell';
import {TCellInterFace, TCell} from '../TCell';
import {THRowInterface} from '../THRow';
import {FormatterProps} from 'react-data-grid';


type Direction = 'DESC' | 'ASC';


interface TRowInterface<R> {
    row: R[],
    THCells: THCellInterface<R>[],
    className?: string,
    onClickAction?: any,
    reRender?: (content) => JSX.Element[],
    style?: CSS.Properties,
}

const defaultProps: TRowInterface<any> = {
    row: [],
    THCells: [],
}
const formaterELM = (props: FormatterProps<any>) => {
    return <>
        <div></div>
    </>
}
const TRow: React.FC<TRowInterface<any>> = (props) => {
    const {style, className, onClickAction, reRender, row, THCells} = props;

    return (
        <>
            <tr className={className} style={style} >
                {THCells.map((THCell) => {
                    return <TCell key={THCell.key} formatter={THCell.formatter} row={row} content={row[THCell.key]} />
                })}

            </tr>
        </>
    );

}

TRow.defaultProps = defaultProps;

export default TRow;

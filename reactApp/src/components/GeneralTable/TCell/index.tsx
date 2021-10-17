import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import {FormatterProps} from '../THCell';
import * as CSS from 'csstype';

export declare interface TCellInterFace<TRow> {
    key: string,
    row: TRow[],
    content?: any,
    className?: string,
    style?: CSS.Properties,
    formatter?: React.ComponentType<FormatterProps<TRow>>,
}

function ValueFormatter(props) {
    return <>
        {props.row[props.column.key]}
    </>
}

export const TCell: React.FC<TCellInterFace<any>> = (props) => {

    const {content, className, style, formatter, row} = props;


    const Formatter = formatter;


    let FormatterComponent;

    if (Formatter) {
        FormatterComponent = <Formatter {...props} />;
    }
    return (
        <>
            <td className={className} style={style}>
                {formatter ?
                    FormatterComponent : content}
            </td>
        </>
    );
}

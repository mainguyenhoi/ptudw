import React, {useState} from 'react';
import checkBoxBackground from '@assets/images/green.png';
import './index.scss';
import * as CSS from 'csstype';

const style: {
    active: CSS.Properties,
    inActive: CSS.Properties,
    iCheckbox: CSS.Properties,
    input: CSS.Properties,
} = {
    active: {
        backgroundImage: `url(${checkBoxBackground})`,
        position: 'relative',
    },
    inActive: {
        position: 'relative',
    },
    iCheckbox: {
        position: 'absolute',
        top: '0%',
        left: '0%',
        display: 'block',
        width: '100%',
        height: '100%',
        margin: '0px',
        padding: '0px',
        backgroundColor: 'rgb(255, 255, 255)',
        border: '0px',
        opacity: 0,
    },
    input: {
        position: 'absolute',
        opacity: 0,
    },
};

type Color = 'primary' | 'warning' | 'danger';
interface CheckBoxProps {
    checked?: boolean,
    statusColor?: Color[],
    statusName?: string[],
    isShowStatusName?: boolean,
    name: string,
    disabled?: boolean,
    onChange?: (data: any) => void,
    isError?,
}

const CheckBoxComponent: React.FC<CheckBoxProps> = (props) => {
    const {
        checked,
        statusColor,
        statusName,
        name,
        disabled,
        onChange,
        isError,
        isShowStatusName
    } = props;

    const [checkStatusColor, unCheckStatusColor] = statusColor ? statusColor : [];

    const [checkStatusName, unCheckStatusName] = statusName ? statusName : [];

    return (
        <div className="i-checks">
            <label>
                <div
                    className={`icheckbox_square-green ${checked ? 'checked' : 'icheckbox_hover'}`}
                    style={checked ? style.active : style.inActive}
                    onChange={onChange ? ({target}) => onChange({...target, value: !checked, name: name}) : undefined}
                >
                    <input
                        name={name}
                        type="checkbox"
                        value="true"
                        style={style.input}
                        disabled={disabled}
                    />
                    <ins className="iCheck-helper" style={style.iCheckbox} />
                </div>
                {isShowStatusName &&
                    <span className={`badge badge-${checked ? checkStatusColor : unCheckStatusColor}`} style={{marginLeft: '5px'}}>
                        {checked ? checkStatusName : unCheckStatusName}
                    </span>}

            </label>
        </div>
    );
};

CheckBoxComponent.defaultProps = {
    checked: true,
    disabled: false,
    statusColor: ['primary', 'warning'],
    statusName: ['Activated', 'Inactivated'],
    isShowStatusName: true

}

export const CheckBox = React.memo(CheckBoxComponent);
type Type = 'primary' | 'warning' | 'danger';
interface LabelProps {
    type: Type,
    label: string,
    style: any,
}
const Label = (props: LabelProps) => {
    const {type, label, style} = props;
    const className = `label label-${type}`;
    return (
        <>
            <span className={className} style={style}>{label}</span>
        </>
    )
}

Label.defaultProps = {
    style: {},
}

export default Label;
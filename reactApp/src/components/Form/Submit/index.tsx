import React from 'react';
import {Link} from 'react-router-dom';
import LaddaButton, {ZOOM_IN} from 'react-ladda';


interface SubmitInterface {
	onSubmit?: () => void,
	cancelLabel?: string,
	submitLabel?: string,
	backURL?: string,
	onLoad?: boolean,
}
const SubmitComponent: React.FC<SubmitInterface> = (props) => {
	const {onSubmit, cancelLabel, submitLabel, backURL, onLoad} = props;
	return (
		<>
			<div className="form-group row">
				<div className="col-sm-4 col-sm-offset-2">
					<Link to={backURL ? backURL : '#'} className="btn btn-white btn-sm" >
						{cancelLabel}

					</Link>

					<LaddaButton
						loading={onLoad}
						onClick={onSubmit}
						data-color="#1ab394"
						data-spinner-color="#fff"
						data-style={ZOOM_IN}
						data-spinner-lines={12}
						className="btn btn-primary btn-sm"
						style={{marginLeft: '5px'}}
					>
						{submitLabel}
					</LaddaButton>
				</div>
			</div>
		</>
	);
};

SubmitComponent.defaultProps = {
	cancelLabel: "Cancel",
	submitLabel: "Submit",
	onLoad: false
};

export const Submit = React.memo(SubmitComponent);
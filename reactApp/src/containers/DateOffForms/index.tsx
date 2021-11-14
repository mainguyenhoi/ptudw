import ca from "date-fns/esm/locale/ca/index.js";
import da from "date-fns/esm/locale/da/index.js";
import React from "react";
import { render } from "react-dom";
import '../../assets/scss/dateoff.css'
import { dateOff } from "@src/services/dateoff";
function InputTag(props) {
    //console.log(props);
    return (
        <div className={props.class}>
            <label >{props.label}</label>
            <input type={props.type} className="form-control"
                id={props.id}
                aria-describedby="emailHelp"
                placeholder={props.placeholder}
                pattern={props.pattern}
                title={props.title}
                min={props.min}
                max={props.max}
                onChange={event => props.handleClickParent(props.id, event.target.value)}
            />
        </div>
    );
}
function AreaText(props) {
    return (
        <div>
            <div className="form-floating">
                <textarea className="form-control"
                    placeholder="Leave a comment here"
                    id={props.id}
                    onChange={event => props.handleClickParent(props.id, event.target.value)}
                ></textarea>
                <label>Nội dung</label>

            </div>
        </div>
    );
}
const date = new Date();
const month = date.getMonth() + 1;
const minDay = date.getFullYear() + "-" + month.toString() + "-" + date.getDate();
type MyState = {
    name: string,
    workUnit: string,
    identityNumber: number,
    dayOff: Date,
    numDayOff: number,
    opinionOfUnitManagement: string,
    dayOpinionOfUnitManagement: Date,
    opinionOfBranchManager: string,
    dayOpinionOfBranchManager: Date
};
type MyProps = {};
class DateOffForms extends React.Component<MyProps, MyState> {
    state: MyState = {
        name: 'wwww',
        workUnit: '',
        identityNumber: -1,
        dayOff: new Date("1/1/1999"),
        numDayOff: -1,
        opinionOfUnitManagement: 'eo co',
        dayOpinionOfUnitManagement: new Date("1/1/1999"),
        opinionOfBranchManager: 'eo co',
        dayOpinionOfBranchManager: new Date("1/1/1999")
    };
    handleSubmit = async (event) => {
        const data = {
            "name": this.state.name,
            "workUnit": this.state.workUnit,
            "identityNumber": this.state.identityNumber,
            "dayOff": this.state.dayOff,
            "numDayOff": this.state.numDayOff,
            "opinionOfUnitManagement": this.state.opinionOfUnitManagement,
            "dayOpinionOfUnitManagement": this.state.dayOpinionOfUnitManagement,
            "opinionOfBranchManager": this.state.opinionOfBranchManager,
            "dayOpinionOfBranchManager": this.state.dayOpinionOfBranchManager
        }
        try {
            const fetchData = await dateOff(data);
            console.log(fetchData.data);
            if (fetchData.data == "Success") {
                alert("Gửi Thành Công");
            } else {
                alert("Lỗi Kết Nối, Vui Lòng Thử Lại.");
            }
        } catch {
            alert("Lỗi Kết Nối, Vui Lòng Thử Lại.");
        }


    }
    handleChange = (key, value) => {
        switch (key) {
            case "name":
                this.setState({ name: value });
                break;
            case "workUnit":
                this.setState({ workUnit: value });
                break;
            case "identityNumber":
                this.setState({ identityNumber: value });
                break;
            case "dayOff":
                this.setState({ dayOff: value });
                break;
            case "numDayOff":
                this.setState({ numDayOff: value });
                break;
            case "opinionOfUnitManagement":
                this.setState({ opinionOfUnitManagement: value });
                break;
            case "opinionOfBranchManager":
                this.setState({ opinionOfBranchManager: value });
                break;
            case "dayOpinionOfBranchManager":
                this.setState({ dayOpinionOfBranchManager: value });
                break;
            case "dayOpinionOfUnitManagement":
                this.setState({ dayOpinionOfUnitManagement: value });
                break;
            default:
                break;

        }

    }
    render() {
        return (
            <div className="div-form">
                <form>
                    <div className="label">
                        <h3>Đơn Xin Nghỉ</h3>
                        <i className="fa fa-chevron-down"> </i>
                    </div>
                    <div className="inline">
                        <InputTag
                            placeholder={"Nhập họ và tên"}
                            class={"form-group input"}
                            type={"text"}
                            title={"tên không ít hơn 5 kí tự"}
                            pattern={"A-Za-z]{5,}"}
                            id={"name"}
                            handleClickParent={this.handleChange}
                        />
                        <InputTag
                            placeholder={"Nhập đơn vị"}
                            class={"form-group input"}
                            type={"text"}
                            title={""}
                            id={"workUnit"}
                            pattern={"A-Za-z][0-9]{5-15}"}
                            handleClickParent={this.handleChange}
                        />

                    </div>
                    <div className="inline">
                        <InputTag
                            placeholder={"Nhập cmnd"}
                            class={"form-group input"}
                            type={"text"}
                            title={"CMND không ít hơn 9 số"}
                            id={"identityNumber"}
                            pattern={"[0-9]{9,}"}
                            handleClickParent={this.handleChange}
                        />

                    </div>
                    <div className="inline ct">
                        <h4>Ngày bắt đầu nghỉ:</h4>
                        <InputTag
                            type={"date"}
                            class={"form-group input"}
                            id={"dayOff"}
                            min={minDay}
                            handleClickParent={this.handleChange}
                        />
                        <h4>Số ngày nghỉ:</h4>
                        <InputTag
                            type={"number"}
                            max={10}
                            min={0}
                            id={"numDayOff"}
                            handleClickParent={this.handleChange}
                        />
                    </div>
                    <hr />
                    <h4>Ý kiến của Quản lý đơn vị</h4>
                    <div className="inline ct left">
                        <h4>Ngày:</h4>
                        <InputTag
                            type={"date"}
                            min={minDay}
                            id={"dayOpinionOfUnitManagement"}
                            handleClickParent={this.handleChange}
                        />
                    </div>
                    <AreaText
                        id={"opinionOfUnitManagement"}
                        handleClickParent={this.handleChange}
                    />
                    <hr />
                    <h4>Ý kiến của Quản lý Chi nhánh</h4>
                    <div className="inline ct left">
                        <h4>Ngày:</h4>
                        <InputTag
                            type={"date"}
                            min={minDay}
                            id={"dayOpinionOfBranchManager"}
                            handleClickParent={this.handleChange}
                        />
                    </div>
                    <AreaText
                        id={"opinionOfBranchManager"}
                        handleClickParent={this.handleChange}
                    />
                    <button type="button" onClick={() => this.handleSubmit(Event)} className="btn btn-primary">Xác Nhận</button>
                </form>
            </div>
        );
    }
}
export default DateOffForms;
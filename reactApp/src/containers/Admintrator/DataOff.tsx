import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../assets/scss/adminDateOff.css"
import { Redirect } from "react-router";
import { render } from "@testing-library/react";
import { DateOffAction } from "@redux/actions";
const adminDateOff: React.FC = (props: any) => {
    const [isAdmin, setIsAdmin] = useState(false);
    try {
        const { user } = useSelector((state: any) => state);
        console.log("user.userProfile.user.role.roleId");
        console.log(user.userProfile.user.roleId);
        useEffect(() => {
            user.userProfile.user.roleId === 1 ? setIsAdmin(true) :setIsAdmin(false);
        }, [user])
        if(isAdmin){
            const dispatch = useDispatch();
            dispatch(DateOffAction.fetchDateOffList());
        }
    } catch (error) {
        console.log(error);
    }
    let title:string;
    let classBootstrap:string;
    if(isAdmin){
        title ="Danh sách đơn xin nghỉ";
        classBootstrap = "alert alert-primary";
    } else {
        title ="Bạn không phải quản trị viên - Bạn không thể sử dụng tính năng này";
        classBootstrap="alert alert-danger";
    }
    const dateOffList = () =>{

    }
   
    return (
        <div>
            <h3 className={classBootstrap}>{title}</h3>
        </div>
    );

}
export default adminDateOff;
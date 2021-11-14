import { createAction } from "@reduxjs/toolkit";
import { FETCH_DATE_OFF_LIST } from "./constants/dateoff";
export const fetchDateOffList = createAction(FETCH_DATE_OFF_LIST);
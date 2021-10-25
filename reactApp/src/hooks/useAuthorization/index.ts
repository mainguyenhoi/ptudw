import {useMemo} from "react";
import {useSelector} from "react-redux";
import get from "lodash/get";

const userTypeSelector = state =>
  get(state, "userReducer.userProfile.role.name");

export const useAuthorizedKey = () => {
    const userType = useSelector(userTypeSelector);
    return userType;
  };
  
export const useAuthorizedMenuList = () => {
    const authorizedKey = useAuthorizedKey();
    return useMemo(() => {
    //   if (authorizedKey === FULL_AUTHORIZED) {
    //     return menus;
    //   }
    //   if (Array.isArray(authorizedKey) && authorizedKey.length > 0) {
    //     return menus.reduce((accum, current) => {
    //       if (!current.hasChild) {
    //         authorizedKey.includes(current.key) && accum.push(current);
    //         return accum;
    //       }
    //       const filteredItem = current.items.filter(v =>
    //         authorizedKey.includes(v.key)
    //       );
  
    //       if (filteredItem.length === 0) {
    //         return accum;
    //       }
    //       accum.push({ ...current, items: filteredItem });
    //       return accum;
    //     }, []);
    //   }
      return [];
    }, [authorizedKey]);
  };
  
import { connect } from "react-redux";
import Menu from "@/components/Main/Menu";

// 定义actionType常量
export const ActionType = {
    ITEM_CLICK: "ITEM_CLICK",
    ITEM_PUSH: "ITEM_PUSH"
};
// 定义action
export const ItemClick = (items)=>({
    type: ActionType.ITEM_CLICK,
    value: items
});
// 定义reducers
export const sider = (state={coordinate:[0,0]}, action)=>{
    switch(action.type){
        case ActionType.ITEM_CLICK: 
            state = {coordinate: action.value }
            break;
        default:
            return state;
    }
    return state;
}; 
// 定义容器组件
let mapStateToProps = (state)=>({
    coordinate: state.sider.coordinate
});

let mapDispatchToProps = (dispatch)=>({
    click: (coordinate)=>dispatch({
        type: ActionType.ITEM_CLICK,
        value: coordinate
    })
});

export const  Sider = connect(mapStateToProps, mapDispatchToProps)(Menu);
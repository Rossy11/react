/**
 * Created by Rossy1 on 2018/7/23.
 */
let initMsg={
    msg:"默认数据哈"
}
const reducer = (state = initMsg, action) => {
    switch (action.type) {
        case 'chinese':
            return {
                ...state,
                msg: '这是Redux啊'
            }
        case 'english':
            return {
                ...state,
                msg: "This is Redux"
            }
        default:
            return state
    }
}

export default reducer;
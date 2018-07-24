/**
 * Created by Rossy1 on 2018/7/23.
 */
let initMsg={
    msg:"默认数据"
}
const reducer = (state = initMsg, action) => {
    switch (action.type) {
        case 'chinese':
            return {
                msg: '这是Redux啊'
            }
        case 'english':
            return {
                msg: "This is Redux"
            }
        default:
            return state
    }
}

export default reducer;
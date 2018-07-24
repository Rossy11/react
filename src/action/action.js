/**
 * Created by Rossy1 on 2018/7/23.
 */
const actions = {
    sendShowChineseMsg: () => ({ type: 'chinese' }),
    sendShowEnglishMsg: () => ({ type: 'english' })
}

export function login() {
    return actions.sendShowChineseMsg()
}



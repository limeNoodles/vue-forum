import {gethotuser, getPageMain, getPageMainByPage} from "@/api"

export default {
    //context:上下文，actions中的默认参数，理解成store对象
    aLogin(context, payload) {
        setTimeout(() => {
            context.commit('login', payload.user)
            payload.success();
        }, 1000);
    },


    getpagemain(context) {
        getPageMain().then(res => {
            context.commit('getpagemain', {
                    info: res.data.list,
                    total: res.data.total
                }
            );
        }).catch()
    },
    getHotuser(context) {
        gethotuser().then(res => {
            context.commit('gethotusers', {
                    hotuser: res.data.list
                }
            );
        }).catch()
    },

    changepage(context, number) {
        getPageMainByPage(number,5).then(res => {
            context.commit('getpagemain', {
                info: res.data.list
            });
        }).catch()
    }


}//包含多个对应事件回调函数得对象，主要是异步操作
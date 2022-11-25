import axios from "axios";
import Qs from "qs";
import {SnackbarProgrammatic as Snackbar} from 'buefy'
//import * as url from "url";

//全局默认配置
axios.defaults.baseURL = "http://182.61.5.92:8080/api";
// axios.interceptors.request.use(
//     config => {
//         console.log(config);
//         return config;
//     },
//     err => {
//         console.log(err);
//     }
// );请求拦截
axios.defaults.withCredentials = true ;//请求发送cookie
/*axios.interceptors.request.use(
    config => {
        let headers = {
            "Accept-Language":"en-CN;q=1.0",
            "source_type":"apple-appstore",
            "version_code":"5.4.8",
            "Content-Type":"application/json",
            "push_device_type":"4",
            "Accept": "*!/!*"
        }
        config.headers = {...headers,...config.headers}//如果不这样写,那么在接口中设置的header都会被覆盖
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)*/


/*axios.interceptors.response.use(res => {
    return res.data;
}, () => {
   /!* const h = this.$createElement;
    this.$message({
        message: h('p', null, [
            h('span', null, ''),
            h('i', { style: 'color: red' }, '服务异常')
        ])
    });*!/
    Snackbar.open({
        message: '服务器被吃了',
        type: 'is-warning',
        position: 'is-top',
        actionText: 'Retry',
        indefinite: true,
        onAction: () => {
            this.$buefy.toast.open({
                message: 'Action pressed',
                queue: false
            })
        }
    })
})*/

axios.interceptors.response.use(res => {
    return res.data;
}, () => {
    Snackbar.open( {message: '请求失败',
        type: 'is-warning',
        position: 'is-top',});
    /* const h = this.$createElement;
     this.$message({
         message: h('p', null, [
             h('span', null, ''),
             h('i', { style: 'color: red' },"请求失败")
         ])
     });*/
})



export const loginout = (token) => {
    return axios.post(
        "/user/logout",
        {},
        {
            headers: {
                'Content-Type': 'application/json'
                , 'Authorization': token
            }
        }
    );
};
//post传数据用data，get传参数用params
export const adminLogin = (username, password) => {
    return axios.post("/loginbackstage", Qs.stringify({username, password}));
};
/**
 * 用户登录
 * @param userAccount 用户账号
 * @param userPassword 用户密码
 * @returns {Promise<AxiosResponse<any>>}
 */
export const userLogin = (userAccount, userPassword) => {
    return axios.post(
        "/user/login",
        {"userAccount": userAccount, "userPassword": userPassword}
    );
};

export const updateUser = (id,userName,gender,phone,email,userRole,userStatus,token) => {
    return axios.post(
        "/user/update",
        {"id": id, "userName": userName,"avatarUrl":"","gender":gender,"password":""
               ,"phone":phone,"email":email,"userRole":userRole,"userStatus":userStatus},
        {
            headers: {
                'Content-Type': 'application/json'
                , 'Authorization': token
            }
        }
    );
};
export const deleteUser = (id,token) => {
    return axios.get(
        "/user/delete?"+Qs.stringify({"id": id}),
        {
            headers: {
                'Content-Type': 'application/json'
                , 'Authorization': token
            }
        }
    );
};
export const registerUser = (userAccount, userPassword,checkPassword) => {
    return axios.post(
        "/user/register",
        {"userAccount": userAccount, "userPassword": userPassword,"checkPassword":checkPassword}
    );
};

export const PostLike = (post_id,token) => {
    return axios.get("/posts/post_like?"+Qs.stringify({"post_id": post_id}),{
        headers: {
            'Content-Type': 'application/json'
            , 'Authorization': token
        }
    });
};
export const deletePosts = (id,token) => {
    return axios.get(
        "/posts/delete?"+Qs.stringify({"id": id}),
        {
            headers: {
                'Content-Type': 'application/json'
                , 'Authorization': token
            }
        }
    );
};

export const getAllposts = (token) => {
    return axios.get("/posts/getall",{
        headers: {
            'Content-Type': 'application/json'
            , 'Authorization': token
        }
    });
};


export const getAllArticle = (page) => {
    return axios.get("/posts/get_hot_posts_and_user_all?page="+page);
};

export const getAllArticleSearch = (page,search) => {
    return axios.post("/posts/get_userposts_by_search",{
        "page":page,
        "search":search
    });
};

export const getAllArticleType = () => {
    return axios.get("/posts/get_all_types");
};

export const getArticleByTypeId = typeId => {
    return axios.get("/posts/get_posts_by_type?typeId="+typeId);
};

export const getHotArticleType = () => {
    return axios.post("/posts/get_hot_posts_type",
        {
            "page": 0,
            'size': 10
        });
};

export const getPageMainByPage = (pageNum, pageSize) => {
    return axios.post(
        "/posts/get_hot_posts_and_user",
        {
            "page": pageNum,
            'size': pageSize
        }
    )
};
export const getPageMain = () => {
    return axios.post(
        "/posts/get_hot_posts_and_user",
        {
            "page": 0,
            'size': 5
        }
    )
};



export const getnew = () => {
    return axios.post("/posts/get_new_posts_and_user",
        {
            "page": 0,
            "size": 6
        })
};

export const gethotuser = () => {
    return axios.post("/posts/get_hot_users", {
        "page": 0,
        'size': 5
    })
};

export const getUserMsg = (userId) => {
    return axios.get("/posts/get_user_msg?userId=" + userId)
};
export const register = (userName, userPassword, userShow, userEmail, userPhone, userSex) => {

    return axios.post("/register", Qs.stringify({userName, userPassword, userShow, userEmail, userPhone, userSex}))

};
export const getcomment = (artId) => {
    return axios.get("/posts/get_reply_by_posts_id?postId=" + artId)
};
/*export const newcomment = (comArtId, text, comUserId,token) => {
    return axios.post("/posts/posts_reply",{
      "post_id":comArtId,
      "reply_content":text,
        "reply_userid":comUserId
    },{
        headers:{'Content-Type': 'application/json'
                ,'Authorization':'Bearer '+ token}
    })
};*/
export const newcomment = (comArtId, text, comUserId, token) => {
    return axios({
        url: "/posts/posts_reply",
        method: "POST",
        data: {
            "post_id": comArtId,
            "reply_content": text,
            "reply_userid": comUserId
        },
        headers: {
            'Content-Type': 'application/json'
            , 'Authorization': token
        }
    })
};
export const newpost = (userId, title, text, select, token) => {
    return axios.post("/posts/new_posts",
        {
            "user_id": userId,
            "post_type": select,
            "post_title": title,
            "post_content": text
        },
        {
            headers: {
                'Content-Type': 'application/json'
                , 'Authorization': token
            }
        })
};

export const findartbyuserid = (userId) => {
    return axios.get("/posts/get_posts_by_userid?userId="+userId)
};

export const get_userposts_by_userId = (userId) => {
    return axios.get("/posts/get_userposts_by_userId?userId="+userId)
};
export const getuserlist = (token) => {
    return axios.post("/user/search",{},{
        headers: {
            'Content-Type': 'application/json'
            , 'Authorization': token
        }
    })
};



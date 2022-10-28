import axios from "axios";

const instance = axios.create(
    {withCredentials: true,
        baseURL: 'https://test-api.misaka.net.ru/api/',
        headers: {
            "API-KEY": "c8b308c1-df1b-42c8-9ba3-4f13cd28f83e"
        }}
)

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
               return response.data
            });
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI object')
       return  profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return  instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return  instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return  instance.put(`profile/status`, {status: status});
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}


export const authAPI = {
    me() {
       return instance.get(`auth/me`);
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },

    logout() {
        return instance.delete(`auth/login`);
    }


}
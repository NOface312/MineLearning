import axiosInstance from "./../../../axios/axiosAPI";

export async function GetNew(arg = '') {
    try {
        const response = await axiosInstance.get('/news' + arg, {
            "refresh_token": localStorage.getItem("refresh_token")
        });
        return response;
    }
    catch (e) {
        console.log(e);
    }
};


export async function GetNews(arg = '') {
    try {
        const response = await axiosInstance.get('/news'+ arg, {
            "refresh_token": localStorage.getItem("refresh_token")
        });
        return response;
    }
    catch (e) {
        console.log(e);
    }
};
import axiosInstance from "./../../../axios/axiosAPI";

export async function GetLesson(arg = '1') {
    try {
        const response = await axiosInstance.get('/lessons/' + arg, {
            "refresh_token": localStorage.getItem("refresh_token")
        });
        return response;
    }
    catch (e) {
        console.log(e);
    }
};


export async function GetLessons(arg = '') {
    try {
        const response = await axiosInstance.get('/lessons'+ arg, {
            "refresh_token": localStorage.getItem("refresh_token")
        });
        return response;
    }
    catch (e) {
        console.log(e);
    }
};
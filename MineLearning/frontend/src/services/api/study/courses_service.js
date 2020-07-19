import axiosInstance from "./../../../axios/axiosAPI";

export async function GetCourse(arg = '1') {
    try {
        const response = await axiosInstance.get('/courses/' + arg, {
            "refresh_token": localStorage.getItem("refresh_token")
        });
        return response;
    }
    catch (e) {
        console.log(e);
    }
};


export async function GetCourses(arg = '') {
    try {
        const response = await axiosInstance.get('/courses'+ arg, {
            "refresh_token": localStorage.getItem("refresh_token")
        });
        return response;
    }
    catch (e) {
        console.log(e);
    }
};
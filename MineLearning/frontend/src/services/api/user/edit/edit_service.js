import axiosInstance from "../../../../axios/axiosAPI";


export async function ChangePassword({ old_password, new_password }) {
    try {
        const response = await axiosInstance.put('/auth/user/change/password/', {
            old_password: old_password,
            new_password: new_password,
        });
        return response;
    } catch (error) {
        throw error
    }
};


export async function GetUserData() {
    try {
        const response = await axiosInstance.get('/auth/user/data/', {
            "refresh_token": localStorage.getItem("refresh_token")
        });
        return response;
    } catch (error) {
        throw error
    }
};


export async function ChangeUserData({username, name, surname, second_name, email}) {
    try {
        const response = await axiosInstance.put('/auth/user/data/', {
            username: username,
            name: name,
            surname: surname,
            second_name: second_name,
            email: email,
        });
        return response;
    } catch (error) {
        throw error
    }
};
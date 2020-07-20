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


export async function GetCurrentUserData() {
    try {
        const response = await axiosInstance.get('/auth/user/current/', {
            "refresh_token": localStorage.getItem("refresh_token")
        });
        return response;
    } catch (error) {
        throw error
    }
};


export async function ChangeUserData({ username, name, surname, second_name, email, bio, new_password, old_password}) {
    try {
        const response = await axiosInstance.put('/auth/user/' + username + '/edit/', {
            username: username,
            name: name,
            surname: surname,
            second_name: second_name,
            email: email,
            bio: bio,
            new_password: new_password,
            old_password: old_password,
        });
        return response;
    } catch (error) {
        throw error
    }
};
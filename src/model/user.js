const UserModel = {
    list: async function getUser() {
        const data = await fetch('/data/user.json')
            .then((response) => response.json())
            .then((data) => data.data);
        return data
    }
}


export {UserModel}
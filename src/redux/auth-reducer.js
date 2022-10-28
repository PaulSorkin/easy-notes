

const register = async (username, email, password) => {
    let response = await authAPI.register(username, email, password);
}
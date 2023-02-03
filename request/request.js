async function getUser(username) {
    let url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    return await response.json();
}

export default getUser;

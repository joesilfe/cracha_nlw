const linkSocialMedia = {
    github: {
        user: "joesilfe",
    },
    youtube: {
        user: "",
    },
    facebook: {
        user: "joel.silve.149",
    },
    instagram: {
        user: "joesilfe",
    },
    twitter: {
        user: "",
    },
};

function changeSocialMedia() {
    for (li of socialLinks.children) {
        const social = li.getAttribute("class");

        li.children[0].href = `https://${social}.com/${linkSocialMedia[social].user}`;
    }
}

function getGitHubProfileInfos() {

    const url = `https://api.github.com/users/${linkSocialMedia.github.user}`;

    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
    .catch((err) => console.log(err));
}

changeSocialMedia();
getGitHubProfileInfos();
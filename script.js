const reels = [
    {
        ismuted: true,
        username: "alex_world",
        likeCount: 1200,
        isLike: false,
        commentCount: 89,
        caption: "Enjoying the sunshine!",
        video: "./reels/11.mp4",
        userProfile: "https://images.unsplash.com/photo-1571654161595-6bcb8e1bd173?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w0ODE0NjMzfHxlbnwwfHx8fHw%3D",
        shareCount: 45,
        isFollowed: true
    },
    {
        ismuted: true,
        username: "travel_with_me",
        likeCount: 8450,
        isLike: true,
        commentCount: 320,
        caption: "Hidden beach in Bali 🌊",
        video: "/reels/12.mp4",
        userProfile: "https://images.unsplash.com/photo-1575862469270-84017e7de7c2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw0ODE0NjMzfHxlbnwwfHx8fHw%3D",
        shareCount: 210,
        isFollowed: false
    },
    {
        ismuted: true,
        username: "tech_guy",
        likeCount: 540,
        isLike: false,
        commentCount: 42,
        caption: "Quick tip for faster coding!",
        video: "/reels/13.mp4",
        userProfile: "https://images.unsplash.com/photo-1537669397900-8118cb21912c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8NDgxNDYzM3x8ZW58MHx8fHx8",
        shareCount: 18,
        isFollowed: true
    },
    {
        ismuted: true,
        username: "fitness_queen",
        likeCount: 9700,
        isLike: true,
        commentCount: 675,
        caption: "Leg workout 🔥🔥",
        video: "/reels/14.mp4",
        userProfile: "https://images.unsplash.com/photo-1589100796432-969fa1e5d0cb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxKTWs1cWdFaHBqa3x8ZW58MHx8fHx8",
        shareCount: 390,
        isFollowed: false
    },
    {
        ismuted: true,
        username: "foodielife",
        likeCount: 3100,
        isLike: false,
        commentCount: 150,
        caption: "Best pasta recipe!",
        video: "/reels/15.mp4",
        userProfile: "https://plus.unsplash.com/premium_photo-1661775820832-f971657b13f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8fDB8fHww",
        shareCount: 95,
        isFollowed: true
    },
    {
        ismuted: true,
        username: "art_vibes",
        likeCount: 1600,
        isLike: false,
        commentCount: 75,
        caption: "Painting this masterpiece 🎨",
        video: "/reels/16.mp4",
        userProfile: "https://plus.unsplash.com/premium_photo-1682095757120-c9abb908ed60?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
        shareCount: 60,
        isFollowed: false
    },
    {
        ismuted: true,
        username: "daily_motivation",
        likeCount: 4500,
        isLike: true,
        commentCount: 200,
        caption: "Keep going. You're closer than you think!",
        video: "/reels/17.mp4",
        userProfile: "https://images.unsplash.com/photo-1619086303291-0ef7699e4b31?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
        shareCount: 180,
        isFollowed: true,

    },

];

var allreels = document.querySelector('.all_reels')
function addData() {
    var sum = "";
    reels.forEach(function (e, idx) {
        sum += `
        <div class="reels">

            <video class="main_video" src="${e.video}" autoplay loop ${e.ismuted ? 'muted' : ''}></video>
            <div class="mute" id= ${idx}>
                ${e.ismuted ? '<i class="ri-volume-mute-line"></i>' : '<i class="ri-volume-up-fill"></i>'}
            </div>
            <div class="bottom">
                <div class="user">
                    <img src="${e.userProfile}" alt="">
                    <h4>${e.username}</h4>
                    <button id=${idx} class="follow">${e.isFollowed ? "Following" : "Follow"}</button>
                </div>
                <h3>${e.caption}</h3>
            </div>

            <div class="right">

                <div id= "${idx}" class="like">
                    <h4>
                        <i class="${e.isLike ? "ri-heart-3-fill" : "ri-heart-3-line"}"></i>
                    </h4>
                    <h6>${e.likeCount}</h6>
                </div>

                <div class="comment">
                    <h4><i class="ri-chat-1-line"></i></h4>
                    <h6>${e.commentCount}</h6>
                </div>

                <div class="share">
                    <h4><i class="ri-share-forward-line"></i></h4>
                    <h6>${e.shareCount}</h6>
                </div>

                <div class="menu">
                    <h4><i class="ri-menu-line"></i></h4>
                </div>

            </div>

        </div>
    `;
    });

    allreels.innerHTML = sum;


}

addData()

allreels.addEventListener('click', function (dets) {

    if (dets.target.className == "like") {

        if (!reels[dets.target.id].isLiked) {
            reels[dets.target.id].likeCount++;
            reels[dets.target.id].isLiked = true;
        }
        else {
            reels[dets.target.id].likeCount--;
            reels[dets.target.id].isLiked = false;
        }
        addData();

    }
    if (dets.target.className == "follow") {
        if (!reels[dets.target.id].isFollowed) {
            reels[dets.target.id].isFollowed = true;
        }
        else {
            reels[dets.target.id].isFollowed = false;
        }
        addData();
    }
    if (dets.target.className == "mute") {
        if (!reels[dets.target.id].ismuted) {
            reels[dets.target.id].ismuted = true;
        }
        else {
            reels[dets.target.id].ismuted = false;
        }
        addData();
    }

})




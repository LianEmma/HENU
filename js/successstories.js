const stories = {
    story1: {
        title: "Empowering Grace - A Journey to Active Aging",
        content: `Grace K., a 72-year-old widow living in Kampala, had always been an active and vibrant member of her community.
                 However, after a severe fall two years ago, her life took an unexpected turn. The injury left her with limited 
                 mobility, and she found herself increasingly isolated and dependent on others for her daily needs. 
                The once lively and independent Grace felt her world shrinking as her physical limitations grew.
                
                Her turning point came when she was introduced to Health Nest Uganda (HENU) by a concerned neighbor.
                 HENU's dedicated team of volunteers quickly assessed Grace's situation 
                and developed a personalized care plan to support her journey to recovery and active aging.

                One of the first steps was to provide Grace with physical therapy sessions. 
                The professional physiotherapists from HENU visited her home regularly, guiding her through exercises 
                designed to strengthen her muscles and improve her mobility.
                 These sessions were complemented by educational workshops on home safety to prevent future falls.

                 HENU's healthcare team also conducted regular health screenings to monitor Grace's overall well-being. 
                 They ensured she had access to necessary medications and medical supplies, which were often delivered to her doorstep. The continuous health monitoring
                  helped catch potential issues early and provided Grace with the confidence that she was in good hands.

                  Community Engagement and Social Support

                  Understanding the importance of social interaction, HENU introduced Grace to their community programs.
                  These programs included group exercise classes, health education seminars, and social gatherings specifically designed for the elderly. Grace began attending these events, where she met others facing similar challenges. The friendships she formed and the sense of 
                  community she experienced played a crucial role in lifting her spirits and reducing her feelings of isolation.
                
                  Digital Inclusion Initiative

                   To further enhance her quality of life, HENU's digital inclusion initiative taught Grace how to use a smartphone and navigate the internet. 
                   This new skill allowed her to stay connected with her family and friends, participate in virtual events, and access online resources that enriched her daily life.
                   The digital literacy program empowered Grace to remain engaged with the world around her, despite her physical limitations.

                   Outcome

                    Today, Grace is a testament to the impact of HENU's comprehensive care and support.
                     She has regained much of her mobility and continues to participate actively in community events.
                      Her physical health has improved, but more importantly, her mental and emotional well-being has seen a significant positive shift.
                       Grace now leads a fulfilling life, surrounded by a supportive community and equipped with the tools to maintain her independence.

                       Grace's Words
                       "HENU gave me my life back. The care and support they provided not only helped me recover physically but also rekindled my joy and zest for life. I am forever grateful to the wonderful team at HENU for their unwavering dedication and compassion."
                        — Grace K.
                `,
        image: "assets/images/happyhome.jpg"
    },
    story2: {
        title: "Mary's Joyful Transformation",
        content: "Mary, aged 80, struggled with depression after her children moved away. Through our support programs, she found new hobbies and friends. Mary now volunteers at our center and says she's never been happier. Her transformation shows the power of community and support.",
        image: "assets/images/Eldery.jpg"
    },
    story3: {
        title: "Kigozi Mike",
        content: "Kigozi Mike, aged 70, found new purpose after joining our art classes. he now leads workshops and is a source of inspiration to many. Her story showcases how embracing new activities can lead to fulfilling and joyful experiences.",
        image: "assets/images/Eld.jpg"
    },
    story4: {
        title: "Anna's New Beginning",
        content: "Anna, aged 70, found new purpose after joining our art classes. She now leads workshops and is a source of inspiration to many. Her story showcases how embracing new activities can lead to fulfilling and joyful experiences.",
        image: "assets/images/Events.jpg"
    }
};

function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function loadStory() {
    const storyId = getQueryParam('id');
    if (storyId && stories[storyId]) {
        const story = stories[storyId];
        document.getElementById('full-story-title').innerText = story.title;
        document.getElementById('full-story-content').innerText = story.content;
        document.getElementById('full-story-image').src = story.image;
        loadRelatedStories(storyId);
    } else {
        document.getElementById('full-story-title').innerText = "Story not found";
        document.getElementById('full-story-content').innerText = "";
        document.getElementById('full-story-image').src = "";
    }
}

function loadRelatedStories(currentStoryId) {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '<h2>Related Success Stories</h2>';
    for (const [id, story] of Object.entries(stories)) {
        if (id !== currentStoryId) {
            sidebar.innerHTML += `
                <article class="story-preview">
                    <a href="fullview.html?id=${id}">
                        <img src="${story.image}" alt="${story.title}">
                        <h3>${story.title}</h3>
                    </a>
                </article>
            `;
        }
    }
}

function shareStory() {
    const storyTitle = document.getElementById('full-story-title').innerText;
    const storyUrl = window.location.href;
    const shareText = `Check out this story: ${storyTitle} - ${storyUrl}`;
    if (navigator.share) {
        navigator.share({
            title: storyTitle,
            text: shareText,
            url: storyUrl
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(console.error);
    } else {
        alert('Sharing is not supported in this browser. Copy and paste this link to share: ' + storyUrl);
    }
}

document.addEventListener('DOMContentLoaded', loadStory);

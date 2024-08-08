
let Members = {
   Member1: {
  
        Name: "Namara Arthur Araali",
        Duty: "Cheif Executive Officer",
        Facebook:   "",
        No: "",
        mail:"",
        pic: "/assets/Images/arthur.jpg",
        cont: `Namara Arthur Araali, a prominent Ugandan Gerontologist and community development expert, 
        has made significant contributions to health education, counseling, and advocacy for the elderly. 
        Holding a Master's degree in Gerontology from the University of Southampton,
        Araali integrates global and local insights into education and healthcare,
        with a focus on non-communicable diseases and healthy aging practices.
        His work emphasizes the need for intergenerational and transdisciplinary methods to build sustainable 
        futures and adapt to societal changes.
        As the Director of Health Nest Uganda and a member of the National Council for Older Persons,
        he tackles the provision of health and social care for the elderly in developing nations,
        promoting strategic planning and innovative approaches like enhancing public health systems,
        specializing in geriatric medicine, and encouraging community-based care. 
        With over 15 years dedicated to upholding the dignity and independence of older persons,
        Araali's passion and expertise have garnered him recognition and awards,
        underscoring his dedication to improving the lives of Uganda's aging population.`
    },

   Member2: {

        Name: "Retired Bishop Samuel Balagadde Sekkadde",
        Duty: "ChairPerson",
        Facebook:   "",
        No: "",
        mail:"",
        pic: "/assets/Images/bishop.jpg",
        cont: `Bishop Samuel Balagadde Ssekkadde is a respected figure in Uganda's Anglican community, 
        having served as the Bishop of Namirembe from 1994 to 2009. 
        His tenure as bishop was marked by a commitment to spiritual leadership and community development.
        He is known for encouraging clergy to engage in self-help projects,
        which not only provided income but also fostered self-reliance within the community.
        After retiring, Bishop Ssekkadde continues  to inspire many with his dedication to farming and sustainable living,
        demonstrating the same values of hard work and foresight that characterized his ecclesiastical career.
        His life's work extends beyond his church duties,
        leaving a legacy of empowerment and thoughtful preparation for life's transitions.`
    },

    Member3:{
        Name: "Saba Zubedde",
        Duty:"Administrator",
        Facebook:   "",
        No: "",
        mail:"",
        pic: "/assets/images/saba.jpg",
        cont:`Saba Zubedda is a dedicated Administrator at Health Nest Uganda (HENU), 
        an indigenous non-profit organization committed to empowering communities and promoting dignity, equality,
        and independence among individuals, especially the elderly and youth.
        Her passion for her work is evident in her contributions to HENU's mission of engaging community strengths
        and ensuring active participation in societal change. 
        Under her administration, HENU has reached out to older persons, their families, and communities,
        addressing health-related problems and other social needs with a vision of creating a proactive and empowered society.`
    },

    Member4:{

        Name: "Elizabeth Najjemba Kaleeba",
        Duty: "Secretary",
        Facebook:   "",
        No: "",
        mail:"",
        pic: "",
        cont: `About Elizabeth Najjemba Kaleeba coming soon...`
    },
    Member5:{

        Name: "Mutembuzi Joseph",
        Duty: "Treasurer",
        Facebook:   "",
        No: "",
        mail:"",
        pic: "/assets/images/mutembuzii.jpg",
        cont: `+256772916894 
        jmutembuzi10@yahoo.co.uk

        Mutembuzi Joseph is a financial accountant who is experienced in business finance and non-profit 
        making organizations’ accounting.
        After his Bachelor’s degree in Business Administration majoring in accounting Joseph’s 
        career kick started in a Micro-credit Development Trust Organization, leading to his current aspiration
        of financial Accounting in the non-profit making and profit making sectors. 
        His achievements include streamlining accounting processes for numerous small businesses and organizations. 
        Joseph currently leaves in Kampala Uganda,
        and he enjoys working with colleagues from different backgrounds and his engagement with different 
        organizations suits him well in an environment of teamwork`
    },
    Member6:{
        Name: "Edward Kafeero",
        Duty: "Community Engagement",
        Facebook:   "",
        No: "",
        mail:"",
        pic: "/assets/images/Edward.jpg",
        cont: `Kafeero Edward is a committed community mobiliser with Health Nest Uganda (HENU). 
        He has a strong skill in interpersonal relationship and a very good team builder.
        His work with HENU reflects a commitment to promoting independence and equality,
        empowering older individuals as active participants in their communities.`
    },
    Member7:{
        Name: "Asiimwe Sylvia",
        Facebook:   "",
        No: "",
        mail:"",
        pic: "/assets/images/asiimwe.jpg",
        Duty: "Programs Coordinator",
        cont: `Asiimwe Sylvia, the Program Coordinator at HealthNest Uganda, 
        has been a pivotal force in the organization since August 2015. With over nine years of dedicated service, 
        she has excelled in leading community-led research programs that address the health and socio-economic needs 
        of older persons across Uganda. Her commitment to enhancing the lives of older individuals is evident 
        through her collaborative efforts with the Director and volunteers to plan, monitor, and implement impactful projects.

        Sylvia's role at HealthNest Uganda is multifaceted,
        encompassing the coordination of groups of older persons to tackle challenges through 
        initiatives in income generation, socialization, and healthy living. She is also a key figure in training 
        community members, including youth, older persons, women, and men, in counseling and guidance.
        Her proactive approach in preventing sexual exploitation and abuse, coupled with her engagement with the public,
        donors, and government departments,
        underscores her dedication to advocating for the rights and well-being of older persons.

        In addition to her significant contributions at HealthNest Uganda, Sylvia's academic background,
        including a Master’s degree in Development Practice from the University of Queensland,
        complements her practical expertise. Her extensive experience, spanning roles such as a researcher, 
        transcriber, and previous positions at IOM - UN Migration and the Inspectorate of Government,
        highlights her exceptional ability to support and uplift vulnerable communities.
        Sylvia's unwavering commitment and extensive skill set make her an invaluable asset to HealthNest Uganda.`
    }
}





function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}
function loadMember() {
    const memberid = getQueryParam('id');
    if (memberid && Members[memberid]) {
        const member = Members[memberid];
        document.getElementById('NameZ').innerText = member.Name;
        document.getElementById('content').innerText = member.cont;
        document.getElementById('Img').src = member.pic;

        // Update the social media and contact links
        document.getElementById('Fb').href = member.Facebook || "#";
        document.getElementById('Email').href = member.mail ? `mailto:${member.mail}` : "#";
        document.getElementById('Phone').href = member.No ? `tel:${member.No}` : "#";

        // loadRelatedMembers(memberid)
        
        // loadRelatedStories(memberid);
    } else {
        document.getElementById('content').innerText = "Story not found";
        document.getElementById('NameZ').innerText = "";
        document.getElementById('Img').src = "";
    }
}


function loadRelatedMembers(currentmemberid) {
    const sideContent = document.getElementById('sideCont');
    if (sideContent) {
        sideContent.innerHTML = '<h2>Board Members</h2>';
        for (const [id, member] of Object.entries(Members)) {
            if (id !== currentmemberid) {
                sideContent.innerHTML += `
                    <article class="member-preview" style="background-image: url('${member.pic}'); background-size: cover; background-position: center;">
                        <a href="BoardMembers.html?id=${id}">
                            <h3>${member.Name}</h3>
                        </a>
                    </article>
                `;
            }
        }
    }
}


// Call loadMember when the page loads
window.onload = function() {
    loadMember();
    loadRelatedMembers(getQueryParam('id'));
};

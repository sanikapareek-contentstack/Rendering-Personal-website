const header={
    logo:"./assets/logo.png",
    logo_href:"#",
    nav:[
        {
            "title":"Profile",
            "href":"#profile"
        },
        {
            "title":"Education",
            "href":"#education"
        },
        {
            "title":"Achievements",
            "href":"#achievements"
        },
        {
            "title":"Projects",
            "href":"#project"
        }
    ]
}

const banner={
    name:"Sanika Pareek",
    position:"Associate Software Developer Intern at Contentstack",
    bannerBackgroundImg:"./assets/background.png"
}

const profileImage={
    profileImage:"./assets/sanika.jpeg"
}

const profile={
    profileHeading:"Profile",
    section:[
        {
            heading:"About Me",
            paragraph:"I'm Sanika Pareek, a 21 year old graduate at MIT Academy of Engineering from Pune, Maharashtra. I'm certified for Azure AI 900 and worked on tools like Fusion 360 and Matlab. I have interest in the field of Artifical Intelligence and Machine Learing."
        },
        {
            heading:"Details",
            paragraph:[
                {
                    title:"Skills",
                    value:["Java","MySQL"]
        
                },
                {
                   title:"Hobbies",
                   value:["Painting"]
        
                },
                {
                    title:"Known Languages",
                    value:["English","Hindi","Marathi"]
        
                },
                {
                    title:"Contact Me",
                    value:[
                        {
                            logo_class:"fa fa-github",
                            logoLink:"https://github.com/sanikapareek-contentstack"
                        },
                        {
                            logo_class:"fa fa-linkedin",
                            logoLink:"https://www.linkedin.com/mwlite/in/sanika-pareek-50548120a"
                        }
                    ]
        
                }
                
            ]
        }
       
    ],

    
}

const education={
    educationHeading:"Education",
    educationInfo:[{
        educationHeading:"B.Tech",
        institutionHeading:"Name of College",
        institutionName:"MIT Academy of Engineering,Pune",
        streamHeading:"Stream",
        streamType:"Computer Engineering",
        marksType:"CGPA",
        marks:"9.43",
        yearHeading:"Year of Passing",
        year:"2023"
    },
    {
        educationHeading:"CBSE- XII",
        institutionHeading:"Name of School",
        institutionName:"DAV Public School,Pune",
        streamHeading:"Stream",
        streamType:"Science",
        marksType:"Percentage",
        marks:"86.4%",
        yearHeading:"Year of Passing",
        year:"2019"
    },
    {
        educationHeading:"CBSE- X",
        institutionHeading:"Name of School",
        institutionName:"DAV Public School,Pune",
        streamHeading:"Stream",
        streamType:"All subjects",
        marksType:"CGPA",
        marks:"10",
        yearHeading:"Year of Passing",
        year:"2017"
    }]
}

const achievements={
    achievementHeading:"Achievements",
    achievements:["Bagged second prize in 'VirtualStorm: Hackathon 1.0' organized by 'IIM Sirmaur' in the year 2022.","Bagged thrid prize in 'Datathon' sponsored by 'Bajaj Finserv' held at MITAOE in the year 2022."]
}

const project={
    projectHeading:"Projects",
    projects:[
        {
            projectName:"YouTube Recommendation System",
            skillHeading:"Skills",
            skills:["Machine Learning", "Python"],
            description:"Analyzing YouTube comments, number of likes, dislikes and total number of views and concluding whether is video is watchable or not."
        },
        {
            projectName:"Placement Preparation Portal",
            skillHeading:"Skills",
            skills:["Angular", "MySQL", "Node.js"],
            description:"Single platform for praticing both coding questions and aptitude questions so that student don't have to search for different sources for preparation."
        },
        {
            projectName:"Augmented Reality based App for Education",
            skillHeading:"Skills",
            skills:["Unity3D"],
            description:"AR based application designed for Marathi Alphabets for pre-primary sudents in rural India to make teaching-learning process more interactive and fun."
        }
    ]
}



const footer={
    footer:"Copyright @Sanika Pareek 2023"
}

export {header,banner,profileImage,profile,education,achievements,project,footer}
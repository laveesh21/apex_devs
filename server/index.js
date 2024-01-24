import express from "express";
import bodyParser from "body-parser";
import profileRoutes from "./routes/profile.js"
import communityRoutes from "./routes/community.js"


const app = express();
const port = 3000;

//Middleware to parse JSON in request
app.use(bodyParser.json())
app.use(express.json())

// Database
const profile = {
    apexUsers:[
        {
            apexId: "1",
            name: "Mern User",
            username: "noobuser",
            bio: "cse student learning mern stack",
            thread:[
                {
                    title:"I need help in game project made in C++",
                }
            ],
            project:[
                {
                    projectId: 1,
                    title: "Swiggy Clone",
                    description: "This is clone for swiggy app",
                    date: "22-01-2024",
                    time: "11:23",
                    rating: "88%",
                    img: [ "img1.jpg", "img2.jpg" ],
                    likes: "12",
                    dislikes: "4",
                    link: "url",
                    tags:["data"]
                },,
                {
                    projectId: 2,
                    title: "Genius Code Editor",
                    description: "A versatile code editor designed for developers",
                    date: "05-11-2022",
                    time: "18:12",
                    rating: "96%",
                    img: [ "img5.jpg", "img6.jpg" ],
                    likes: 150,
                    dislikes: 2,
                    link: "geniuscodeeditor.com",
                    tags:["ios"]
                }
            ]    
        },
        {
            apexId: "2",
            name: "Supercell",
            username: "oldsuperuser",
            bio: "cse student learning android games",
            thread:[
                {title:"I need someone to help in me in my android project",
                }
            ],
            project:[
                {
                    projectId: 1,
                    title: "Clash of Clans",
                    description: "A strategy game developed by supercell",
                    date: "20-09-2021",
                    time: "15:23",
                    rating: "98%",
                    img: [ "img1.jpg", "img2.jpg" ],
                    likes: 120,
                    dislikes: 3,
                    link: "coc.com",
                    tags:["web", "html", "css"]
                },
                {
                    projectId: 2,
                    title: "Binary Adventure",
                    description: "An action-packed adventure game with stunning graphics",
                    date: "12-05-2022",
                    time: "10:45",
                    rating: "94%",
                    img: [ "img3.jpg", "img4.jpg" ],
                    likes: 85,
                    dislikes: 5,
                    link: "binaryadventure.com",
                    tags:["android", "java"]
                }
            ]    
        }
    ]
}



// GET PROFILE
app.use("/", profileRoutes)

// COMMUNITY
app.use("/", communityRoutes );


// GET valid routes
app.get("/*", (req,res)=>{
    res.send("You are on wrong route. Select Valid route")
});


app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}/`);
});

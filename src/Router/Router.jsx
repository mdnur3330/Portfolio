import { createBrowserRouter } from "react-router";
import Root from "../Layoute/Root";
import AboutMe from "../Pages/Aboute";
import Skills from "../Pages/Skills";
import EducationJourney from "../Pages/Education";
// import Experience from "../Pages/Experience";
import Contact from "../Pages/Contact";
import Hero from "../Pages/Hero";
import Project from "../Pages/Project";
import PlantCare from "../MyProject/PlantCare";
import HistoricalArtifacts from "../MyProject/HistoricalArtifacts";

export const router = createBrowserRouter([
    {path:'/',
        element:<Root></Root>,
        children:[
            {index:true,
                element: <Hero></Hero>
            },
            {path: '/about',
                element: <AboutMe></AboutMe>
            },
            {path: '/skill',
                element: <Skills></Skills>
            },
            {path: '/education',
                element: <EducationJourney></EducationJourney>
            },
            // {path: '/Experience',
            //     element: <Experience></Experience>
            // },
            {path: '/about',
                element: <AboutMe></AboutMe>
            },
            {path: '/project',
                element: <Project></Project>,
                children: [
                    {
                        index: true,
                        element: <PlantCare></PlantCare>
                    },
                    {
                        path: 'historical-artifacts',
                        element: <HistoricalArtifacts></HistoricalArtifacts>
                    }
                ]
            },
            {path: '/contact',
                element: <Contact></Contact>
            }

         
        ]
    }
])
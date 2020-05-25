import React from 'react';
import { Container, Image } from 'semantic-ui-react'
import Title from '../title'
import { Timeline, TimelineEvent } from 'react-event-timeline'
import Aldi from '../image/aldi.jpg'
import MTSU from '../image/mtu.jpg'
import NSS from '../image/nash.png'
import AOS from '../image/aosmith.png'


export default function History(){
    const styleImg = {
        "borderRadius": "50%",
        "height": "60px"
    }
    const overrideImg ={
        "borderRadius": "50%",
        "height":"50px"
    }
    const styleCard = {
        "marginLeft":"15px"
    }
    return(
        <div id="#history">
            <Container>
                <Title name={"JOURNEY"} />
            </Container>
            <Container>
                <Timeline>
                    <TimelineEvent
                        title="Aldi, Hermitage, TN"
                        createdAt="February 2012 - March 2019"
                        icon={<Image style={styleImg} src={Aldi} size="big" circular />}
                        collapsible="true"
                        container='card'
                        style={styleCard}
                    >As a shift manager, I learned to much about managing different personalities all while maintaining an entire grocery store. During my time here, it taught me how to properly communicate with others, strengthen my customer service skills, time management, and multitask.</TimelineEvent>
                    <TimelineEvent
                        title = "Middle Tennessee State University B.S. in Computer Science"
                        createdAt="May 2015 - December 2017"
                        icon={<Image style={overrideImg} src={MTSU}
                        size="big" circular/>}
                        collapsible="true"
                        container='card'
                        style={styleCard}
                    >
            Calculus I, II, III • Computer Systems using the language C understanding major concepts in memory, processor, device, and information management as well as interrelationships between the operating system and the architecture of the computer system. • Web Technologies using HTML/CSS/JavaScript(ECMAScript 5) an intensive intro into current Web technologies including basic HTML, tools for Web page design, client-side methods, and server-side methods. • Algorithms & Data Structures using C++, topics include additional object-oriented programming techniques, algorithm design, analysis of algorithms, advanced tree structures, indexing techniques, internal and external sorting, graphs, and file organizations.
                    </TimelineEvent>
                    <TimelineEvent
                        title="Full Stack Web Development Bootcamp"
                        createdAt="February 2019 - August 2019"
                        icon={<Image style={overrideImg} src={NSS}
                        size="big" circular/>}
                        collapsible="true"
                        container='card'
                        style={styleCard}
                    >
                    Intensive 6 months full stack web development bootcamp building a proficiency in front end technologies such as HTML5, CSS3, JavaScript, React.js and back end technologies using object oriented C# and .NET and SQL database access. Gaining strong team development skills and using source controls such as GitHub through team based projects.
                    </TimelineEvent>
                    <TimelineEvent
                        title="Software Developer"
                        createdAt="August 2019 - current"
                        icon={<Image style={overrideImg} src={AOS}
                        size="big" circular/>}
                        collapsible="true"
                        container='card'
                        style={styleCard}
                    >
                        Assisted in the maintenance of company's main web portal using the .NET Framework. Contributed code through Azure DevOps and participating in a Agile-like environment. Sole developer of the training log application created for multiple teams using Blazor Server Side Framework. Collabrated with third-party team to change the UI aesthetic such as HTML, CSS and JavaScript, of sister company's web application.
                    </TimelineEvent>
                </Timeline>
            </Container>
        </div>
    )
}
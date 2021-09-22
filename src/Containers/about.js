import React from "react";
import { Container } from 'react-bootstrap';
import Scroller from '../Components/Scroller';
import { Jumbotron as Jumbo, Image} from "react-bootstrap";
import styled from 'styled-components';
import blackBackground from '../src_assets/IMG_0001.jpeg';


const Styles = styled.div`


.jumbo {
     background-size: cover;
     color: #000;
     position: relative;
     height: 180px;
     z-index: 9999;
     padding-bottom: 300px;
 }
 .jumbo1 {
    background-size: cover;
    color: #000;
    position: relative;
    height: 180px;
    
    z-index: 9999;
}
 
 .overlay {
     background-color: #000;
     opacity: 0.0;
     position: absolute;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     z-index: -2;
 }
 .pimg {
      float: left;
      border-radius: 50%!important;
      width: 200px;
      height: 220px;
      border-radius: 50%;
 }
 
 .row {
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      margin-right: 0px;
      margin-left: 0px;
}
`;

export const about = () => (
    <React.Fragment>
        <Styles>
            <Jumbo fluid className = "jumbo">
                <div className="overlay"></div>
                <Container fluid className="row">
                    <Image className="pimg" src="assets/prof_pic.png" fluid/>
               
               
   
                        <div className="rellax" data-rellax-speed="0">
                            <h2 align='bottom left'>Samuel would like you to know...</h2>   
                            <p align='center'></p>
                        </div>
                    <h6 align='center'> <br/></h6>
                </Container>
            </Jumbo>
            </Styles>
        
        
        <Container>
        <Jumbo className = "jumbo">
            <body class="c22"><p class="c10 c18"><span class="c14 c6 c19"></span></p><p class="c12"><span class="c17 c8 c6 c27"></span></p><p class="c12"><span class="c17 c25"><a class="c21" text-align = "center" href="mailto:samuelacourtney@gmail.com">email: samuelacourtney@gmail.com</a></span><span class="c17 c6">&nbsp;|</span><span class="c17">&nbsp;</span><span class="c17 c6">630.770.9601</span></p><p class="c2"><span class="c6 c15"></span></p><p class="c12"><span class="c7 c6">Education</span></p><p class="c10"><span class="c8 c6">The University of Alabama, </span><span class="c11 c6">Honors College &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; December 2020</span></p><p class="c10"><span class="c8 c6">Bachelor of Science in Electrical and Computer Engineering</span><span class="c6">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span class="c11 c6">GPA: 3.96/4.0, Presidents List</span></p><p class="c10"><span class="c6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p><p class="c12"><span class="c6 c7">Experience</span></p><p class="c10"><span class="c8 c6">United Airlines, Inc., </span><span class="c11 c6">Chicago, IL</span><span class="c8 c6">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span class="c11 c6">January 2021 - September 2021</span></p><p class="c10"><span class="c13 c11 c6">ECDLP Associate – Machine Learning Engineer</span></p><ul class="c0 lst-kix_list_1-0 start"><li class="c5 li-bullet-0"><span class="c4">Created the first AWS integrated gRPC API for United’s customer personalization engine in Python, Go.</span></li><li class="c5 li-bullet-0"><span class="c3">Front-end leader of a team that designed and created a POC solution for United’s Cargo Truck Docking. Created mock prototypes in Figma, developed front-end in React Native (JavaScript), HTML, CSS.</span></li></ul><p class="c10"><span class="c13 c11 c6">ECDLP Associate – IT Project Manager, Loyalty</span></p><ul class="c0 lst-kix_list_1-0"><li class="c5 li-bullet-0"><span class="c4">Overall Project Manager for the largest departmental AWS migration effort at United.</span></li><li class="c5 li-bullet-0"><span class="c3">Migrated 53 legacy applications and microservices working with ~30 cross-functional teams including but not limited to contractors, Cloud Engineering, NetOps, DevOps, Sr. Managers, Managing Directors, and Amazon with an overall implementation “United Best Practices” score of 96% for all application in our EKS cluster.</span></li><li class="c5 li-bullet-0"><span class="c4">Reworked an extensive project plan to meet goal driven AWS deliverables, enabling cross-functional collaboration</span></li><li class="c5 li-bullet-0"><span class="c4">Innovated</span><span class="c3">&nbsp;solutions to create efficient resource utilization infrastructure, decrease application time to production enabling methods such as CI/CD pipelines, automated code scans, etc. and producing a “Migration Checklist” for United to utilize.</span></li></ul><p class="c10 c18"><span class="c4"></span></p><p class="c10"><span class="c8 c6">United Airlines, Inc., </span><span class="c11 c6">Chicago, IL</span><span class="c8 c6">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span class="c11 c6">May 2019 - August 2019</span></p><p class="c10"><span class="c11 c6 c13">Intern – IT Project Manager</span></p><ul class="c0 lst-kix_list_1-0"><li class="c5 li-bullet-0"><span class="c4">Overall Project Manager for Employee and Enterprise Systems Texting Platform (ESTP).</span></li><li class="c5 li-bullet-0"><span class="c3">Proposed to management and influenced shareholders that United needed a better vehicle to drive communication to our 90,000+ employees and proposed a </span><span class="c4">multifaceted solution that was backed by employee informational data, current and future communication trends, and user acceptance. </span></li></ul><p class="c9"><span class="c4"></span></p><p class="c10"><span class="c8 c6">United Airlines, Inc., </span><span class="c11 c6">Chicago, IL</span><span class="c8 c6">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span class="c11 c6">August 2018 - December 2018</span></p><p class="c10"><span class="c13 c11 c6">Intern – Crew Scheduling Analyst</span></p><ul class="c0 lst-kix_list_1-0"><li class="c5 li-bullet-0"><span class="c4">Collaborated with IT to address current problems in CMS/CCS/uCrew and reported issues based on impact in&nbsp;TFS.</span></li><li class="c5 li-bullet-0"><span class="c4">Administrator of the Inflight Scheduling Operations ServiceNow Knowledgebase </span></li><li class="c5 li-bullet-0"><span class="c4">Conducted +150 tests within CMS and uCrew software to address system problems not in compliance with JCBA.</span></li><li class="c5 li-bullet-0"><span class="c4">Built approximately 200 Flight Attendant testing scenarios for analysts to test business software logic. </span></li><li class="c5 li-bullet-0"><span class="c4">Created a User Help Guide for one of United's Inflight Scheduling Software (uCrew).&nbsp;</span></li></ul><p class="c18 c26"><span class="c16 c8 c6"></span></p><p class="c10"><span class="c8 c6">GE Appliances, a Haier Company, </span><span class="c6 c11">Decatur, AL</span><span class="c8 c6">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span class="c11 c6">January 2018 - May 2018</span></p><p class="c10"><span class="c13 c11 c6">Intern – Information Technology</span></p><ul class="c0 lst-kix_list_1-0"><li class="c5 li-bullet-0"><span class="c4">Developed inventory application in C# for the IT Department that saved company an estimation of $50,000.</span></li><li class="c5 li-bullet-0"><span class="c4">Managed/Troubleshot problems with legacy systems in Java, C, C++, and Visual Basic.</span></li><li class="c5 li-bullet-0"><span class="c4">Created data information screens for Decatur’s plant in GE Proficy/Cimplicity.</span></li><li class="c5 li-bullet-0"><span class="c4">Utilized AWS for item data analytics and software development in plant wide systems.</span></li><li class="c5 li-bullet-0"><span class="c4">Improved genealogy process working with PLC’s to implement on item detection with scanners</span></li></ul><p class="c9"><span class="c4"></span></p><p class="c10"><span class="c8 c6">Job Cost Inc., </span><span class="c11 c6">Naperville, IL &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span><span class="c8 c6">&nbsp; &nbsp; &nbsp; &nbsp;</span><span class="c6">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span><span class="c11 c6">May 2017 - August 2017</span></p><p class="c10"><span class="c11 c6">Intern – Information Technology</span></p><ul class="c0 lst-kix_list_1-0"><li class="c5 li-bullet-0"><span class="c4">Implemented code in Java, C#, and Python that improved the functionality of the company’s accounting software.</span></li><li class="c5 li-bullet-0"><span class="c4">Discussed IT solutions with ≈ 20 clients and worked with sales to provide the customers with company product. </span></li><li class="c5 li-bullet-0"><span class="c4">Upgraded client’s cloud storage systems, DHCP Servers, and provided knowledge with server configurations </span></li></ul><p class="c9"><span class="c4"></span></p><p class="c12"><span class="c7 c6">Skills</span></p><p class="c10"><span class="c16 c8 c6">Methodology</span></p><p class="c10"><span class="c4">Project Management Life Cycle (PMLC, SDLC), Agile, JIRA, Confluence, Traditional Waterfall, AD-HOC</span></p><p class="c10"><span class="c16 c8 c6">Coding</span></p><p class="c10"><span class="c6">Git, HTML5, CSS, REST APIs, gRPC, </span><span>JavaScript,</span><span class="c6">&nbsp;C, C++, C#, Python, React Native, Bootstrap, Go, Visual Basic, UNIX/Linux</span></p><p class="c10"><span class="c16 c8 c6">Database</span></p><p class="c10"><span class="c4">Database Administration, AWS, Microsoft Access, SQL, mySQL</span></p><p class="c10"><span class="c16 c8 c6">Hardware</span></p><p class="c10"><span class="c4">PLC’s, Routers and Switches, Vision Systems, VOIP Phones, Cisco Routers, Hardware Troubleshooting, OPC Servers, IPv4, IPv6, DNS, DHCP</span></p><p class="c10"><span class="c16 c8 c6">Microsoft</span></p><p class="c10"><span class="c4">Windows Server (2012, 2016), Active Directory, Microsoft Cloud Services, Back-up Management, Microsoft Office, Microsoft PowerPoint, Microsoft Visio</span></p><p class="c10"><span class="c16 c8 c6">Software</span></p><p class="c10"><span class="c6">CCS, uCrew, CMS (COSMOS), TFS, GE Proficy/Cimplicity, Solidworks/AutoCAD, Mac OSX, Quartus Prime II, Pspice Circuit Analysis, Multisym, Figma, inVision</span></p><p class="c23"><span class="c6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p><p class="c24"><span class="c7 c6">Volunteer Work</span></p><p class="c10"><span class="c6 c8">YoungLife Christian Leadership Group,</span><span class="c11 c6">&nbsp;Volunteer</span></p><ul class="c0 lst-kix_list_1-0"><li class="c5 li-bullet-0"><span class="c4">Assisted with infrastructure improvements to curriculum</span></li><li class="c5 li-bullet-0"><span class="c4">Helped lead worship team and provided mentorship to kids ranging from 5</span><span class="c1">th</span><span class="c4">&nbsp;grade – 8</span><span class="c1">th</span><span class="c4">&nbsp;grade</span></li></ul><p class="c26 c18"><span class="c4"></span></p><p class="c24"><span class="c7 c6">Hobbies &amp; Interests</span></p><ul class="c0 lst-kix_list_1-0"><li class="c5 li-bullet-0"><span class="c4">Music Creation (Including different audio software such as Ableton Live and Logic Pro X), Chess, Rock Climbing, Tennis, Ping-Pong, Golf, Coding, Arduino Projects, Video Gaming, Pop culture, Equal Activist, Flying, Quantum Physics, Day Trading</span></li></ul><p class="c24 c18"><span class="c7 c6"></span></p><p class="c26 c18"><span class="c4"></span></p></body>
    </Jumbo>
    </Container>
    
    <Scroller>
    </Scroller>
    {/*
        <div className="rellax">
        I’m that default chill speed of "-2"
    </div>
    <div className="rellax" data-rellax-speed="7">
        I’m super fast!! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam libero nulla, volutpat lacinia orci eget, commodo hendrerit urna. Vestibulum interdum, elit finibus interdum posuere, ligula libero tincidunt mauris, quis lacinia magna nibh ut augue. Suspendisse feugiat accumsan lorem et interdum. Pellentesque at tempor diam, ac imperdiet lacus. Praesent libero massa, accumsan ut est ut, tincidunt molestie magna. Ut condimentum justo id fermentum vehicula. Aenean aliquam pharetra tortor, et pulvinar erat. Fusce ullamcorper vestibulum metus ac faucibus. Pellentesque pharetra varius nulla sed molestie. Pellentesque vulputate turpis ut libero luctus porta. Maecenas ultricies non nisl id vulputate. Suspendisse non volutpat tortor, sed venenatis augue. Suspendisse tincidunt hendrerit quam id consectetur.
    </div>
    <div className="rellax" data-rellax-speed="-4">
        I’m extra slow and smooth
    </div>*/}
    </React.Fragment>
)
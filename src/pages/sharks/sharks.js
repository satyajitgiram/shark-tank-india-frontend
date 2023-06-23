import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './sharks.scss'
import aman from '../../images/sharks/aman.jpeg'
import anupam from '../../images/sharks/anupam.jpeg'
import ashneer from '../../images/sharks/ashneer.jpeg'
import ghazal from '../../images/sharks/ghazal.jpeg'
import namita from '../../images/sharks/namita.jpeg'
import peyush from '../../images/sharks/peyush.jpeg'
import vineeta from '../../images/sharks/vineeta.jpeg'


const BASE_URL = 'https://satyajitzecdata.pythonanywhere.com';

const TeamMember = ({ id, profile_picture, name, profession }) => {

  const getImageUrl = (name) => {
    const newname = name.split(" ")[0].toLowerCase(); 
    console.log(newname)
    switch (newname) {
      case 'aman':
        return aman;
      case 'anupam':
        return anupam;
      case 'ashneer':
        return ashneer;
      case 'ghazal':
        return ghazal;
      case 'namita':
        return namita;
      case 'peyush':
        return peyush;
      case 'vineeta':
        return vineeta;
      default:
        return null;
    }
  };

  return (
    <div className="single_advisor_profile wow fadeInUp">
      {/* <h5>{profile_picture}</h5> */}
      <div className="advisor_thumb">
      <Link to={{
              pathname: `/shark/${id}`,
              state: { profession }
            }}
          >
        <img src={ getImageUrl(name)} alt={name}  style={{width:'100%'}}/>
      </Link>
      </div>
      <div className="single_advisor_details_info">
        <h6> <Link to={{
              pathname: `/shark/${id}`,
              state: { profession }
            }}
          >{name}</Link> </h6>
        <p className="designation">{profession}</p>
      </div>
    </div>
  );
};

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/sharks/`)
      .then(response => response.json())
      .then(data => setTeamData(data));
  }, []);

  if (!teamData) {
    return <h2 clasName="text-center">Loading...</h2>;
  }

  return (
    <div className="container" style={{color:'#000'}}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-lg-6">
          <div
            className="section_heading text-center wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <h3>Sharks Team</h3>
            <p>Shark Tank India is an Indian Hindi-language business reality television series that airs on Sony Entertainment Television.
            </p>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="row">
        {teamData.map((member, index) => (
          <div key={index} className="col-12 col-sm-6 col-lg-3">
            <TeamMember {...member} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Sharks = () => {
  return <Team />;
};

export default Sharks;































// import './sharks.css'
// import React from 'react';

// const TeamMember = ({ imgSrc, name, designation }) => {
  
//   return (
//     <div className="single_advisor_profile wow fadeInUp">
//       <div className="advisor_thumb">
//         <img src={imgSrc} alt="" />
//         <div className="social-info">
//           <a href="#">
//             <i className="fa fa-facebook"></i>
//           </a>
//           <a href="#">
//             <i className="fa fa-twitter"></i>
//           </a>
//           <a href="#">
//             <i className="fa fa-linkedin"></i>
//           </a>
//         </div>
//       </div>
//       <div className="single_advisor_details_info">
//         <h6>{name}</h6>
//         <p className="designation">{designation}</p>
//       </div>
//     </div>
//   );
// };

// const Team = ({ teamData }) => {
//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-12 col-sm-8 col-lg-6">
//           <div
//             className="section_heading text-center wow fadeInUp"
//             data-wow-delay="0.2s"
//           >
//             <h3>{teamData.heading}</h3>
//             <p>{teamData.subHeading}</p>
//             <div className="line"></div>
//           </div>
//         </div>
//       </div>
//       <div className="row">
//         {teamData.members.map((member, index) => (
//           <div
//             key={index}
//             className="col-12 col-sm-6 col-lg-3"
//           >
//             <TeamMember {...member} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const jsonData = {
//   heading: 'Our Creative Team',
//   subHeading: 'Appland is completely creative, lightweight, clean & super responsive app landing page.',
//   members: [
//     {
//       imgSrc: 'https://bootdey.com/img/Content/avatar/avatar1.png',
//       name: 'Samantha Sarah',
//       designation: 'Founder & CEO',
//     },
//     {
//       imgSrc: 'https://bootdey.com/img/Content/avatar/avatar7.png',
//       name: 'Nazrul Islam',
//       designation: 'UI Designer',
//     },
//     {
//       imgSrc: 'https://bootdey.com/img/Content/avatar/avatar6.png',
//       name: 'Riyadh Khan',
//       designation: 'Developer',
//     },
//     {
//       imgSrc: 'https://bootdey.com/img/Content/avatar/avatar2.png',
//       name: 'Niloy Islam',
//       designation: 'Marketing Manager',
//     },
//   ],
// };

// const Sharks = () => {
//   return <Team teamData={jsonData} />;
// };

// export default Sharks;


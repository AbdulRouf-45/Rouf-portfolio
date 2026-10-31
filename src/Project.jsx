import './css/project.css';
import bookTravelLogo from './assets/project-booktravel.png';
import bookitngoLogo from './assets/project-bookitngo.png';
import blueskyportLogo from './assets/project-blueskyport.png';
import danatLogo from './assets/project-danat.png';
import magicfaresLogo from './assets/project-magicfares.png';

const projects = [
    { name: 'Book Travel', logo: bookTravelLogo },
    { name: 'Bookit N Go', logo: bookitngoLogo },
    { name: 'BlueSkyPort', logo: blueskyportLogo },
    { name: 'Danat', logo: danatLogo },
    { name: 'Magic Fares', logo: magicfaresLogo },
];

function Project() {
    return (
        <div id="projects" className="project-section">
            <h3 className="section-title">Real-Time Projects</h3>
            <p className="project-description">
                Live web applications I’ve built and contributed to as a frontend developer.
            </p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card" title={project.name}>
                        <img
                            src={project.logo}
                            alt={`${project.name} Logo`}
                            className="project-logo"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
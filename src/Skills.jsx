import './css/skills.css';
import htmlIcon from './assets/html.png';
import cssIcon from './assets/css.png';
import scssIcon from './assets/scss.png';
import jsIcon from './assets/javascript.png';
import reactIcon from './assets/react.png';

const skills = [
    { name: 'HTML', icon: htmlIcon },
    { name: 'CSS', icon: cssIcon },
    { name: 'SCSS', icon: scssIcon },
    { name: 'JS', icon: jsIcon },
    { name: 'REACT JS', icon: reactIcon },
];

function Skills() {
    return (
        <div id="skills" className="skills-section">
            <h3 className="section-title">Tech stack</h3>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-icon-wrapper">
                            <img
                                src={skill.icon}
                                alt={`${skill.name} Logo`}
                                className="skill-icon"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
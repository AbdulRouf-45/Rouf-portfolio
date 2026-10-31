import './css/achivements.css';
import award2024Img from './assets/2024.png';
import award2025Img from './assets/2025.png';

const achievementsData = [
    {
        tag: 'Award',
        title: 'Rising Star of the Year',
        description: 'Honoured with the Rising Star of the Year award.',
        year: '2024',
        image: award2024Img,
        iconType: 'star'
    },
    {
        tag: 'Award',
        title: 'Late Night Hero of the Year',
        description: 'Recognised with the Late Night Hero of the Year award.',
        year: '2025',
        image: award2025Img,
        iconType: 'moon'
    }
];

function AchiveMents() {
    return (
        <div id="achievements" className="achivement-section">
            <span id="achivements"></span>
            <h3 className="section-title">Achievements</h3>
            <div className="achievements-grid">
                {achievementsData.map((item, index) => (
                    <div
                        key={index}
                        className={`achievement-card sheen-card reveal ${index === 0 ? 'delay-1' : 'delay-2'}`}
                    >
                        {/* Visual Image container with Award tag and Star/Moon corner UX */}
                        <div className="achievement-visual">
                            <span className="achievement-badge">{item.tag}</span>

                            {/* Corner UX element for Star & Moon */}
                            <div className="achievement-corner-ux" title={item.iconType === 'star' ? 'Rising Star' : 'Late Night Hero'}>
                                {item.iconType === 'star' ? (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="achievement-corner-icon star-twinkle">
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="achievement-corner-icon moon-glow">
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                        <path d="M18 2v4m-2-2h4" strokeWidth="1.6" />
                                        <path d="M20 8v2m-1-1h2" strokeWidth="1.4" />
                                    </svg>
                                )}
                            </div>

                            {/* Award photo */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="achievement-img"
                                loading="lazy"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="achievement-content">
                            <h4 className="achievement-title">{item.title}</h4>
                            <p className="achievement-desc">{item.description}</p>
                            <span className="achievement-year">{item.year}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AchiveMents;
import React from 'react'

const Location = () => {
    return (
        <div className="location_wrapper">

            <iframe 
            title="Event Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13864.416224129094!2d-95.4060682!3d29.6877627!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1603de53b8fd6a29!2sNRG%20Center!5e0!3m2!1sen!2sus!4v1595296293520!5m2!1sen!2sus" 
            width="100%" 
            height="500" 
            frameBorder="0" 
            allowFullScreen="" 
            aria-hidden="false" 
            tabindex="0"></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    )
}

export default Location

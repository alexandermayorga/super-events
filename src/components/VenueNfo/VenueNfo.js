import React from 'react'
import Zoom from 'react-reveal/Zoom';

import iconCalendar from 'resources/images/icons/calendar.png'
import iconLocation from 'resources/images/icons/location.png'

const VenueNfo = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">

                    <Zoom duration={500} delay={500}>

                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div className="vn_icon"
                                        style={{
                                            background: `url(${iconCalendar})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                        Event Date & Time
                                    </div>
                                    <div className="vn_desc">
                                        August 7, 2017 @ 10pm
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>
                                    <div className="vn_icon"
                                        style={{
                                            background: `url(${iconLocation})`
                                        }}
                                    ></div>
                                    <div className="vn_title">
                                        Location
                                    </div>
                                    <div className="vn_desc">
                                        123 Street Dr, Houston TX, 77001 
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Zoom>

                </div>
            </div>
             
        </div>
    )
}

export default VenueNfo

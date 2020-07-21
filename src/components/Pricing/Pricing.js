import React from 'react'
import MyButton from 'components/utils/MyButton'
import {Zoom} from 'react-reveal'

const data = [
    {
        price: 100,
        position: "Balcony",
        desc: "Yer affesi anni. Fini hazi? Fini hazi? Shekh ma shieraki anni. Anha dothrak chek asshekh. Jin ave sekke verven anni m'orvikoon. Jalan atthirari anni. Yer affesi anni. Ezas eshna gech ahilee!",
        linkto: "#",
        delay: 350
    },
    {
        price: 150,
        position: "General",
        desc: "Yer zheanae sekke. Nevakhi vekha ha maan: Rekke, m'aresakea norethi fitte. Shekh ma shieraki anni. Yer zheanae sekke. Yer zheanae sekke. Shekh ma shieraki anni. Anha dothrak chek asshekh.",
        linkto: "#",
        delay: 0
    },
    {
        price: 300,
        position: "Platinum",
        desc: "Sikudi nopazmi! Vilibazmosa iderenni emilun. Bantis zobrie issa se ossyngnoti ledys. Zyhys perzys stepagon Aeksio Ono jorepi, se morghultas lys qelitsos sikagon. Avy jorraelan.",
        linkto: "#",
        delay: 500
    }
]

const Pricing = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper pricing_section">
                
                <h2>Pricing</h2>

                <div className="pricing_wrapper">
                    {
                        data.map(box => {
                            return (
                                <Zoom key={box.position} delay={box.delay}>
                                    <div className="pricing_item">
                                        <div className="pricing_inner_wrapper">
                                            <div className="pricing_title">
                                                <span>${box.price}</span>
                                                <span>{box.position}</span>
                                            </div>
                                            <div className="pricing_description">
                                                {box.desc}
                                            </div>
                                            <div className="pricing_buttons">
                                                <MyButton
                                                    link={box.linkto}
                                                    bgColor="#ffa800"
                                                    color="#FFF"
                                                    text="Purchase"  
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Zoom>
                            )
                        })
                    }    
                </div>

            </div>
        </div>
    )
}

export default Pricing

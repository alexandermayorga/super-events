import React, { Component } from 'react'
import {Fade, Slide} from 'react-reveal';
import MyButton from 'components/utils/MyButton';

export default class Discount extends Component {
    state = {
        discountStart: 0,
        discountEnd: 30
    }

    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd ){
            const discountStart = this.state.discountStart;
            this.setState({
                discountStart: discountStart+1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(() => {
            this.percentage()
        }, 30);
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    
                    <Fade
                        onReveal={this.percentage}
                    >
                        <div className="discount_percentage">
                            <span>{this.state.discountStart}%</span>
                            <span>Off</span>
                        </div>
                    </Fade>
                    
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase Tickets before 20th June</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Fames ac turpis egestas maecenas pharetra. 
                            </p>
                            <MyButton
                                bgColor="#ffa800"
                                color="#fff"
                                text="Purchase Tickets"
                                link="#"
                            />
                        </div>
                    </Slide>

                </div>
            </div>
        )
    }
}

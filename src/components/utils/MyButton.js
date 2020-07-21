import React from 'react'
import {Button} from '@material-ui/core'

import TicketIcon from 'resources/images/icons/ticket.png'

const MyButton = (props) => {
    return (
        <Button
            variant="contained"
            href={props.link}
            size="small"
            style={{
                backgroundColor: props.bgColor,
                color: props.color
            }}
        >
            <img 
                src={TicketIcon} 
                alt={`${props.text} - Button Icon`}
                className="iconImage"
            />
            {props.text}
        </Button>
    )
}

export default MyButton

import React from 'react'
import {
    Drawer,
    List,
    ListItem
} from "@material-ui/core"
import {scroller} from "react-scroll"

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element,{
            duration: 1000,
            delay: 75,
            smooth: true,
            offset: -100, // Scrolls to element + 50 pixels down the page
        })
        props.onClose(false)
    } 


    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={ () => props.onClose(false) }
        >
            <List component="nav">
                <ListItem button onClick={() => scrollToElement('Featured')}>
                    Event Starts in
                </ListItem>
                <ListItem button onClick={() => scrollToElement('VenueNfo')}>
                    Venue NFO
                </ListItem>
                <ListItem button onClick={() => scrollToElement('Highlights')}>
                    Highlights
                </ListItem>
                <ListItem button onClick={() => scrollToElement('Pricing')}>
                    Pricing
                </ListItem>
                <ListItem button onClick={() => scrollToElement('Location')}>
                    Location
                </ListItem>
            </List>
        </Drawer>
    )
}

export default SideDrawer

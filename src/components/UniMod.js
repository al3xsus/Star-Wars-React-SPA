import React from 'react';
import {Modal} from "semantic-ui-react";


export const UniMod = (props) => {

    let items = [];

    if (props.data) for (let [key, value] of Object.entries(props.data)) {
        if (key !== 'created' && key !== 'edited') {
            items.push(<p key={key}>{key}: <strong>{Array.isArray(value) ? <span style={{"backgroundColor": "yellow"}}>Under Construction</span> : value}</strong></p>)
        }
    }

    return <Modal open={props.show} onClose={props.onClose} size={"large"} closeIcon>
        <Modal.Header>
            {props.data ? props.data.name ? props.data.name :  props.data.title : null}
        </Modal.Header>
        <Modal.Content>
            {items}
        </Modal.Content>
    </Modal>
};

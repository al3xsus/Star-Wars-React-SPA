import React from 'react';
import {Button, Label, Modal} from "semantic-ui-react";


export const UniMod = (props) => {

    const returnArrayOfLabels = (arrayOfData) => {
        return arrayOfData.map((arr, i) => {
            return <Label key={`label-${i}`}>{arr}</Label>
        })
    };

    let items = [];

    if (props.data) for (let [key, value] of Object.entries(props.data)) {
        if (key !== 'created' && key !== 'edited' && key !== 'fullyLoaded') {
            if (Array.isArray(value)) items.push(<div
                key={key}>{key}: <Label.Group>{returnArrayOfLabels(value)}</Label.Group></div>);
            else items.push(<div key={key}>{key}: <strong>{value}</strong></div>)
        }
    }

    return <Modal open={props.show} onClose={props.onClose} size={"large"}>
        <Modal.Header>
            {
                props.data ? props.data.name ? props.data.name : props.data.title : null
            }
        </Modal.Header>
        <Modal.Content>
            <Button
                floated={'right'}
                basic={true}
                icon={props.data ? props.data.fullyLoaded ? 'check' : 'sync' : null}
                disabled={props.data ? props.data.fullyLoaded : false}
                onClick={props.loadAllData}
                color={props.data ? props.data.fullyLoaded ? 'green' : 'blue' : null}
            />
            {items}
        </Modal.Content>
    </Modal>
};

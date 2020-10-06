import React from 'react'

export default function Checkbox(props) {
    const item = props.item;
    const toggleTask = props.onChange;
    return (
        <label>
            <input type="checkbox" checked={item.done} onChange={(e) => {toggleTask(e, item.key)}}></input> 
        </label>
    )
}

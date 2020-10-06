import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';
import Checkbox from './Checkbox';

export default function ChecklistTasks(props) {
    const items = props.list;
    const removeTask = props.removeTask;
    const toggleTask = props.toggleTask;
    const updateTask = props.updateTask;
    const handleTaskDisplay = (item) => {
        return ((item.done)
                    ?<span className="noselect">{item.title}</span>
                    :<input type="text" value={item.title} onChange={(e) => {updateTask(e, item.key)}} />)
    }

    const listItems = items.map(item => {
        return <div className="list-item">
                    <div className="container">
                        <p>
                            <Checkbox item={item} onChange={toggleTask} />
                            {handleTaskDisplay(item)}
                            <FontAwesomeIcon className="icon" icon="trash" onClick={() => {removeTask(item.key)}} />
                        </p>
                    </div>
                </div>
    });

    return (
        <div>
            <FlipMove duration={300} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    )
}

import React from 'react'

import RemoveIcon from 'react-icons/lib/md/remove'

const RemovableItem = ({children, onRemove}) => (
    <div className="removableItem-container" >
        <div>
            {children}
        </div>
        <div className="removableItem-deleteButton" onClick={onRemove} >
            <RemoveIcon className="deleteIcon" />
        </div>
    </div>
)

export default RemovableItem
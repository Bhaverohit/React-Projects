import React, { useState } from 'react'
import data from './data'
import "./Accordian.css"

const Accordian = () => {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([])

    const handleSingleSelection = (getCurrentID) => {
        setSelected(getCurrentID === selected ? null : getCurrentID)
    }

    const handleMultipleSelection = (getCurrentID) => {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentID = copyMultiple.indexOf(getCurrentID)

        if (findIndexOfCurrentID === -1) {
            copyMultiple.push(getCurrentID)
        } else {
            copyMultiple.splice(findIndexOfCurrentID, 1)
        }
        setMultiple(copyMultiple)
    }

    return (
        <div className='wrapper'>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
            <div className='accordian'>
                {
                    data && data.length > 0 ?
                        data.map(dataItem => <div className='item'>
                            <div onClick={
                                enableMultiSelection
                                    ? () => handleMultipleSelection(dataItem.id)
                                    : () => handleSingleSelection(dataItem.id)
                            } className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1
                                    && <div className='content'>{dataItem.answer}</div>
                                    : selected === dataItem.id && <div className='content'>{dataItem.answer}</div>
                            }
                        </div>)
                        : <div>No data found! </div>
                }
            </div>
        </div >
    )
}

export default Accordian

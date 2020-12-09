import React, {useState, useEffect, useRef} from 'react'
import '../App.css';

function Dropdown({ label, options, selected, onSelectedChange }) {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current && ref.current.contains(event.target)){
                return;
            }
            setOpen(false)
        }

        document.body.addEventListener('click', onBodyClick)
        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, []); //only runs once

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value){
            return null;
        }
        return (
            <div 
              key={option.value} 
              className="item"
              onClick={() => {onSelectedChange(option)}}
              >
                {option.label}
            </div>
        )
    })

    console.log("REF.CURRENT", ref.current)

    //open dropdown conditionally if clicked. State -> Set classNames below.
    return (
        <div className="dropDownComponent">
            <div ref={ref} className="ui form">
                <div className="field">
    <label className="label">{label}</label>
                    <div
                    //Event Bubbling invokes all onClicks in parent elements. Toggling the 
                    //menu open and closed on select.
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                    >
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>
                            {renderedOptions}
                        </div>
                    </div>
                </div>
            </div>
            <h2 style={{color: `${selected.value}`}}>This text is {selected.label}</h2>
        </div>
    )
}

export default Dropdown

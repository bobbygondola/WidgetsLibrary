import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert'

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Albanian',
        value: 'sq'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Armenian',
        value: 'hy'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Bengali',
        value: 'bn'
    },
    {
        label: 'Bulgarian',
        value: 'bg'
    },
    {
        label: 'Chinese (Simplified)',
        value: 'zh'
    },
    {
        label: 'Chinese (Traditional)',
        value: 'zh-TW'
    },
    {
        label: 'Czech',
        value: 'cs'
    },
    {
        label: 'Danish',
        value: 'da'
    },
    {
        label: 'Finnish',
        value: 'fi '
    },
    {
        label: 'German',
        value: 'de'
    },
    {
        label: 'Greek',
        value: 'el'
    },
    {
        label: 'Japanese',
        value: 'ja'
    },
    {
        label: 'Russian',
        value: 'ru'
    }
]

// const url = "https://translation.googleapis.com/language/translate/v2"
// const apiKey = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"

function Translate() {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label style={{color: 'white'}}>Enter Text</label>
                        <input 
                        value={text}
                        onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown 
              label="Select a Language"
              selected={language} 
              onSelectedChange={setLanguage} 
              options={options}
            />
            <hr />
            <h3 className="ui header" style={{color: 'white'}}>Output</h3>
            <Convert language={language} text={text} />
        </div>
    )
}

export default Translate

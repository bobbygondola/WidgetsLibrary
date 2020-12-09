import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Convert({language, text}) {
    const [translated, setTranslated] = useState('')
    const [debouncedText, setDebouncedText] = useState(text)

    //set debounced text with setTimeout and a cleanup on each keystroke to reset it
    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)
        }, 500)

        return () => {
            clearTimeout(timerId)
        }
    }, [text])

    //call to the API using debounced text
    useEffect(() => {
        const doTranslation = async () => {
            const res = await axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
            params: {
                q: debouncedText,
                target: language.value,
                key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
            }
        })
        setTranslated(res.data.data.translations[0].translatedText)
        }
        doTranslation();
    }, [language, debouncedText])

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
}

export default Convert

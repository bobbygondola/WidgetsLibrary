import React from 'react'

//The purpose of creating a Link component and passing the nav values,
// is to stop the page from reloading and reloading all the html files
//  and javascript files, too many network requests.

function Link({className, href, children}) {
    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        event.preventDefault();
        window.history.pushState({}, '', href)

        // TLDR, this communicates over to Route compnents that URL has just changed.
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent)
    }

    return (
    <a onClick={onClick}
    className={className}
    href={href}>
    {children}
    </a>
    )
}

export default Link

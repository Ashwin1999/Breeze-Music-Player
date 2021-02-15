import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMusic} from '@fortawesome/free-solid-svg-icons';

const Nav = ({libraryStatus, setLibraryStatus}) => {
    return (
        <nav>
            <h1 className="unselectable">Breeze</h1>
            <button onClick={()=>{setLibraryStatus(!libraryStatus)}} className="unselectable">
                Library
                <FontAwesomeIcon className="toggler" icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav

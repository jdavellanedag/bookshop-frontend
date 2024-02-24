import React, {useContext, useState} from 'react';
import {LibraryContext} from "../context/LibraryContext";

export const Facet = ({facet}) => {

    const {setActiveFacet, activeFacet} = useContext(LibraryContext);
    const [isChecked, setIsChecked] = useState(false)
    const handleOnChange = () => {
        if (!isChecked) {
            setIsChecked(true)
            setActiveFacet(facet)
        } else {
            setIsChecked(false);
            setActiveFacet({})
        }
    }

    let disabled = false;
    if (activeFacet.languaje) {
        disabled = activeFacet.languaje !== facet.languaje;
    }

    return (
        <div className="book-catalogue_facets-item">
            <label>
                <input type="checkbox" checked={isChecked} name={facet.languaje} onChange={handleOnChange} disabled={disabled}/>
                {`${facet.languaje} (${facet.value})`}
            </label>
        </div>
    );
};
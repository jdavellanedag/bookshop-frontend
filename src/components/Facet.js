import React, {useContext, useState} from 'react';
import {LibraryContext} from "../context/LibraryContext";

export const Facet = ({facet}) => {

    const {setActiveFacet} = useContext(LibraryContext);
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

    return (
        <div className="book-catalogue_facets-item">
            <label>
                <input type="checkbox" checked={isChecked} name={facet.languaje} onChange={handleOnChange}/>
                {`${facet.languaje} (${facet.value})`}
            </label>
        </div>
    );
};
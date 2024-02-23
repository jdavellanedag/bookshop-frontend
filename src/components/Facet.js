import React, {useContext, useState} from 'react';
import {LibraryContext} from "../context/LibraryContext";

export const Facet = ({facet}) => {

    const {updateFacets} = useContext(LibraryContext);
    const [checked, setChecked] = useState(false)
    const handleOnChange = (value) => {
        updateFacets(value);
        setChecked(!checked);
    }

    return (
        <div className="book-catalogue_facets-item">
            <label>
                <input type="checkbox" checked={checked} name={facet.key} onChange={() => handleOnChange(facet)}/>
                {`${facet.key} (${facet.count})`}
            </label>
        </div>
    );
};
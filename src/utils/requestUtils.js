const ENDPOINT = "http://localhost:8762/ms-library-books";

const getFacetesRequest = {
    "targetMethod": "GET",
    "queryParams": {
        "aggregate": [true]
    }
}

const hardcodedFacets = {
    "books": [],
    "aggs": [
        {
            "key": "Castellano",
            "count": 55,
            "uri": "idioma=Castellano"
        },
        {
            "key": "Inglés",
            "count": 12,
            "uri": "idioma=Inglés"
        },
        {
            "key": "Francés",
            "count": 8,
            "uri": "idioma=Francés"
        }
    ]
}

export const getFacets = async () => {
    //const response = await fetch(`${ENDPOINT}/books`, {
    //    method: 'POST',
    //    headers: {'Content-Type': 'application/json'},
    //    body: JSON.stringify(getFacetesRequest)
    //})
    //const data = await response.json();
    const data = hardcodedFacets;

    return data.aggs;
}

export const getBooks = async (search, filter) => {
    const baseRequest =  {
        "targetMethod": "GET",
        "queryParams": {
            "search": [],
            "idioma": []
        }
    }
    console.log(filter);
    if (search) {
        baseRequest.queryParams.search.push(search);
    }
    if (filter) {
        baseRequest.queryParams.idioma.push(filter.key);
    }

    const response = await fetch(`${ENDPOINT}/books`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(baseRequest)
    })
    const data = await response.json();
    return data.books;
}
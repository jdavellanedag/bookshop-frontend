const ENDPOINT = process.env.REACT_APP_GATEWAY_URL;
const gatewayOptions = (body) => {
    return {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }
}

export const fetchAllBooks = async () => {
    try {
        const body = {
            httpMethod: "GET",
                queryParams: {
                aggregate: ["true"]
            }
        }
        const response = await fetch(`${ENDPOINT}/books/api/v1/books`, gatewayOptions(body));
        const data = await response.json();
        const books = data.books.map( rawBook => extractDataFromResponse(rawBook)).filter(book => book.available === true);
        const aggs = data.aggretorDetails;
        return {books, aggs};
    } catch (error) {
        console.log(error);
    }
}
export const fetchBooks  = async (search, filter) => {
    try {
        const body = buildQueryRequest(search)

        const response = await fetch(`${ENDPOINT}/books/api/v1/books`, gatewayOptions(body));
        const data = await response.json();
        const books = data.books.map( rawBook => extractDataFromResponse(rawBook)).filter(book => book.available === true);
        const aggs = data.aggretorDetails;
        return {books, aggs};
    } catch (error) {
        console.log(error);
    }
}

const buildQueryRequest = (search, filter) => {
    let baseRequest = {
            httpMethod: "GET",
            queryParams: {
                aggregate: ["true"]
        }
    }
    if (search) {
        baseRequest.queryParams.search = [search]
    }
    return baseRequest;
}

export const rentABook = async (bookId) => {
    try {
        const body = {
            httpMethod: "POST",
            body: {
                booksID: [bookId]
            }
        }
        const response = await fetch(`${ENDPOINT}/books/api/v1/books/requests`, gatewayOptions(body));
    } catch (error) {
        console.log(error);
    }
}

export const returnABook = async (bookId) => {
    try {
        const bodyQueryRequests = {
            httpMethod: "GET",
        }
        const responseRequests = await fetch(`${ENDPOINT}/requests/api/v1/requests`, gatewayOptions(bodyQueryRequests));
        const requestData = await responseRequests.json();
        const requestId = requestData.find( request => request.booksID.find( ids => bookId));

        const body = {
            httpMethod: "DELETE",
        }
        const response = await fetch(`${ENDPOINT}/requests/api/v1/requests/${requestId.id}`, gatewayOptions(body));
    } catch (error) {
        console.log(error);
    }
}


const extractDataFromResponse = (rawBook) => {
    return {
        id: rawBook.bookId,
        name: rawBook.bookName.bookName,
        isbn: rawBook.isbn.isbn,
        image: rawBook.image.url,
        author: rawBook.author.author,
        releaseYear: rawBook.releaseYear.releaseYear,
        rate: rawBook.rate.rate,
        language: rawBook.language.language,
        available: rawBook.available.available
    }
}
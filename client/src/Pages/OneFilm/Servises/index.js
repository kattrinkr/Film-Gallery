async function ratingFetch(event, context) {
    await fetch(`https://film-library.herokuapp.com/films-library/rating/${context.id}`, 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }, 
        body: JSON.stringify({
            rating: event.target.value
        })
    })
    return {
        isRatingPut:  true
    }
}

async function sendCommentFetch(context) {
    await fetch(`https://film-library.herokuapp.com/films-library/comment/${context.id}`, 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }, 
        body: JSON.stringify({
            comment: context.newComment,
            newComment: ''
        })
    })
    return {
        isCommentPut:  true,
        newComment: ''
    }
}

export {ratingFetch, sendCommentFetch}
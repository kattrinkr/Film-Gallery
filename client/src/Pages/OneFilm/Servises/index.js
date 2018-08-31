async function ratingFetch(event, context) {
    const response = await fetch(`/films-library/rating/${context.state.id}`, 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }, 
        body: JSON.stringify({
            rating: event.target.value
    })})
    return {
        isRatingPut:  true
    }
}

async function sendCommentFetch(context) {
    const response = await fetch(`/films-library/comment/${context.state.id}`, 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }, 
        body: JSON.stringify({
            comment: context.state.newComment
    })})
    return {
        isCommentPut:  true
    }
}

export {ratingFetch, sendCommentFetch}
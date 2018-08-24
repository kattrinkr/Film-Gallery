function setData (payload) {
    return {
        type: 'SET_DATA',
        ...payload
    }
}

export {setData}
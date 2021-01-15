export const fetchCards = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CARDS'})
    fetch('https://interactive-portfolio-api.herokuapp.com/cards')
    .then(resp => {
      return resp.json()
    }).then(data => {
      dispatch({ type: 'SHOW_CARDS', cards: data })
    })
  }
}

export const deleteCard = (id) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CARDS'})
    fetch(`https://interactive-portfolio-api.herokuapp.com/cards/${id}`,{
      method:"DELETE"
    })
    .then(resp => {
      return resp.json()
    }).then(data => {
      dispatch({ type: 'SHOW_CARDS', cards: data })
    })
  }
}

export const updateCard = (id, params) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CARDS'})
    fetch(`https://interactive-portfolio-api.herokuapp.com/cards/${id}`,{
      method:"PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(
        params
      )
    })
    .then(resp => {
      return resp.json()
    }).then(data => {
      dispatch({ type: 'SHOW_CARDS', cards: data })
    })
  }
}
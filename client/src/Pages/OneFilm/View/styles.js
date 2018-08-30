const Styles = theme => ({
    dashboard: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center'
    },

    category: {
        textAlign: 'center',
        width: '10%'
    },

    categorySelect: {
        width: '100%'
    },

    rating: {
        textAlign: 'center',
        width: '10%'
    },

    title: {
        textAlign: 'center',
        width: '10%'
    },

    titleSearch: {
        width: '100%' 
    },

    library: {
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },

    film: {
        width: '50%',
        borderBottom: 'solid black 2px',
        textAlign: 'center'
    },

    avatar: {
        width: '30%',
        height: '20%'
    }
  });
  
  export default Styles;
import background from '../../Films/View/images/filmsBackground.jpg'

const Styles = theme => ({
    name: {
        fontSize: '24px'
    },

    dashboard: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },

    film: {
        textAlign: 'center',
        width: '60%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)'
    },

    title: {
        fontSize: '30px',
        color: '#033753'
    },

    p: {
        fontSize: '20px'
    },

    avatar: {
        width: '30%'
    },

    definition: {
        fontSize: '16px',
        width: '60%',
        marginBottom: '20px'
    },

    library: {
        width: '100%',
        background: `url(${background}) repeat-y center fixed`,
        backgroundSize: '100% 100%',
        minHeight: '1000px'
    },

    logout: {
        width: '100px',
        fontSize: '24px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeft: 'solid rgba(252, 252, 252, 0.7) 2px',
        borderRight: 'solid rgba(252, 252, 252, 0.7) 2px',
        '&:hover' : {
            backgroundColor: 'rgba(217, 217, 217, 0.7)'
        }
    },

    back: {
        width: '100px',
        marginTop: '20px',
        marginBottom: '20px'
    },

    rating: {
        width: '60%',
        borderTop: 'solid rgba(3, 55, 83, 0.76) 1px',
        borderBottom: 'solid rgba(3, 55, 83, 0.76) 1px'
    },

    ratingButtons: {
        marginBottom: '20px'
    },

    gallery: {
        width: '60%',
        borderBottom: 'solid rgba(3, 55, 83, 0.76) 1px'
    },

    comment: {
        textAlign: 'left',
        borderBottom: 'solid rgba(3, 55, 83, 0.76) 1px'
    }

  });
  
  export default Styles;
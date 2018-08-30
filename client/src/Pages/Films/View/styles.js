import background from './images/filmsBackground.jpg'

const Styles = theme => ({
    name: {
        fontSize: '24px'
    },

    dashboard: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },

    category: {
        textAlign: 'center',
        width: '15%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '18px', 
        fontWeight: 'bold',
        color: '#21089F'
    },

    categorySelect: {
        width: '70%',
        height: '36px'
    },

    rating: {
        textAlign: 'center',
        width: '15%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '18px', 
        fontWeight: 'bold',
        color: '#21089F'
    },

    title: {
        textAlign: 'center',
        width: '15%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '18px', 
        fontWeight: 'bold',
        color: '#21089F'
    },

    titleSearch: {
        width: '70%'
    },

    library: {
        width: '60%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.7)'
    },

    film: {
        width: '50%',
        borderBottom: 'solid rgba(4, 75, 113, 0.49) 1px',
        textAlign: 'center'
    },

    filmName: {
        fontSize: '30px',
        color: '#033753'
    },

    p: {
        fontSize: '20px'
    },

    avatar: {
        width: '30%',
        height: '20%'
    },

    definition: {
        fontSize: '12px',
        width: '100px',
        marginBottom: '20px'
    },

    gallery: {
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
        borderLeft: 'solid white 1px',
        borderRight: 'solid white 1px',
        '&:hover' : {
            backgroundColor: 'rgba(217, 217, 217, 0.7)'
        }
    }
  });
  
  export default Styles;
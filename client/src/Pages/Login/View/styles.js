import background from './images/loginBackground.jpg'

const Styles = theme => ({
    h1: {
        color: '#172781',
        fontSize: '45px',
        textAlign: 'center'
    },

    form: {
        width: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'static',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: '30px'
    },

    button: {
        marginTop: '20px',
        width: '110px'
    },

    p: {
        fontSize: '18px'
    },

    login: {
        width: '100%',
        height: '1000px',
        background: `url(${background}) no-repeat center fixed`,
        backgroundSize: '100% 100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
  })
  
  export default Styles;
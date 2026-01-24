import './styles/login.scss'

function App() {
  return (
    <>
      <div className='container'>
        <div className='header'>
          <div className='logo'></div>
          <h1>TrackFit</h1>
          <p>Suivez vos performances sportives</p>
        </div>
        <div className='main'>
          <input type="text" placeholder='Email'/>
          <input type="password" placeholder='Mot de passe'/>
          <div className='lost-password'>
            <a href="">Mot de passe oublié ?</a>
          </div>
          <button>Se connecter</button>
        </div>
        <div className='footer'>
          <p>Pas encore de compte ?</p>
          <a href="">S'inscrire</a>
        </div>
      </div>
    </>
  )
}

export default App

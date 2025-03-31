import Places from './components/Places.jsx'
import logoImg from './assets/logo.png'

export default function App() {

  return (
    <>
      <header>
        <img src={logoImg} alt="" />
        <h1>Hiking routes around the world!</h1>
        <p>Create your personal collection of hiking places you would like to visit or you have visited.</p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          places
          fallbackText="Select the places you would like to visit below."
          onSelectPlace
          isLoading
          loadingText='Fetching your places...'
        />
      </main>
    </>
  );
}

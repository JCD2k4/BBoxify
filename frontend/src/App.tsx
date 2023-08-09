import Upload from "./components/Upload"


interface AppProps{

}

function App({}: AppProps){
  return (

    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <Upload />
        </div>
      </div>
    </div>
  )
}

export default App

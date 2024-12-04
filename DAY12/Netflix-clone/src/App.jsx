import MovieList from "./MovieList";

const App = () => {
  return (
    <div>
      <h1 style={{textAlign: 'center' ,backgroundColor : "black", fontSize : "3.1rem" , color : "white" , padding : "0.3rem 0" , fontFamily: 'cursive'}}>Netflix Clone</h1>
      <MovieList />
    </div>
  )
};

export default App;

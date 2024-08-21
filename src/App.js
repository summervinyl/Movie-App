import Movie from './components/Movie';
import { dummy } from './movieDummy';

function App() {
  return (
    <div>
      <div className='app-container'>
        {
          dummy.results.map(ele => {
            return (
              <Movie
                title={ele.title}
                poster_path={ele.poster_path}
                vote_average={ele.vote_average}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

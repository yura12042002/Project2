import { useNewJoke } from "../castomHooks/useNewJoke";
import "./style.css";

function Joke() {
  const [joke, loading, newJoke] = useNewJoke();
  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <div className="main">
        <p>{joke?.setup}</p>
        <p>{joke?.punchline}</p>
        <button onClick={newJoke}>Получить шутку</button>
      </div>
    </div>
  );
}

export default Joke;

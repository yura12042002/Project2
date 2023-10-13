import { useState } from "react";
import axios from "axios";

export const useNewJoke = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  async function newJoke() {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_joke"
      );
      setJoke({
        setup: response.data.setup,
        punchline: response.data.punchline,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }
  return [joke, loading, newJoke];
};

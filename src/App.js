import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h2 style={{ marginBottom: "30px" }}>Birthday Reminder</h2>
        <h3>{people.length} Birthday Today</h3>
        <List people={people} />

        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;

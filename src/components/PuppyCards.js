import React, {useState} from 'react';
import { PageHeader } from "./Header";
import { PageFooter } from "./Footer";
import { NavBar } from "./navbar";

export function PagePuppyCards({ puppyData }) {

  // search
  const [search, setSearch] = useState('');
  console.log(search);

  // filtered searched puppy data
  const filteredPuppiesData = puppyData.filter((item) => {
    if (search.toLowerCase() === '') {
      return item;
    } else {
      return (item.name + ' ' + item.breed).toLowerCase().includes(search.toLowerCase());
    }
  });

  // render cards with filtered data
  const singlePuppyCard = filteredPuppiesData.map((puppy) => {
    return (
      <section key={puppy.id} className="puppy-card">
        <img src={puppy.image} alt={puppy.name + '-' +  puppy.breed + "puppy img"} />
        <h1>{puppy.name}</h1>
        <p className="dog-breed">{puppy.breed}</p>
      </section>
    )
  })

  return (
    <body>
      < NavBar />
      <PageHeader />
      <main>
        {/* search filter */}
        <section id="search-container">
          <input type="text" id="search-input" onChange={(e) => setSearch(e.target.value)} placeholder="Search a puppy through name or breed ..."  />
          <button id="search-button">Search</button>
        </section>
        {/* card display area  - render each card */}
        <section id="puppy-card-container">
          {singlePuppyCard}
        </section>
      </main>
      <PageFooter />
    </body>
  )
}
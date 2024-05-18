import React from "react";
import { PageHeader } from "./Header";
import { PageFooter } from "./Footer";

export function PagePuppyCards({ puppyData }) {

  console.log(puppyData[0]);

  const puppy = puppyData.map((puppy) => {
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
      <PageHeader />
      <main>
        {/* search filter */}
        <section id="search-container">
          <input type="text" id="search-input" placeholder="Search a dog breed..." />
          <button id="search-button">Search</button>
        </section>
        {/* card display area  - display each card */}
        <section id="puppy-card-container">
          {puppy}
        </section>
      </main>
      <PageFooter />
    </body>
  )
}
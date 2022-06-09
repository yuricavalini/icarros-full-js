import JokerImg from '../../img/joker.png';

let Card = `
      <article class="card">
        <figure>
          <img class="image" src="${JokerImg}" alt="">
        </figure>
        <div class="card-info">
          <h1 class="card-title">Joker</h1>
          <div class="card-movie__type">
            <span class="movie__type">crime</span>
            <span class="movie__type">drama</span>
            <span class="movie__type">thriller</span>
          </div>
          <div class="card-movie__workers">
            <p>Director: <span>Todd Phillips</span></p>
            <p>Writes: <span>Todd Phillips(Screenplay)...</span></p>
            <p>Stars: <span>Joaquin Phoenix,Zazie...</span></p>
          </div>
          <p class="card-movie__release">Release Date: 4 October 2019(UK)</p>
          <button class="rent-btn">Rent here!</button>
        </div>
      </article>
    `;
export default Card;

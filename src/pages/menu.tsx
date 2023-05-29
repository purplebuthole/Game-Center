import { Component } from "solid-js";
import styles from "../css/main.module.css";

const Menu: Component = () => {
  return (
    <div class={styles.App}>
      <div class={styles.row}>
        <div class="card w-96 bg-base-300 shadow-xl hover:scale-105 transition duration-200 ease-in-out">
          <figure class="px-10 pt-10">
            <img
              src="src/ico/motherload.jpeg"
              width="300px"
              height="180px"
              alt="logo"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Motherload</h2>
            <p>
              Mining Game, You Explore the deep cave and mine to make money and
              upgrade your mining equipment.
            </p>
            <div class="card-actions justify-end">
              <a href="/motherload">
                <button
                  id="wait"
                  class="btn btn-primary hover:btn-success duration-300 ease-in-out"
                >
                  Play Now
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-300 shadow-xl hover:scale-105 transition duration-200 ease-in-out">
          <figure class="px-10 pt-10">
            <img
              src="src/ico/learntofly2.jpg"
              width="300px"
              height="180px"
              alt="logo"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Learn How to Fly 2</h2>
            <p>
              A Peguin Game, where You have to break a ice cap to win the game,
              but to do this will need to upgrade Your Items.
            </p>
            <div class="card-actions justify-end">
              <a href="/learn2">
                <button
                  id="wait1"
                  class="btn btn-primary hover:btn-success duration-300 ease-in-out"
                >
                  Play Now
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-300 shadow-xl hover:scale-105 transition duration-200 ease-in-out">
          <figure class="px-10 pt-10">
            <img
              src="src/ico/learn.png"
              width="300px"
              height="180px"
              alt="logo"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Learn how to fly</h2>
            <p>
              A Peguin Trying to provide wrong that Peguin can't fly.You make
              upgrade to reach the end and complete the game
            </p>
            <div class="card-actions justify-end">
              <a href="/learn">
                <button
                  id="wait"
                  class="btn btn-primary hover:btn-success duration-300 ease-in-out"
                >
                  Play Now
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-300 shadow-xl hover:scale-105 transition duration-200 ease-in-out">
          <figure class="px-10 pt-10">
            <img
              src="src/ico/1v1.jpeg"
              width="300px"
              height="180px"
              alt="logo"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">1v1.lol</h2>
            <p>
              A FPS, and building game which you build to defeat the other
              oppented and player started off with shotgun,ar,sniper, and pixace
            </p>
            <div class="card-actions justify-end">
              <a href="/1v1">
                <button
                  id="wait"
                  class="btn btn-primary hover:btn-success duration-300 ease-in-out"
                >
                  Play Now
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-300 shadow-xl hover:scale-105 transition duration-200 ease-in-out">
          <figure class="px-10 pt-10">
            <img
              src="src/ico/fancy.webp"
              width="200px"
              height="180px"
              alt="logo"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Fancy pants</h2>
            <p>
              A game where your a stick charater and try to make to the end of
              the level without dieing and fight monstor and do parkour to get
              the end of the level
            </p>
            <div class="card-actions justify-end">
              <a href="/fancy">
                <button
                  id="wait"
                  class="btn btn-primary hover:btn-success duration-300 ease-in-out"
                >
                  Play Now
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-300 shadow-xl hover:scale-105 transition duration-200 ease-in-out">
          <figure class="px-10 pt-10">
            <img
              src="src/ico/gunn.png"
              width="300px"
              height="180px"
              alt="logo"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Gun Mayhem 2</h2>
            <p>
              A game where you shoot off your oppentent with abilites or weapon
              in your arsenal this is also a co-op game
            </p>
            <div class="card-actions justify-end">
              <a href="/Mayhem">
                <button
                  id="wait"
                  class="btn btn-primary hover:btn-success duration-300 ease-in-out"
                >
                  Play Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

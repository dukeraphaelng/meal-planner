import Search from "./models/Search";

/**
 *  Global State of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */

const state = {};

const searchesController = async () => {
  // Get query from view
  const query = "pizza";

  if (query) {
    // New search object, add search object to state
    state.search = new Search(query);

    // Loading spinner & Prepare UI for result

    // Search for recipes
    await state.search.getResults();

    // Render results on UI
    console.log(state.search.result);
  }
};

document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault();
  searchesController();
});

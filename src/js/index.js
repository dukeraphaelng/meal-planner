import Search from "./models/Search";
import * as searchesView from "./views/searchesView";
import { elements } from "./views/base";

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
  const query = searchesView.getInput();

  if (query) {
    // New search object, add search object to state
    state.search = new Search(query);

    // Loading spinner & Prepare UI for result
    searchesView.clearInput();
    searchesView.clearOutput();

    // Search for recipes
    await state.search.getResults();

    // Render results on UI
    searchesView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchesController();
});

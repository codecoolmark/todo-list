const endpoints = {
  notesLists: "http://localhost:8080/lists"
};

function fetchNoteLists(signal) {
  return fetch(endpoints.notesLists, { signal: signal }).then(response => response.json());
}

export default {
  fetchNoteLists,
};
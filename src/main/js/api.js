const endpoints = {
  notesLists: "http://localhost:8080/lists",
  noteList: "http://localhost:8080/lists/:noteListId"
};

function fetchNoteLists(signal) {
  return fetch(endpoints.notesLists, { signal: signal })
      .then(response => response?.json());
}

function fetchNoteList(signal, noteListId) {
  return fetch(endpoints.noteList.replace(":noteListId", noteListId), { signal: signal })
      .then(response => response?.json());
}

export default {
  fetchNoteLists,
  fetchNoteList
};
'use strict';

const noteful = (function () {

  const folderSelect = generateFolderSelect(store.folders);
  $('.js-note-folder-entry').html(folderSelect);

  function generateFolderSelect(list = []) {
    const notes = list.map(item => `<option value="${item.id}">${item.name}</option>`);
    return '<option value="">Select Folder:</option>' + notes.join('');
  }


  function handleFolderClick() {
    $('.js-folders-list').on('click', '.js-folder-link', event => {
      event.preventDefault();
    


      const folderId = getFolderIdFromElement(event.currentTarget);
      store.currentQuery.folderId = folderId;


      
      if (folderId !== store.currentNote.folderId) {
        store.currentNote = {};
      }
    
      api.search('/api/notes', store.currentQuery)
        .then(response => {
          store.notes = response;
          render();
        })
        .catch(handleErrors);
    });
  }
    
  function bindEventListeners() {
    handleNoteItemClick();
    handleNoteSearchSubmit();
  }
  // This object contains the only exposed methods from this module:
  return {
    render: render,
    bindEventListeners: bindEventListeners,
  };
}());
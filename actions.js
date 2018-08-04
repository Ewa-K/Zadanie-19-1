import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(text) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

function removeComment(text) {
    return {
        type: REMOVE_COMMENT,
        id
    }
}

function thumupComment(text) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        votes
    }
}

function thumbdownComment(text) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        votes
    }
}

const boundAddComment = text => dispatch(addComment(text));
const boundRemoveComment = text => dispatch(removeComment(text));
const boundEditComment = text => dispatch(editComment(text));
const boundThumupComment = text => dispatch(thumupComment(text));
const boundThumbdownComment = text => dispatch(thumbdownComment(text));


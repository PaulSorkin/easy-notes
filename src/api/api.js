import axios from "axios";
import {useSelector} from "react-redux";
import {store} from "../redux/store/store";

const instance = axios.create({
    baseURL: "https://test-api.misaka.net.ru/api/"
});

export const accountAPI = {
    register(username, email, password) {
        return instance.post("Account/register", {username, email, password})
    },

    login(username, password) {
        return instance.post("Account/login", {username, password})
    },

    refreshToken(refreshToken) {
        return instance.post("Account/refresh-token", {refreshToken})
    },

    user() {
        return instance.get("Account/user")
    }
}

export const foldersAPI = {
    getFolders() {
        return instance.get("Folders")
    },

    makeFolder(name, color) {
        return instance.post("Folders", {name, color})
    },

    getFolder(folderId) {
        return instance.get(`Folders/${folderId}`)
    },

    pushFolderInfo(folderId, name, color) {
        return instance.put(`Folders/${folderId}`, {name, color})
    },

    deleteFolder(folderId) {
        return instance.delete(`Folders/${folderId}`)
    },

    getNotes(folderId) {
        return instance.get(`Folders/${folderId}/notes`)
    },

    makeNote(folderId, title, content, color) {
        return instance.post(`Folders/${folderId}/notes`, {title, content, color})
    }
}

export const notesAPI = {
    getNote(noteId) {
        return instance.get(`Notes/${noteId}`)
    },

    editNote(noteId, title, content, color) {
        return instance.put(`Notes/${noteId}`, {title, content, color})
    },

    deleteNote(noteId) {
        return instance.delete(`Notes/${noteId}`)
    },

    moveNote(noteId, folderId) {
        return instance.post(`Notes/${noteId}/move-to/${folderId}`)
    }
}
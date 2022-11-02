import axios from "axios";
import {store} from "../redux/store/store";
import {getAccessToken} from "../redux/auth-actionCreators";


const instance = axios.create({
    baseURL: "https://test-api.misaka.net.ru/api/",
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

    async user() {
        const accessToken = await store.dispatch(getAccessToken())
        return instance.get("Account/user", {headers: {Authorization: `Bearer ${accessToken}`}})
    },

    logout() {},
}

export const foldersAPI = {
    async getFolders() {
        const accessToken = await store.dispatch(getAccessToken())
        return instance.get("Folders", {headers: {Authorization: `Bearer ${accessToken}`}})
    },

    async makeFolder(name, color) {
        const accessToken = await store.dispatch(getAccessToken())
        return instance.post("Folders", {name, color}, {headers: {Authorization: `Bearer ${accessToken}`}})
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
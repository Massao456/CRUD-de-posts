import { randomUUID } from "crypto";

type Post = {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
};

let posts: Post[] = [];

export function listPosts() {
    return posts;
}

export function getPost(id: string) {
    return posts.find((p) => p.id === id);
}

export function createPost(title: string, content: string) {
    const newPost: Post = {
        id: randomUUID(),
        title,
        content,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    posts.push(newPost);
    return newPost;
}

export function updatePost(id: string, title: string, content: string) {
    const index = posts.findIndex((p) => p.id === id);
    if (index === -1) return null;
    posts[index] = { id, title, content, createdAt: posts[index].createdAt, updatedAt: new Date() };
    return posts[index];
}

export function deletePost(id: string) {
    const before = posts.length;
    posts = posts.filter((p) => p.id !== id);
    return posts.length < before;
}
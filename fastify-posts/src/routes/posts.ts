import { FastifyInstance } from "fastify";
import {
    listPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
} from "../controllers/postControllers.js";

export default async function postRoutes(fastify: FastifyInstance) {
    
    fastify.get("/", async (request, reply) => {
        return listPosts();
    });
    fastify.get("/:id", async (request, reply) => {
        const { id } = request.params as { id: string };
        const post = getPost(id);
        if (!post) {
            return reply.status(404).send({ error: "Post não encontrado" });
        }
        return post;
        });
        fastify.post("/", async (request, reply) => {
            const { title, content } = request.body as {
                title: string;
                content: string;
            };
            const newPost = createPost(title, content);
            reply.status(201).send(newPost);
            });
            fastify.put("/:id", async (request, reply) => {
                const { id } = request.params as { id: string };
                const { title, content } = request.body as {
                    title: string;
                    content: string;
                };
                const updated = updatePost(id, title, content);
                if (!updated) {
                    return reply.status(404).send({ error: "Post não encontrado" });
                }
                return updated;
                });
            
                fastify.delete("/:id", async (request, reply) => {
                const { id } = request.params as { id: string };
                const deleted = deletePost(id);
                if (!deleted) {
                    return reply.status(404).send({ error: "Post não encontrado" });
                }
                reply.status(204).send();
                });
            }
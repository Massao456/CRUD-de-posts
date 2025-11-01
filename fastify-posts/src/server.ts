import Fastify from "fastify";
import postRoutes from "./routes/posts.js";

const app = Fastify({
    logger: true,
});

app.register(postRoutes, { prefix: "/posts" });

app.listen({ port: 3000 }, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    console.log(`🚀 Servidor rodando em ${address}`);
});
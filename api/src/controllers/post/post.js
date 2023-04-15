const { Post } = require("../../db");

const getAllPosts = async () => {
    try {
        const allPosts = await Post.findAll();
        if (allPosts.length > 0) {
            return allPosts;
        } else {
            throw new Error("Aun no hay posts");
        }
        
    } catch (error) {
        return {error: error.message}
    }
};

const getOnePost = async (id) => {
    try {
        const onePost = await Post.findByPk(id);
        if (onePost) {
            return onePost;
        } else {
            throw new Error("Post no encontrado");
        }
        
    } catch (error) {
        return {error: error.message}
    }
};

const postPost =  async (post) => {
    try {
        const {date, content, active} = post;
        if (!date || !content) {
            throw new Error('Faltan datos');
        }
        const postObj = {
            date: date,
            content: content,
            active: active
        }
        const postAdd = await Post.create(postObj);

        return postAdd;

    } catch (error) {
        return {error: error.message}
    }
}

const putOnePost =  async (post) => {
    try {
        const {id, date, content, active} = post;
        const postId = await Post.findByPk(id);
        if (!postId){
            throw new Error ("No se encontro el post")
        }
        if (date) {
            await Post.update({date}, {where: {id: id}})
        }
        if (content) {
            await Post.update({content}, {where: {id: id}})
        }
        if (active) {
            await Post.update({active}, {where: {id: id}})
        }
        return "Post actualizado"
    } catch (error) {
        return {error: error.message}
    }
}

const delOnePost = async (id) => {
    try {
        const delOnePost = await Post.findByPk(id);
        if (delOnePost) {
            await Post.update({active: false},{ where: { id: id } })
            return "Post eliminado";
        } else {
            throw new Error("Post no existe");
        }
        
    } catch (error) {
        return {error: error.message}
    }
};

module.exports = {getAllPosts, getOnePost, postPost, putOnePost, delOnePost};
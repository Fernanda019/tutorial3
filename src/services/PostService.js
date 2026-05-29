import Parse from "../parse";

export const getPosts = async () => {
  const Post = Parse.Object.extend("Post");
  const query = new Parse.Query(Post);
  return await query.find();
};

export const getPost = async (id) => {
  const Post = Parse.Object.extend("Post");
  const query = new Parse.Query(Post);
  return await query.get(id);
};

export const createPost = async (data) => {
  const Post = Parse.Object.extend("Post");
  const post = new Post();

  post.set("title", data.title);
  post.set("body", data.body);

  return await post.save();
};

export const updatePost = async (id, data) => {
  const Post = Parse.Object.extend("Post");
  const post = await new Parse.Query(Post).get(id);

  post.set("title", data.title);
  post.set("body", data.body);

  return await post.save();
};

export const deletePost = async (id) => {
  const Post = Parse.Object.extend("Post");
  const post = await new Parse.Query(Post).get(id);

  return await post.destroy();
};
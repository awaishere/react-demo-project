export default {
    signIn: () => `/login/`,
    signUp: () => `/signup/`,
    getArticles: () => `/articles/`,
    getArticle: id => `/articles/${id}`,
    deleteArticle: id => `/articles/${id}`,
    editArticle: id => `/articles/${id}`,
    createArticle: () => `/articles/`,
}
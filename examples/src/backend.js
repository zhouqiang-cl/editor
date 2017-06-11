import { doPost,doGet } from "./extend"

export function createArticle(title, content, parentid="1") {
    let article = {}
    article.title =  title
    article.content = content
    article.parentid = parentid
    doPost("http://localhost:8000/api/v1/articles",article)
}
export function getArticle(articleid) {
    return doGet("http://localhost:8000/api/v1/articles/" + articleid)
}

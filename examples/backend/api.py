import json
import tornado.web
import editor


global_editor = editor.Editor()


class Articles(tornado.web.RequestHandler):

    def get(self,page_id):
        if not page_id:
            raise Exception("Page Not Found")
        self.finish(global_editor.get_page(page_id))

    def post(self):
        data = json.loads(self.get_argument("data"))
        page_id = global_editor.save(data["title"], json.loads(
            data["content"]), data["parentid"])
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Method", "*")
        ret = {
            "page_id": page_id,
            "url":"/api/v1/articles/" + page_id
        }
        self.finish(json.dumps(ret))

import settings
import tornado.ioloop
import tornado.httpserver
from urls import dispatch_pattern

def start():
    args = {
            "debug": True,
            "static_path": "./axeplatform/pages",
            "compress_response":True
    }
    app = tornado.web.Application(dispatch_pattern, **args)
    http_server = tornado.httpserver.HTTPServer(app)
    http_server.listen(settings.SERVE_PORT)
    tornado.ioloop.IOLoop.instance().start()


if __name__ == "__main__":
    start()

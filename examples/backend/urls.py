import api
dispatch_pattern = [
    (r"/api/v1/articles$", api.Articles),
    (r"/api/v1/articles/([0-9a-zA-Z\-].+)$", api.Articles)
]
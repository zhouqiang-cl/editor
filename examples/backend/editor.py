# -*- coding: utf-8 -*-
import json
import uuid
import time
import utils
import os
import settings
# import GitPython


class DbModel(object):

    def __init__(self):
        pass

    def store_index(self, page_id, title, dirname, create_time, author):
        pass

    def update_index(self, page_id, title):
        pass

    def get_index(self):
        return "abc"


class PageModel(object):

    def __init__(self):
        pass

    def store_page(self, page_id, content):
        commit = "No description"
        if isinstance(content, dict):
            commit = content["addon"]["title"]
            content = json.dumps(content)
        with open(settings.STORE_PATH + '/' + page_id, 'w') as f:
            f.write(content)
        self.commit(settings.STORE_PATH + '/' + page_id, commit)

    def commit(self, path, commit):
        cmd = u"git add {path} && git commit -m '{commit}' {path}".format(
            path=path, commit=commit)

    def get_page(self,page_id):
        with open(settings.STORE_PATH + '/' + page_id,'r') as f:
            return f.read()

class Editor(DbModel, PageModel):

    def __init__(self):
        DbModel.__init__(self)
        PageModel.__init__(self)
        if not os.path.exists(settings.STORE_PATH):
            os.mkdirs(settings.STORE_PATH)

    def save(self, title, content, parentid=None, author=None):
        page_id = str(uuid.uuid4())
        create_time = int(time.time())
        content["addon"] = {
            "page_id": page_id,
            "title": title,
            "parentid": parentid
        }
        self.store_index(page_id, title, parentid, create_time, author)
        self.store_page(page_id, content)
        self._constract_index_file()
        return page_id

    def update(self, title, content, page_id):
        self.update_index(page_id, title)
        self._constract_index_file()

    def get(self, page_id):
        return self.get_page(page_id)

    def delete(self, page_id):
        self.del_page(page_id)

    def _constract_index_file(self):
        self.store_page("index", self.get_index())

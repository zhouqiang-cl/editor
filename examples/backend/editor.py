import uuid
import time
import GitPython


class Editor(DbModel, GitModel):

    def __init__(self):
        pass

    def save(self, title, content, dirname=None, author=None):
        page_id = str(uuid.uuid4())
        create_time = int(time.time())
        self.store_index(page_id,title,dirname, create_time, author)
        self.store_file(page_id,content)
        self._constract_index_file()

    def update(self, title, content, page_id):
        self.update_index(page_id,title)
        self._constract_index_file()

    def get(self,page_id):
        self.get_page(page_id)

    def delete(self, page_id):
        self.del_page(page_id)

    def _constract_index_file():
        self.store_file("index",self.get_index())

class DbModel(object):
    def __init__(self):
        pass
    def store_index(self,page_id,title,dirname,create_time):
        pass
    def update_index(self,page_id,title):
        pass
    def get_index(self):
        pass

class GitModel(object):
    def __init__(self):
        pass
    def store_file(self):
        pass
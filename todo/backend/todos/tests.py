from django.test import TestCase
from .models import Todo

# Create your tests here.
class TestNullity(TestCase):

    def test_title(self):
        self.assertIsNone(Todo.title)
    def test_description(self):
        self.assertIsNone(Todo.description)

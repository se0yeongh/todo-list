from rest_framework import generics
from .models import Todo
from .serializers import TodoSerializer

# 할 일 목록을 보고(GET), 새로운 일을 추가(POST)하는 뷰
class TodoListCreate(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

# 특정 할 일을 수정(PUT/PATCH)하거나 삭제(DELETE)하는 뷰
class TodoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
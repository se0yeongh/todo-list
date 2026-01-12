from django.db import models

# Create your models here.
class Todo(models.Model):
    title = models.CharField(max_length=100) # 할 일 제목
    completed = models.BooleanField(default=False) # 완료 여부
    created_at = models.DateTimeField(auto_now_add=True) # 생성 시각

    def __str__(self):
        return self.title
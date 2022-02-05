from django.db import models

# Create your models here.
class Portfolio(models.Model): 
    portfolio_image = models.ImageField(upload_to='portfolio')

    def str(self):
        return str(self.id)

class Contact(models.Model):
    
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=50)
    subject = models.CharField(max_length=200)
    message = models.TextField()

    def str(self):
        return str(self.id)
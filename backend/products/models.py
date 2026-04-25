from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    brand = models.CharField(max_length=100)
    collection = models.CharField(max_length=100, blank=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    movement_type = models.CharField(max_length=100)
    case_material = models.CharField(max_length=100)
    strap_material = models.CharField(max_length=100)
    dial_color = models.CharField(max_length=100)
    water_resistance = models.CharField(max_length=50)
    case_size = models.CharField(max_length=50)
    power_reserve = models.CharField(max_length=50)
    stock = models.IntegerField(default=0)
    images = models.JSONField(default=list, help_text="List of image URLs")
    featured = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name

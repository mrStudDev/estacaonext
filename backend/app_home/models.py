from django.db import models
from django.utils.text import slugify

class TagSiteModel(models.Model):
    name = models.CharField(max_length=250)
    description = models.CharField(max_length=160)
    slug = models.SlugField()

    def __str__(self):
        return self.name

class HomeSite(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    site_description = models.TextField()
    meta_title = models.CharField(max_length=60, default="Default Meta Title")
    meta_description = models.TextField(max_length=320)
    founder = models.CharField(max_length=100)
    keyword = models.CharField(max_length=255)
    tags = models.ManyToManyField('TagSiteModel', blank=True)
    date_created = models.DateField(auto_now_add=True)
    is_published = models.BooleanField(default=True)
    old_url = models.SlugField(blank=True, null=True)
    slug = models.SlugField(blank=True, unique=True)
    views = models.IntegerField(default=0)
    indexable = models.BooleanField(default=True)

    def __str__(self):
        return self.title
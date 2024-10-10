from django.contrib import admin
from .models import TagSiteModel, HomeSite

@admin.register(TagSiteModel)
class TagSiteModelAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    search_fields = ('name', 'slug')

@admin.register(HomeSite)
class HomeSiteAdmin(admin.ModelAdmin):
    list_display = ('title', 'founder', 'date_created', 'is_published')
    search_fields = ('title', 'founder', 'meta_title', 'meta_description')
    list_filter = ('is_published', 'date_created')
    prepopulated_fields = {"slug": ("title",)}  # Preenche o slug automaticamente com base no título

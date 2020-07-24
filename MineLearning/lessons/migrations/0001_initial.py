# Generated by Django 3.0.8 on 2020-07-24 15:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('courses', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Lesson',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(unique=True)),
                ('title', models.CharField(blank=True, max_length=120, null=True)),
                ('preview', models.TextField(blank=True, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('poster', models.ImageField(blank=True, null=True, upload_to='lesson/')),
                ('release_date', models.DateField(auto_now_add=True)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='lessons', related_query_name='lesson', to='courses.Course')),
            ],
        ),
    ]

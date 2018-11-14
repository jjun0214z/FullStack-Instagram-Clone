from django.urls import path
from . import views

app_name = "images"
urlpatterns = [
    path("", view=views.Feed.as_view(), name="feed"),
    path("<int:like_id>/like/", view=views.LikeImage.as_view(), name="like_image"),
    path("<int:like_id>/unlike/", view=views.UnLikeImage.as_view(), name="unlike_image"),
    path("<int:comment_id>/comments/", view=views.CommentOnImage.as_view(), name="comment_image"),
    path("delete_comments/<int:comment_id>", view=views.DeleteComment.as_view(), name="comment")
]

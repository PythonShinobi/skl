from pathlib import Path
from flask import Blueprint, render_template, current_app


main_blueprint = Blueprint("main", __name__)

ALLOWED_IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}


def get_gallery_images():
    images_dir = Path(current_app.static_folder) / "images"

    if not images_dir.is_dir():
        return []

    return sorted(
        file.name
        for file in images_dir.iterdir()
        if file.is_file()
        and file.suffix.lower() in ALLOWED_IMAGE_EXTENSIONS
    )


@main_blueprint.route("/")
def index():
    images = get_gallery_images()

    return render_template(
        "index.html",
        images=images,
        image_names=set(images)
    )
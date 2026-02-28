from mongoengine import Document, StringField, IntField, EmailField, URLField, FileField, DateTimeField, DateField, EmbeddedDocument, EmbeddedDocumentField, ListField


class ImageWithDescription(EmbeddedDocument):
    image_name = StringField(required=True)
    description = StringField(default="")


class Service(Document):
    title = StringField(max_length=120, required=True)
    description = StringField(required=True)
    order = IntField(default=0)

    meta = {"collection": "services"}

    def __str__(self):
        return self.title


class PortfolioItem(Document):
    title = StringField(max_length=160, required=True)
    category = StringField(max_length=80, required=True)
    summary = StringField(required=True)
    image_url = URLField()
    images = ListField(EmbeddedDocumentField(ImageWithDescription), default=[])

    meta = {"collection": "portfolio_items"}

    def __str__(self):
        return self.title


class Rfq(Document):
    full_name = StringField(max_length=120, required=True)
    company = StringField(max_length=160)
    email = EmailField(required=True)
    phone = StringField(max_length=40)
    service = StringField(max_length=120, required=True)
    budget = StringField(max_length=80)
    message = StringField(required=True)
    attachment = FileField()
    created_at = DateTimeField()

    meta = {"collection": "rfqs"}

    def __str__(self):
        return f"RFQ {self.full_name}"


class NewsPost(Document):
    title = StringField(max_length=160, required=True)
    slug = StringField(unique=True, required=True)
    excerpt = StringField(required=True)
    body = StringField(required=True)
    published_at = DateField(required=True)

    meta = {"collection": "news_posts"}

    def __str__(self):
        return self.title

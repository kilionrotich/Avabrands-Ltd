from rest_framework.permissions import BasePermission


class IsInGroup(BasePermission):
    required_groups = []

    def has_permission(self, request, view):
        if request.method in ("GET", "HEAD", "OPTIONS"):
            return True
        if not request.user or not request.user.is_authenticated:
            return False
        groups = set(request.user.groups.values_list("name", flat=True))
        return bool(groups.intersection(set(self.required_groups)))

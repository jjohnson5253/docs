curl -X GET \
    -H 'Content-Type: application/json' \
    -H 'Accept: application/json' \
    -b cookie.txt  \
    "https://{project.slug}.projects.oryapis.com/self-service/registration/browser"
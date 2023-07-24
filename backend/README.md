## Plant Greenhouse (Back-end)

This is the back-end part of the internship application.

# API Documentation

The API to the application is described below.

## Create a new family

### Request

`POST /api/families`

    'Accept: application/json' http://localhost:8080/api/families

### Body

```json
{
  "name": "Family1"
  }
}
```

### Response

    HTTP/1.1 201 Created
    Date: Mon, 01 Jan 2000 00:00:00 GMT
    Status: 201 Created
    Connection: keep-alive
    Content-Type: application/json

```json
{
    "familyId": 1,
    "name": "Family1"
    }
}
```

## Get list of all families

### Request

`GET /api/families`

    'Accept: application/json' http://localhost:8080/api/families

### Response

    HTTP/1.1 200 OK
    Date: Mon, 01 Jan 2000 00:00:00 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json

```json
[
    {
        "familyId": 1,
        "name": "Family1"
        }
    }
]
```

## Get a specific family

### Request

`GET /api/families/1`

    'Accept: application/json' http://localhost:8080/api/families/1

### Response

    HTTP/1.1 200 OK
    Date: Mon, 01 Jan 2000 00:00:00 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json

```json
[
    {
        "familyId": 1,
        "name": "Family1"
        }
    }
]
```

## Edit a family

### Request

`PUT /api/families`

    'Accept: application/json' http://localhost:8080/api/families

### Body

```json
{
  "familyId": 1,
  "name": "Family11"
}
```

### Response

    HTTP/1.1 201 Created
    Date: Mon, 01 Jan 2000 00:00:00 GMT
    Status: 201 Created
    Connection: keep-alive
    Content-Type: application/json

```json
{
  "familyId": 1,
  "name": "Family11"
}
```

## Delete a family

### Request

`DELETE /api/families/1`

    'Accept: application/json' http://localhost:8080/api/families/1

### Response

    HTTP/1.1 204 No Content
    Date: Mon, 01 Jan 2000 00:00:00 GMT
    Status: 204 No Content
    Connection: keep-alive
    Content-Type: application/json

## Delete all families

### Request

`DELETE /api/families`

    'Accept: application/json' http://localhost:8080/api/families

### Response

    HTTP/1.1 204 No Content
    Date: Mon, 01 Jan 2000 00:00:00 GMT
    Status: 204 No Content
    Connection: keep-alive
    Content-Type: application/json

## Create a new plant

### Request

`POST /api/plants`

    'Accept: application/json' http://localhost:8080/api/plants

### Body

```json
{
  "name": "Plant1",
  "species": "Species1",
  "nativeRegion": "NativeRegion1",
  "familyId": 1
}
```

### Response

    HTTP/1.1 201 Created
    Date: Mon, 01 Jan 2000 00:00:00 GMT
    Status: 201 Created
    Connection: keep-alive
    Content-Type: application/json

```json
{
    "plantId": 1,
    "name": "Plant1",
    "species": "Species1",
    "nativeRegion": "NativeRegion1",
    "createdAt": null,
    "family": {
        "familyId": 1,
        "name": "Family1"
    }
}
```

## Get list of all plants

### Request

`GET /api/plants`

    'Accept: application/json' http://localhost:8080/api/plants

### Response

    HTTP/1.1 200 OK
    Date: Mon, 01 Jan 2000 00:00:00 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json

```json
[
    {
        "plantId": 1,
        "name": "Plant1",
        "species": "Species1",
        "nativeRegion": "NativeRegion1",
        "createdAt": null,
        "family": {
            "familyId": 1,
            "name": "Family1"
        }
    }
]
```

## Get a specific plant

### Request

`GET /api/plants/1`

    'Accept: application/json' http://localhost:8080/api/plants/1

### Response

    HTTP/1.1 200 OK
    Date: Mon, 01 Jan 2000 00:00:00 GMT
    Status: 200 OK
    Connection: keep-alive
    Content-Type: application/json

```json
[
    {
        "plantId": 1,
        "name": "Plant1",
        "species": "Species1",
        "nativeRegion": "NativeRegion1",
        "createdAt": null,
        "family": {
            "familyId": 1,
            "name": "Family1"
        }
    }
]
```

## Edit a plant

### Request

`PUT /api/plants`

    'Accept: application/json' http://localhost:8080/api/plants

### Body

```json
{
  "plantId": 1,
  "name": "Plant11",
  "species": "Species11",
  "nativeRegion": "NativeRegion11",
  "family": {
    "familyId": 2,
    "name": "Family2"
  }
}
```

### Response

    HTTP/1.1 201 Created
    Date: Mon, 01 Jan 2000 00:00:00 GMT
    Status: 201 Created
    Connection: keep-alive
    Content-Type: application/json

```json
{
  "plantId": 1,
  "name": "Plant11",
  "species": "Species11",
  "nativeRegion": "NativeRegion11",
  "family": {
    "familyId": 2,
    "name": "Family2"
  }
}
```

## Delete a plant

### Request

`DELETE /api/plants/1`

    'Accept: application/json' http://localhost:8080/api/plants/1

### Response

    HTTP/1.1 204 No Content
    Date: Mon, 01 Jan 2000 00:00:00 GMT
    Status: 204 No Content
    Connection: keep-alive
    Content-Type: application/json

## Delete all plants

### Request

`DELETE /api/plants`

    'Accept: application/json' http://localhost:8080/api/plants

### Response

    HTTP/1.1 204 No Content
    Date: Mon, 01 Jan 2000 00:00:00 GMT
    Status: 204 No Content
    Connection: keep-alive
    Content-Type: application/json
# alx-project-0x14

## API Overview
The MoviesDatabase API provides a comprehensive way to access information about movies, TV shows, and celebrities. The API allows users to fetch detailed metadata, search for specific titles or people, retrieve ratings, and much more. This makes it ideal for building movie recommendation systems, apps, or databases that require up-to-date entertainment data.

## API Version
The current API version, as stated in the documentation, is v1.

## Available Endpoints
Here are the main endpoints of the MoviesDatabase API:

- **GET /movies**: Retrieves a list of movies based on query parameters like genre, year, or popularity.
- **GET /movies/{id}**: Fetches detailed information about a specific movie using its unique ID.
- **GET /tvshows**: Provides a list of TV shows with filters similar to the movies endpoint.
- **GET /tvshows/{id}**: Fetches detailed information about a specific TV show by ID.
- **GET /celebrities**: Returns a list of celebrities with filtering options for professions like actors, directors, etc.
- **GET /celebrities/{id}**: Retrieves detailed data on a specific celebrity using their ID.

## Request and Response Format

### Request Format
Most requests to the API require:
- An HTTP method (GET, POST, etc.).
- Query parameters for filtering or specific IDs in the URL path.
- Headers such as `Authorization` for authentication.

Example request:
```
GET /movies?genre=action&year=2022 HTTP/1.1
Host: api.moviesdatabase.com
Authorization: Bearer YOUR_API_KEY
```

### Response Format
The API response is typically in JSON format. Here is a sample response for the `/movies/{id}` endpoint:

```json
{
  "id": "12345",
  "title": "Inception",
  "release_date": "2010-07-16",
  "genres": ["Action", "Sci-Fi"],
  "rating": 8.8,
  "director": "Christopher Nolan",
  "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt"]
}
```

## Authentication
To authenticate with the MoviesDatabase API:
1. Obtain an API key by registering on the API provider's website.
2. Include the API key in the `Authorization` header of each request.

Example:
```
Authorization: Bearer YOUR_API_KEY
```
Some endpoints may also require additional authentication or permissions based on the data requested.

## Error Handling
The API returns error codes for various issues. Below are some common ones:

- **400 Bad Request**: The request was malformed or missing required parameters.
- **401 Unauthorized**: API key is missing, invalid, or expired.
- **404 Not Found**: The requested resource does not exist.
- **500 Internal Server Error**: A problem occurred on the server-side.

Best practice:
- Use try-catch blocks to handle errors in your application.
- Log error details for debugging.
- Implement retries for transient errors like 500.

## Usage Limits and Best Practices
### Usage Limits
- Each user is allowed up to 1,000 API requests per day.
- Rate limits restrict the number of requests to 10 per second.

### Best Practices
- Cache frequently accessed data to reduce API calls.
- Optimize queries by using filters and pagination.
- Respect the rate limits to avoid being throttled or banned.
- Use descriptive and minimal fields in responses to improve performance (e.g., `fields=title,release_date`).


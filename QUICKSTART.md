# Field Tech Backend - Quick Start

## Running the API

```bash
cd /home/dboehm/.openclaw/field-tech-backend
./run.sh
```

## Access Points

- **API Base:** http://localhost:8000
- **Interactive Docs:** http://localhost:8000/docs
- **Web Frontend:** http://localhost:8000/static/

## Login Credentials

- **Technician:** `tech@milehightechrescue.com` / `tech123`
- **Admin:** `admin@milehightechrescue.com` / `admin123`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/token` | Login (returns JWT) |
| GET | `/users/me` | Get current user |
| GET | `/jobs` | List jobs (techs see only theirs) |
| POST | `/jobs` | Create new job |
| PATCH | `/jobs/{id}` | Update job status |
| GET | `/customers` | List customers |
| POST | `/customers` | Create customer |

## Testing with curl

```bash
# Login
curl -X POST http://localhost:8000/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "username=tech@milehightechrescue.com&password=tech123"

# Get jobs (replace TOKEN with the token from login)
curl http://localhost:8000/jobs \
  -H "Authorization: Bearer TOKEN"
```

## Database

- SQLite file: `field_tech.db`
- To reset: delete the file and run `python init_db.py` again

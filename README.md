# bits-scalable-services-project

## For running with dockers
> Note: Make sure you have stopped the mongodb service

For running all the services
```
docker-compose up --build -d
```

For stopping all the services
```
docker-compose down
```

For checking logs of particular service
```
docker logs <service-name> -f
```

> Note: For running normally change the mongo url to localhost and run the individual services as mentioned in the service README file

---

Vaccination Drive Service API is created
## Vaccination Drive Service

Handles Vaccination drives CRUD for the School Vaccination Portal.

### Endpoints
- `POST /drives`
- `GET /drives`
- `GET /drives/upcoming`
- `GET /drives/:id`
- `PUT /drives/:id`
- `PUT /drives/:id/disable`

### Setup to run APIs with Postman
```bash
npm install
npm start
```

---
Student Service API is created
## Student Service

Handles student CRUD, vaccination marking, and CSV import for the School Vaccination Portal.

### Endpoints
- `GET /students`
- `GET /students/:id`
- `POST /students`
- `PUT /students/:id`
- `PATCH /students/:id/vaccinate`

### Setup to run APIs with Postman
```bash
npm install
npm start
```

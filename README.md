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

### Setup and Run service
```bash
npm install
npm start
```
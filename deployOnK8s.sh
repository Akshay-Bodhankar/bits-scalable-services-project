#!/bin/bash

echo "🚀 Starting deployment on Kubernetes cluster..."

echo "➡️ Starting Kubernetes cluster..."
minikube start

echo "➡️ Setting Docker environment variables..."
eval $(minikube docker-env)

echo "➡️ Creating 'bits-scalable-services' namespace..."
kubectl apply -f ./k8s/namespace.yaml

echo "➡️ Deploying MongoDB..."
kubectl apply -f ./k8s/ --namespace=bits-scalable-services

echo "➡️ Building Docker images..."

docker build -t k8s-auth-service ./auth-service/.
docker build -t k8s-drive-service ./driveService/.
docker build -t k8s-student-service ./StudentService/.

echo "➡️ Deploying Auth Service..."
kubectl apply -f auth-service/deployment.yaml --namespace=bits-scalable-services
kubectl apply -f auth-service/service.yaml --namespace=bits-scalable-services


echo "➡️ Deploying Drive Service..."
kubectl apply -f driveService/deployment.yaml --namespace=bits-scalable-services
kubectl apply -f driveService/service.yaml --namespace=bits-scalable-services

echo "➡️ Deploying Student Service..."
kubectl apply -f StudentService/deployment.yaml --namespace=bits-scalable-services
kubectl apply -f StudentService/service.yaml --namespace=bits-scalable-services

echo "➡️ All resources in 'bits-scalable-services' namespace:"
kubectl get all -n bits-scalable-services -o wide


echo "✅ Deployment completed successfully."

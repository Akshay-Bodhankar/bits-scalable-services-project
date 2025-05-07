echo "Starting deployment on Kubernetes cluster..."
echo "Starting Kubernetes cluster..."
minikube start
echo "Setting Environment Variables..."
eval $(minikube docker-env)
echo "Starting Services..."

echo "Starting Vaccination Drive Services..."
docker build -t k8s-drive-service ./driveService/.
kubectl run drive-service --image=k8s-drive-service --port=9582 --image-pull-policy=Never
kubectl expose pod drive-service --type=NodePort --port=9582 --target-port=9582


echo "Starting Student Services..."
docker build -t k8s-student-service ./StudentService/.
kubectl run student-service --image=k8s-student-service --port=4001 --image-pull-policy=Never
kubectl expose pod student-service --type=NodePort --port=4001 --target-port=4001


echo "Starting MongoDB..."
kubectl run mongo --image=mongo --port=27017 --image-pull-policy=Never
kubectl expose pod mongo --type=NodePort --port=27017 --target-port=27017
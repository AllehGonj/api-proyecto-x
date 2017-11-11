sudo docker rm mongodb_server
sudo docker run -p 27017:27017 --name mongodb_server mongo
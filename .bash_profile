terminate(){
  lsof -P | grep ':35731' | awk '{print $2}' | xargs kill -9 
}

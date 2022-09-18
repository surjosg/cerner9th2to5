#time client using Ruby
require 'socket'        
socketClient = TCPSocket.open('localhost', 49152)
socketClient.puts "America/New_York\n"
line = socketClient.gets     
puts line.chop       
socketClient.close               

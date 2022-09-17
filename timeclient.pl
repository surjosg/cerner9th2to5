use strict;
use warnings;
use IO::Socket;
my $socket = new IO::Socket::INET (PeerAddr => 'localhost',PeerPort => '49152',Proto => 'tcp');
die "Could not create socket: $!n" unless $socket;
print $socket "Pacific/Honolulu\n";
print <$socket>;
close($socket);

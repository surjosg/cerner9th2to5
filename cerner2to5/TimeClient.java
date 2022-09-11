//cerner_2^5_2022
package cerner2to5;
public class TimeClient {
	public static void main(String[] args) {
		for(String zoneId: java.time.ZoneId.getAvailableZoneIds()) {
			new Thread(new Runnable() { public void run() {
			try {
				java.net.Socket socket = new java.net.Socket("localhost",49152);
				java.io.BufferedReader reader = new java.io.BufferedReader(new java.io.InputStreamReader(socket.getInputStream()));
				java.io.PrintWriter out = new java.io.PrintWriter(socket.getOutputStream(), true);
				out.println(zoneId);
				System.out.println(zoneId + " : " + reader.readLine());
				socket.close();	
			}catch(Exception ex){System.out.println(ex);}
			}}).start();
		}
	}
}

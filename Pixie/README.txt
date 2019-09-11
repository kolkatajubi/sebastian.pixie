-------------------------------------------------------
------------------------READ ME------------------------
-------------------------------------------------------


Database Login in server --
	$ ssh root@134.209.149.32

Application Login in server --
	$ ssh root@134.209.157.56


All DataBase Password -  kolkatachampspixie
DataBase IP - 10.139.47.224:27017
Redis IP - 10.139.47.224:6379


To create a new user send the following Schema--->
{
	username: "<username>",
	password: "<password>",
	referral: "<username>"
}


To read a user by username send the following Schema--->
{
	username: "<username>"
}


To read a user by username send the following Schema--->
{
	referral: "<referral>"
}


Expected output :
Data is in form of array of objects -->

{"status":"success","data":[{"_id":"5d79105cd183402fa32fdb9a","username":"Sebastian","password":"1234","referral":"q45@hX","__v":0}]}

{"status":"success","data":[{"_id":"5d79105cd183402fa32fdb9a","username":"Sebastian","password":"1234","referral":"q45@hX","__v":0}]}


------------------------THE END------------------------
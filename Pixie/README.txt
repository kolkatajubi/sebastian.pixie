-------------------------------------------------------
------------------------READ ME------------------------
-------------------------------------------------------


Database Login in server --
	$ ssh root@134.209.157.56


DataBase Server Password -  kolkatachampspixie
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
{ status: "success", data: data }  OR  { status: "error", data: err }


------------------------THE END------------------------